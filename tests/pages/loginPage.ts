/*
1. always in test/ folder
2. Name it page
3. .ts - executable and not a test
4. Class name and file name same - though not mandatory
*/

import { Page, Locator } from '@playwright/test'
import BasePage from './basePage'

export class LoginPage extends BasePage{
    // access modifier
    // if private, public keywaords
    // If defining locators of your class - as private other classes cannot access directly - use getters and setters 
    // No one should have control to change my values - readonly

    // Change readonly to  - private

    //readonly page:Page // var name: type of var
    readonly page:Page // var name: type of var

    // Start with Locators
    // Here we declare the values 
    //readonly usernameTextbox:Locator // type Locator, pl mention what it is - button ot radio button
    //readonly passwordTextbox:Locator 
    //readonly loginButton:Locator 

    // Memory related - very important point
    // readonly - cannot change
    // in constructor - we don't want to assign var in memory - ony do it at runtime, no statci way

    private readonly usernameTextbox:Locator // type Locator, pl mention what it is - button ot radio button
    private readonly passwordTextbox:Locator 
    private readonly loginButton:Locator 

    // why we should not initialize before
    // we need to give instance of the Page to this constructor
    // I don't know which browser context is going to call me
    // Pl say which page is calling me
    // Need to know who asked who is asking for juice or who is asking for milk
    // constructor used by parameter - Page -> page:Page
    // Each Login page will have its own set of attributes values

    // Here we initialize the values 
    // do not create - const here - each time constructor runs there will be var created each time 
    //  checkout - playwright.dev/docs/pom
    constructor(page:Page){
        super(page);
        this.usernameTextbox = page.locator("input[name='username']");
        this.passwordTextbox = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");

    }
    // not exposing this class for others to use - use Export
    // parameterize
    async enterUsername(usernameValue:string){
        await this.clickValuesInElement(this.usernameTextbox, usernameValue);
    }

    async enterPassword(passwordValue:string){
        await this.clickValuesInElement(this.passwordTextbox, passwordValue);
    }

    async clickLogin(){
           await this.clickElement(this.loginButton)
    }
    
}
/*
only change in BasePage - reflects in all pages
*/