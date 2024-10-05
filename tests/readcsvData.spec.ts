/*
Do it later
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









