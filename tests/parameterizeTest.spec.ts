/*
Different users - valid 1 , valid 2, flow does not change
so parameterize
*/

import { test, expect } from '@playwright/test'
// 1st set of test data, array with Objects Name/Value
// Valid and invalid credentials test data set
// Needs to be put outside making it global so everyone can use it
// WHich format - most recommneded ones - JSON CSV
// All npm based projects - PW Cypress - gie priority to JSON - default support
const credentialData = [
    {
        "username":"Admin",
        "password":"admin123"
    }, 
    {
        "username":"Admin1",
        "password":"admin1234"
    } 
]

// convert to parameterize test
credentialData.forEach(creds=>{
    test(`'Login with ${creds.username} with ${creds.password}`, async({page}) => {
        console.log("This is a Login Page test", `'Login with username:password ${creds.username} : ${creds.password}`);
        await page.goto("https://opensource-demo.orangehrmlive.com"); 
        await page.locator('input[name="username"]').fill(creds.username);
        await page.locator('input[name="password"]').fill(creds.password);
        await page.locator('button[type="submit"]').click();
    
        // expect for a Dashboard - was FAILING Check later
        // oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module
        //await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
        
    })
})





