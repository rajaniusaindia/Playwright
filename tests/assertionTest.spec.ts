/*
only with assertions we will know if test is passing or not
1.letskodeit.com/practice
2. await either before expect or before function both will work but expect has await by default
*/

import { test, expect } from '@playwright/test'
import { afterEach } from 'node:test';

test( 'Visible/Hidden', async({ page }) => {

    await page.goto("https://www.letskodeit.com/practice");
    await page.pause();
    // await either before expect or before function both will work but expect has await by default 
    expect(await page.locator("#displayed-text")).toBeVisible(); // text box should be visible
    
    //expect(await page.locator("#displayed-text")).not.toBeVisible(); // same as toBeHidden
    //expect(await page.locator("#displayed-text")).toBeHidden(); // why this worked - should have FAILED

    await page.locator("#hide-textbox").click();
    //expect(await page.locator("#displayed-text")).toBeVisible(); // it will not pass since text box still hidden
    expect(await page.locator("#displayed-text")).toBeHidden(); // opposite of toBeVisible()
    await page.locator("#show-textbox").click();// make it bvisible by clicking - Show text Box
    expect(await page.locator("#displayed-text")).toBeVisible(); // again expect text box to be visible
    await page.locator("#displayed-text").fill("Playwright");// fill text
    await page.pause();

   
    // tests pass - not the assertions - no matter how many expects we have
    // Session by default is never Faild - runs in incognito mode
})

/*
1.Assert based on attributes in a DOM
2.Always make sure to refresh page to load elements fresh
3.Hidden – element is still there just hidden
Delete – element deleted entirely from the DOM
How deleted – Devs have the code – may be an API call
4. Command+/ - comment block of code
5. use only - keyword to run just 1 test case
*/

test( 'Present/NotPresent', async({ page }) => {
    // assertion based on text
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await page.pause();

    // await page.locator('text=Add Element').click();// no double quote needed PW understands it is a string
    // logic - when not adding any element - count ==0
    // when adding an element - Delete button count = no of elements added

    // When page is loaded for the 1st time - DOM should not have this element - Count==0
    expect(await page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);// first load Delete not present
    await page.locator("text=Add Element").click(); // Using text based assertion
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);// Add element -> 1
    await page.locator("text=Add Element").click(); //Add element -> 2
    await page.locator("text=Add Element").click(); //Add element -> 3
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(3);// Total DeleteCount==1
    
    //const count = page.locator('button[onclick="deleteElement()"]').count();
    // Delete elements 2 and 3 using xpath & indexing
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click(); //Delete element -> 2
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click(); //Delete element -> 3
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);// Add element -> 1

    await page.pause();

})

/*
4. Any text related locators - make sure it is unique one  - 1 of 1

5. Q:Venu - Here elements are dynamically being added to the DOM.
How does PW know that there was some DOM change
A; Ex: Venu is cooking something but I don't know what he is cooking.
When I ask him for the cookie in the box - he gives me what ever he has the latest thing he has cooked.
May or may not be cookie. 
Everytime it will fetch the latest from the DOM
Any time you call the Page - you get the latest in the DOM - In Selenium you get the stale element

6. We can create a const for total number of Delete buttons we want to validate
But we want it to count instead of us giving the number

7. Await covers both - Implicit and Explicit or both are different in PW ? 
    1.Await - ex of Implicit wait - will wait for a particular element to load
    For any reason if you want your page to wait for some time use method:
    2.waitForTimeout - ex of implicit wait - await page.waitForTimeout(10000); 
    // wait this much - same as Selenium using Thread.sleep(10000)

Difference btn Implicit & Explicit waits  
ex; SUppose Add Element button is loaded in 5 secs - await page.locator(); 
but we ask it to wait for 10 secs - await page.waitForTimeout(10000) secs
does not matter if it loads in 2 secs or 10 secs, it will always wait for 10 secs

Explicit - // timeout mentioned in playwright.config // wait this much 
for same line of code - await page.locator("text=Add Element").click();

8. if special char in 'text'='Add Element" - use escape char -  'text'=/'Add Element"
don't use this syntax - text if asserting with dynamic text values
*/ 

/*
Enabled and Disabled
*/
test( 'enabled/Disabled', async({ page }) => {
    // assertion based on text
    await page.goto("https://letcode.in/buttons/");
    await page.pause();
    expect(await page.locator('#home')).toBeEnabled();
    expect(await page.locator('button[title="Disabled button"]')).toBeDisabled();

})

// Match text for - Button - Go to Home
test( 'Text Match and Mismatch', async({ page }) => {
    // assertion based on text
    await page.goto("https://letcode.in/buttons/");
    await page.pause();

    await expect(await page.locator('#home')).toHaveText('Goto Home');// not.toHaveText - FAIL Assertion can be negating
    await expect(await page.locator('button[title="Disabled button"]')).toHaveText('Disabled');

})

// Elelment attributes - name, Placeholder both have value='userbname' -> toHaveAttribute/
// Notice delay - shows syntax error then goes away
test( 'Element Attributes', async({ page }) => {
    // assertion based on text
    await page.goto("https://opensource-demo.orangehrmlive.com");
    // toHaveAttribute
    //await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username');// FAILED - Different username - Nombre de usuario

    // assertion with class - starts-with
    // <input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" 
    // placeholder="Username" autofocus="">
    // /.*\boxd-input\b.*/
    await expect(await page.locator('input[name="username"]')).toHaveAttribute('class', /.*\boxd-input\b.*/); // PASSED
    // await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /.*\boxd-input\b.*/);
    await page.pause();

})

// Elelment attributes - name, Placeholder both have value='userbname' -> toHaveAttribute/
// Notice delay - shows syntax error then goes away
test( 'Element Attributes with Class and RegEx', async({ page }) => {
    // assertion based on text
    await page.goto("https://opensource-demo.orangehrmlive.com");
    // toHaveAttribute
    //await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username');// FAILED - Different username - Nombre de usuario

    // assertion with class - starts-with
    // <input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" 
    // placeholder="Username" autofocus="">
    // /.*\boxd-input\b.*/
    await expect(await page.locator('input[name="username"]')).toHaveAttribute('class', /.*\boxd-input\b.*/); // PASSED
    // await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /.*\boxd-input\b.*/);
    await page.pause();

})

// Elelment attributes - name, Placeholder both have value='userbname' -> toHaveAttribute/
// Notice delay - shows syntax error then goes away
test.only( 'URL and Title', async({ page }) => {
    // assertion based on text
    await page.goto("https://opensource-demo.orangehrmlive.com");
    
    await expect(await page.url()).toEqual("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(await page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(await page.title()).toEqual("OrangeHRM");
    await expect(await page).toHaveTitle("OrangeHRM");

    // Partial Text  using this url
    // await expect(await page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(await page).toHaveTitle(/.*\bOrangeHRM\b.*/);

    await page.pause();

})

/*
PW - everything Hard assertion - FAILS and does not continue test, No Soft assertion
Await - always put with expect - page.locator and before also
// await expect(await page.title()).toEqual("OrangeHRM");

*/

/* Last Assertion - with screenshot
Not used much though
Pixel to Pixel comparison - screen to screen comparison
In Regular Manual Testing - take a screenshot then store as a reference in folder
Ask PW to take a screenshot and compare
Login - particular size, grey color - compare pixel to pixel
PW - not designed for Visual Testing or Visual Recognition Testing
As an Ad-On gives a feature
*/
test( 'Screenshot Assertion', async({ page }) => {
    // assertion with screenshot
    await page.goto("https://opensource-demo.orangehrmlive.com");

    await expect(await page.locator('input[name="username"]')).toBeVisible();

    //await expect(await page).toHaveScreenshot();// take screenshot and save it in this folder structure

    // FAILED since no reference to compare - 1st time
    // Error: A snapshot doesn't exist at /Users/rajanichoudhary/Applications/Playwright/tests/
    // assertionTest.spec.ts-snapshots/Screenshot-Assertion-1-chromium-darwin.png, writing actual.
    // 2nd time'
    
    // Try to fill field with a data - say username = 'Vignesh"
    // It will FAIL - will have to do the - Manual Inspection
    // Take screenshot before filling with a value and after

    //await page.locator('input[name="username"]').fill('Vignesh');
    //await expect(await page).toHaveScreenshot();

    // Be careful in uploading screenshot in github
    // Do minimum if required
    // Saves an empty screenshot
    // Load page maximize and then take screenshot
    // Content of a scrollable content 

    await page.pause();

})

/*
E2e Testing these types of assertions should not be done
Testing Pyramid

1. E2E - top  most
2. Integration - middle
3. Unit - lower level - visual testing at this level

Cannot take screenshot of a specific area
entire DOM screenshot
Screen resolution same as - on server where tests will run - caveats
Device to device resolutions change 
Screenshot-Nmae1, name2 like that - different file name
// JSON array - object - convert to String always
*/



