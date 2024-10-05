import {test, expect} from '@playwright/test'

test('Google Test', async({page}) => {
    /*
    each page runs in its own env, results of one page does not affect another one
    runs in an imaginary browser context => individual window context
    await - wait for an action to complete - mandatory - for every action
    Looks like all actions are Synchronous - then why need asynchronous way
    TS language is Asynchronous - do it asynchronously , wait for each action to be done first
    as per design - needed for both action and elements

    npx - npm executable

    Asynchronous vs Synchronous
    I promise to resolve the Promise - I am working till I get the response from the website
    I am done = given by await

    by default PW executes all TCs in headless mode.
    How to know it went to the goolge page - assert
    Default time max=30 ms, min=any 1 ms or 2 ms - only mention the max
    */

    await page.goto("https://www.google.com");

    //const actualTitle = await page.title();
    //const expectedTitle = "Google";
    //expect(actualTitle).toEqual(expectedTitle);

    // try to minimize memory allocation - 500-1000 test cases - need to reduce lines of code
    expect(await page.title()).toEqual("Google");

    // 1 test - why 3 tests? 1 - Chromium, 1 - Webkit, 1 - FireFox
    // Run tests in parallel - Playwrigh.config.ts - customizable
    // 3 workers - ore workers in parallel - faster
    // Running 3 tests (on 3 browsers) using 3 workers 

    // npx playwright show-report = default built-in reporting 
    // No need to write Fixtures, before-hooks, afterhooks - all done by PW
    // npx playwright test --project=chromium --headed // cannot use chrome, firefox should work
    // Running 1 test using 1 worker
    // Can execute - Testing tool on left hand side
    // npx playwright test --ui
    // code-gen not really used but to start with - the initial push you can use it
    // npx playwright codegen
    // npx playwright codegen -o ./tests/codeGentestAuto.spec.ts => first create this file and then recording and save here
    // it can auto copy and paste if you want to edit in case rerunning 
    // Trace-Viewer 
    // Browser – Page Context - Page =>Page is the 3rd layer

    // Base page
    // login(){
    // }
// basepage.login()

/*Asynchronous vs Synchronous

1.	All the methods happening within this code block is asynchronous
A => meaning 1 line will not depend on the other one.
That is the nature of the Typescript => being Async

2.	I am going to convert asynchronous call to synchronous call by resolving the promise
All the methods will be on top of the promise 
What I mean by that is :
All the methods being called => .goto(), .click() => I will return a Promise
By using the keyword => Await

Await => converting and A=> S call

Fixture – in PW will hold the data created by a Page Context.
*/

})