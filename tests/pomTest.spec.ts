/*
*/

import { test, expect } from '@playwright/test'
import * as orangeHrmData from './testData/orangeHRMCredentials.json'
import {LoginPage}  from './pages/loginPage.ts' // give class name, do add .ts more meaningful will work without it also

test('Login test with valid credentials', async({ page }) => { // page fixture - your boss is this page object
    await page.goto("https://opensource-demo.orangehrmlive.com"); 

    const loginPage =  new LoginPage(page); // why class expected argument? with page as argument
    //loginPage. // how will we know if it is property or action, does it makes sense to show only methods
    await loginPage.enterUsername(orangeHrmData.validUsername);
    await loginPage.enterUsername(orangeHrmData.validPassword);
    await loginPage.clickLogin();
    await page.pause();

})

/*
What is a BasePage?
1. Initialize all the Page Object in the same basepage
2. will have basemethods for all the page
ex fill - fill all text, type - deprecated change to locator.fill
say you have 20 pages using this method - will be hard
3. one common place so will reflect every where
any change other places will be taken care of
4. only common methods - 10 methods

5. we will call basePage in LoginPage
6. What is the difference between basePage and util?
with util - create class, run constructor, call methods - 3 things
BasePage - 1 line code will do all actions
*/








