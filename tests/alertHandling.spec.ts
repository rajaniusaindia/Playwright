/*
Cannot inspect alert, locate the alert
It will disrupt your execution
Need to handle
PW - handles alert by default automatically - advantage
Selenium - FAILS
Alert - Automation program execution stops 
Popup - Can work behind the scene

Imp point -  cannot demonstarte alert - cannot asee when automation is running
*/

import { test, expect } from '@playwright/test'


test.only( 'Simple Alert Handling', async({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //Normal way
    //1. Click on Command
    //2. Get Alert message
    //3. Compare it with result

    //PW alert - action command comes last - click alert - 
    // All actions in reverse way
    //1. Get Alert message
    //2. Compare it with result
    //3. Click on Command

    // All actions in reverse way
     
        // event listener - what intervention - a dialog
        // entire output of "dialog" is being passed to and Asynch function "alert"
        page.on("dialog", async(alert)=>{

        //1. Capture the alert() message first
            const alertMessage = alert.message();
            // expect message
            expect(alertMessage).toEqual('I am a JS Alert');
            await alert.accept();

        //2. Compare it with result text displayed
            const resultText = page.locator('#result');
            //console.log("result text:", resultText.getByText("You successfully clicked an alert"));// why not printing ??
            console.log("result text:", resultText.allTextContents());
            //console.log("result text:", resultText.getByText());// why not printing ??
            //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
            
        //3. Click on the button - last - completely even if we ignore this expect
            await page.locator('button[onClick="jsAlert()"]').click();
            await page.waitForTimeout(5000);
    
        // When running you will not see the button click and display of - 'You successfully clicked an alert'
        // But you will not see the Alert with OK button
        // Not seeing the test message ???????

        // Imp point -  cannot demonstarte alert - cannot asee when automation is running

        // Known alert vs un-known alert - may be a basic popup 

       
    })
    await page.waitForTimeout(5000);

})

test( 'Confirm Alert - Ok Button', async({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    //exactly same code except for locators, result text changes
    await page.waitForTimeout(5000);

})

test( 'Confirm Alert - Cancel Button', async({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //exactly same code except for locators, result text changes 
    await page.waitForTimeout(5000);

})

test( 'Prompt Alert - Ok Button', async({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //exactly same code except for locators, result text changes
    await page.waitForTimeout(5000);

})

test( 'Prompt Alert - Cancel Button', async({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //exactly same code except for locators, result text changes
    await page.waitForTimeout(5000);

})

/*
Say to PW - if you click on alert - be mindful that capture this message and give it to me
Regular DOM is disconnected
Concept of - eventListner
reverse action - all this will happen when you click on OK
*/