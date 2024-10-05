// Selenium - handling a tab window vs window - different
// PW same no difference 

import { test, expect } from '@playwright/test'


test( 'Single Tab Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    
    // Consent window not showing for me in normal or incognito mode

    // button[class="btn btn-info"] - may be use text function
 

    // I need to do a series of actions - PW will give an heads up just like in ALert, passing control to you
    // Event listner but in a different way 
    // 2 actions happen: 1. Click on button do all the loading, 2. Click to opena ne wtab - passing control  wait until page loaded

    // Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
    // wait for 2 actions to complete
    // PW does not know what will be opened - so capture in a variable
    const [newTab] = await Promise.all([
        // [newTab] - a var holding details of array or list elements
        // Asking it to wait for Promise.all - actions to happen specified in the array 
        // popup is triggered bc of this action - 2 args separated by comma but no comma in the end
        // FAILED -  waiting for event "popup"
        // Action 1 popup - depends on Action 2 click
        page.waitForEvent('popup'),
        //await page.locator('button:has-text("click")').click() - IS this FAILING ?? Yes use other way #2 fixed the issue
        //1. identify locator first then click() 2. checkout other way - directly use click() on the locator we apss 
        await page.click('button:has-text("click")')
    ])
    console.log(newTab);// like windowHandler in Selenium
    await newTab.waitForLoadState();
    await newTab.locator('//span[normalize-space()="Downloads"]').click();// take xpath from the CSSSelectors hub or LetXpath quickly
    await page.waitForTimeout(3000);
    // Done with all my work with the current tab
    // Give control back to the original tab
    // Parent -> page, child -> newTab
    // Close the child first - focus on new window so to avoid any glitch close it
    await newTab.close(); // control back to parent window
    await page.waitForTimeout(3000);
})

/*
await newTab.waitForLoadState(); - wait for all images all APIs interaction between network all elements to be fully loaded, lazy loading 
DH Q:
1. Line 25  - page.waitForEvent('popup'), - is it new popup or a new page
in real times those popups or tabs are actual WIndows
in our case when we click on popup - we open a regular popup developed by dev not a junk popup
2.From PW' perspective - everything is tab or window - same
3.popup, dialog - mandatory reserved words
*/

/*
4.Selenium - handling a tab window vs window - different
PW same - no difference - everything a POPUP - same code
Single Tab and Single Window - opens only 1 window so no indexting needed

<a href="#Seperate" data-toggle="tab" class="analystic" style="" aria-expanded="true" 
xpath="1">Open New Seperate Windows</a>
*/

test( 'Single Window Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    //await page.locator('a[href="#Separate"]').click(); // FAILING //a[normalize-space(text())='Open New Seperate Windows']
    await page.locator('//a[normalize-space(text())="Open New Seperate Windows"]').click(); // xpath from LetXPath

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ])
    await newWindow.waitForLoadState();
    await newWindow.locator('//span[normalize-space()="Downloads"]').click();
    await newWindow.close(); // control back to parent window
})

/*
Multiple Tab and multiple Window - same code
*/
test.only( 'Multiple Tab Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    
    await page.locator('//a[normalize-space(text())="Open Seperate Multiple Windows"]').click(); // xpath from LetXPath

    const [multiTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])
    await multiTab.waitForLoadState();
    const pages = multiTab.context().pages(); // pages[] fine too 

    // which tab opens
    pages.forEach(tab =>{
        console.log(tab.url());
    })
    
    // 1st page
    await pages[1].locator('#email').fill("rajani@gmail.com"); // array starts with 0 but here - 1 only
    
    // 2nd page 
    await page[2].locator('//span[normalize-space()="Downloads"]').click();// downloads not working
    await page.waitForTimeout(5000);// parent 
    await pages[1].close(); // index=1
    await pages[2].close(); // index=2
    await page.waitForTimeout(5000);// parent
})

// Exact same code apply for - Multiple Windows - code same behavior different
/*
from performance perspective : use waitForLoadState - with care
await page.waitForLoadState("domcontentloaded")
await page.waitForLoadState("networkidle");
Check Vignesh/Dhrumil notes
*/
