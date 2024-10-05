/* 
1. ID - first one most unique
2. Name
3. Placeholder
4. Role
5. Data-text
6. Class - Last one

Difference between CSS Selector vs XAPTH
CSS - Faster - diretc hot - no traversing - better performance
XPATH - slower - traversing slows down searching - top to bottom
*/
// saucedemo.com
// Copy outer HTML
//<input class="input_error form_input" placeholder="Username" type="text" data-test="username" 
//id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="standard_user">

// Syntax for CSS --> tagName[attribute="value"] --> ex: input[id="user-name"]
// Syntax for XPATH --> //tagName[@attribute="value"] ex: // and @ --> //input[@id="user-name"]

// Syntax for ID Attribute in CSS --> #value ex: #idvalue --> #user-name
// Syntax for Class Attribute in CSS --> .value ex: .form_input --> 2 matches

// Case-sensitive
// Always test it in the DOM - inspect before trying in the test case

// locators strategies
// Selenium --> By.id("user-name"), css, name
// PW only 2 locators - css/xpath
// css --> multiple options

// Always use value --> ' ' single quotes since DOM has --> " " double quote
// pause() --> manually stop)
// F12 --> invoke DOM directly without using Inspect
// First master fundamentals of locators then use - Plugins
// Use PW-Inspector - record button to het the locators

/* page.locator
The method returns an element locator that can be used to perform actions on this page / frame. 
Locator is resolved to the element immediately before performing an action, so a series of actions 
on the same locator can in fact be performed on different DOM elements. 
That would happen if the DOM structure between those actions has changed.
*/

import { test, expect } from '@playwright/test'

test( 'Locator Startegies', async({ page }) => {
    await page.goto("https://www.saucedemo.com"); // return Promise
    await page.pause(); 
    await page.locator('#user-name').click(); // return Locator element, click -> Text Box -> Fulfill Promise
    await page.locator('#user-name').fill("standard_user"); // Safe to use single quote
    await page.locator("//input[@id='password']").fill("secret_sauce"); //input[@id='password'] or #password -> XPATH
    await page.locator('#login-button').click(); // Submit button -> any single or double quote
    
    //await page.pause();
    //await page.waitForTimeout(5000) // 5 
    
    // Highligthing means - locator found 
    // Red circle - action can be performed


    // add await page.pause() -> Record and get the locator from PW-Instector
})

/*
Page.pause() vs page.waitFor(2000)
Page.pause() - terminate manually - open PW-Inspector - execution paused for infinite time
page.waitForTimeout(2000) - wait until this time - then move to next line and complete the execution
*/

/*
1. General way - works for all automation tool
2. PW Inspector - built-in capability - 1.Record - 2. Pick Locator 3. Hover over element 4. Check Locator for value
but be careful - validate by order manually first use ID then lastly use PW-Instpector
3. External Plugins - LetXpath or SelectorsHub

*/









