const { test, expect } = require ('@playwright/test');
//=> flat operator
test.only ('Browser context heading', async ({browser })=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("page title:", await page.title());
    //await page.pause();
    // id - css selector
    // id tagname#id or #id

    //class name - css selector
    //tagname.class or .class

    //[attribute='value']
    
    //const username =  page.locator('#usename');
    //const password = page.locator ("[type = 'password']");
    //const documentLink = ("[href='documents-request']");

    await page.locator('#username').fill("Rajani");
    await page.locator("[type = 'password']").fill("password");
    await page.locator("#signInBtn").click();
    //console.log(await page.locator("[style ='block']").textContent());
    //await expect(page.locator("[style ='block']")).toHaveText("Incorrect");
}
);