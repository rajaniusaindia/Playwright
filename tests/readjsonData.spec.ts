/*
*/

import { test, expect } from '@playwright/test'
import * as orangeHrmData from './testData/orangeHRMCredentials.json'

test('Login test with valid credentials', async({page}) => {
        console.log("This is a Login Page test");
        await page.goto("https://opensource-demo.orangehrmlive.com"); 
        await page.locator('input[name="username"]').fill(orangeHrmData.validUsername);
        await page.locator('input[name="password"]').fill(orangeHrmData.validPassword);
        await page.locator('button[type="submit"]').click();
        // Add assertion
        
})

test('Login test with invalid credentials', async({page}) => {
    console.log("This is a Login Page test");
    await page.goto("https://opensource-demo.orangehrmlive.com"); 
    await page.locator('input[name="username"]').fill(orangeHrmData.invalidUsername);
    await page.locator('input[name="password"]').fill(orangeHrmData.invalidPassword);
    await page.locator('button[type="submit"]').click();
    // Add assertion
    
})

/*
good to keep test cases simple
What if normal, admin - user
Same concept

Should we have all assertions, in same test case
e2e test cases - test Pyramid
1. e2e - assumes it is already done at unit level, no need to check if login works with normal user, admin user
1 test case 1 user only
2. integration
3. unit - login should b tested at this level

*/







