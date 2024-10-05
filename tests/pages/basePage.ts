/*
*/

import { Page, Locator } from '@playwright/test'

export default class BasePage{
    // BasePage never private
    // It is the parent of all other pages
    readonly page:Page // var name: type of var

    constructor(page:Page){
        this.page = page;
    }
   // Common methods
   async navigateTo(url:string){
    await this.page.goto(url);
   }

   async clickElement(element:Locator){
    await element.click();
   }

   async clickValuesInElement(element:Locator, valuesToEnter:string){
    await element.fill(valuesToEnter);

   }
}

/* 
Checkout - github for all the common methods 
Alerts, radio button, drop down 

saucedemo.com
parameterize JSON
Parameterize - CSV
POM 
*/