/*
Use hooks to run the following scenario
Scenario 1
Go to oragngeHRM page,
Login - Click on Admin - logout

Scenario 2
Go to oragngeHRM page,
Login - Click on PIM - logout
*/

import { test, expect } from '@playwright/test'
var page;

// hooks can be put in any order, already know the priority
// Reco put all hooks in one place in the beginning only - more clarity

// any of these hooks cannot take page fixture
// test.beforeAll( 'Before All Hook', async({ }) => { 
//     console.log('Before All Hook');    
// })

// test.afterAll( 'After All Hook', async({ }) => {
//     console.log('After All Hook');      
// })

// test.beforeEach( 'Before Each Hook', async({ }) => {
//     console.log('Before Each Hook');
// })

// test.afterEach( 'After each Hook', async({  }) => {

//     console.log('After each Hook');     
// })

test.beforeEach( 'Before Each Hook', async({ page }) => {// not giving error not sure may be latest version allows
// test.beforeEach( 'Before Each Hook', async({ browser }) => {// not giving error not sure may be latest version allows
// vignesh to check - adding browser did not work
//page = await browser.newPage();
    
    console.log('Before Each Hook'); // var, let or const -> use var global scope - within this context create a page, 
    await page.goto("https://opensource-demo.orangehrmlive.com"); 
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    
})

test.afterEach( 'After each Hook', async({ page }) => {
    console.log('After each Hook');   
    await page.locator(".oxd-userdropdown-tab").click();    
    await page.locator("a[href='/web/index.php/auth/logout']").click();    
})

// Add assertions in hooks itself

// test cases - // All will run in parallel mode
// CHange to false to see - sequential execution
test( 'Test 1', async({ page }) => { 
    console.log('Test 1');   
    //await page.goto("https://opensource-demo.orangehrmlive.com"); 
    //await page.locator('input[name="username"]').fill('Admin');
    //await page.locator('input[name="password"]').fill('admin123');
    //await page.locator('button[type="submit"]').click();

    // Click o Admin and PIM links
    // Admin - 
    // <a data-v-6475d26d="" class="oxd-main-menu-item active" href="/web/index.php/admin/viewAdminModule"><svg data-v-bddebfba="" data-v-6475d26d="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 500 500" role="presentation" class="oxd-icon oxd-main-menu-item--icon"><g fill="currentColor"><path data-v-bddebfba="" d="M 480.469 500 C 469.682 500 460.938 491.256 460.938 480.469 C 460.938 441.698 429.604 410.156 391.089 410.156 L 374.537 410.156 C 336.022 410.156 304.688 441.698 304.688 480.469 C 304.688 491.256 295.943 500 285.156 500 C 274.369 500 265.625 491.256 265.625 480.469 C 265.625 420.159 314.482 371.094 374.536 371.094 L 391.088 371.094 C 451.143 371.094 500 420.159 500 480.469 C 500 491.256 491.256 500 480.469 500 Z M 464.844 258.789 C 464.844 213.019 427.606 175.781 381.836 175.781 C 336.065 175.781 298.828 213.019 298.828 258.789 C 298.828 304.56 336.065 341.797 381.836 341.797 C 427.606 341.797 464.844 304.56 464.844 258.789 Z M 425.781 258.789 C 425.781 283.021 406.067 302.734 381.836 302.734 C 357.605 302.734 337.891 283.021 337.891 258.789 C 337.891 234.558 357.605 214.844 381.836 214.844 C 406.067 214.844 425.781 234.558 425.781 258.789 Z M 226.563 480.469 C 226.563 469.682 217.818 460.938 207.031 460.938 L 117.167 460.938 C 74.101 460.938 39.063 425.899 39.063 382.833 L 39.063 117.167 C 39.063 74.101 74.101 39.063 117.167 39.063 L 296.915 39.063 C 339.982 39.063 375.02 74.101 375.02 117.167 C 375.02 127.954 383.764 136.698 394.551 136.698 C 405.338 136.698 414.082 127.954 414.082 117.167 C 414.083 52.562 361.522 0 296.896 0 L 117.167 0 C 52.562 0 0 52.562 0 117.167 L 0 382.832 C 0 447.439 52.562 500 117.167 500 L 207.031 500 C 217.818 500 226.563 491.256 226.563 480.469 Z M 122.07 98.633 C 108.587 98.633 97.656 109.563 97.656 123.047 C 97.656 136.53 108.587 147.461 122.07 147.461 C 135.554 147.461 146.484 136.53 146.484 123.047 C 146.484 109.563 135.554 98.633 122.07 98.633 Z M 206.055 98.633 C 192.571 98.633 181.641 109.563 181.641 123.047 C 181.641 136.53 192.571 147.461 206.055 147.461 C 219.538 147.461 230.469 136.53 230.469 123.047 C 230.469 109.563 219.538 98.633 206.055 98.633 Z M 290.039 98.633 C 276.556 98.633 265.625 109.563 265.625 123.047 C 265.625 136.53 276.556 147.461 290.039 147.461 C 303.522 147.461 314.453 136.53 314.453 123.047 C 314.453 109.563 303.522 98.633 290.039 98.633 Z M 122.07 182.617 C 108.587 182.617 97.656 193.548 97.656 207.031 C 97.656 220.515 108.587 231.445 122.07 231.445 C 135.554 231.445 146.484 220.515 146.484 207.031 C 146.484 193.548 135.554 182.617 122.07 182.617 Z M 122.07 266.602 C 108.587 266.602 97.656 277.532 97.656 291.016 C 97.656 304.499 108.587 315.43 122.07 315.43 C 135.554 315.43 146.484 304.499 146.484 291.016 C 146.484 277.532 135.554 266.602 122.07 266.602 Z M 122.07 350.586 C 108.587 350.586 97.656 361.517 97.656 375 C 97.656 388.483 108.587 399.414 122.07 399.414 C 135.554 399.414 146.484 388.483 146.484 375 C 146.484 361.517 135.554 350.586 122.07 350.586 Z M 206.055 182.617 C 192.571 182.617 181.641 193.548 181.641 207.031 C 181.641 220.515 192.571 231.445 206.055 231.445 C 219.538 231.445 230.469 220.515 230.469 207.031 C 230.469 193.548 219.538 182.617 206.055 182.617 Z M 206.055 266.602 C 192.571 266.602 181.641 277.532 181.641 291.016 C 181.641 304.499 192.571 315.43 206.055 315.43 C 219.538 315.43 230.469 304.499 230.469 291.016 C 230.469 277.532 219.538 266.602 206.055 266.602 Z M 206.055 350.586 C 192.571 350.586 181.641 361.517 181.641 375 C 181.641 388.483 192.571 399.414 206.055 399.414 C 219.538 399.414 230.469 388.483 230.469 375 C 230.469 361.517 219.538 350.586 206.055 350.586 Z"></path></g></svg><span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span></a>
    await page.locator("a[href='/web/index.php/admin/viewAdminModule']").click();
})

test( 'Test 2', async({ page }) => {
    console.log('Test 2');  
    //await page.goto("https://opensource-demo.orangehrmlive.com"); 
    // await page.locator('input[name="username"]').fill('Admin');
    // await page.locator('input[name="password"]').fill('admin123');

    // // Click o Admin and PIM links
    // // PIM - <a data-v-6475d26d="" class="oxd-main-menu-item active" href="/web/index.php/pim/viewPimModule">
    
    await page.locator("a[href='/web/index.php/pim/viewPimModule']").click();    

    // // Code for - log out
    // //<a href="/web/index.php/auth/logout" role="menuitem" class="oxd-userdropdown-tab">Logout</a>
    // // use .  char for class - click on drop down then - logout
    // await page.locator(".oxd-userdropdown-tab").click();    
    // await page.locator("a[href='/web/index.php/auth/logout']").click();  

    // Login beforeEach, logout afterEach
})

// test( 'Test 3', async({ page }) => {
//     console.log('Test 3');
// })

// test( 'Test 4', async({ page }) => {
//     console.log('Test 4');     
// })

/*
Before All Hook
Before Each Hook
Test 1
After each Hook
[chromium] › hooksTest.spec.ts:35:5 › Test 2
Before Each Hook
Test 2
After each Hook
[chromium] › hooksTest.spec.ts:39:5 › Test 3
Before Each Hook
Test 3
After each Hook
[chromium] › hooksTest.spec.ts:43:5 › Test 4
Before Each Hook
Test 4
After each Hook
After All Hook
  4 passed (3.8s)
*/

/*
What is framework?
Way to write tests 
Way to organise the code
Code reusability.
Way of handling exceptions, failures.

Ways to define constants, 
	ways to use Utilities, 
	define .gitignore, 
	Use .env file to use credentials 
	Reporting
	Running on local and CI/CD pipeline
*/