import { test, expect } from '@playwright/test'

/*
checkbox - criket - <input type="checkbox" id="checkbox1" value="Cricket">
checkBox - Movies - <input type="checkbox" id="checkbox2" value="Movies">
checkbox - hockey - <input type="checkbox" id="checkbox3" value="Hockey">       
*/

// Checkbox handling
test( 'CheckBox Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    // Create 3 constants for each checkbox
    const cricketCheckBox = page.locator("#checkbox1");
    const moviesCheckBox = page.locator("#checkbox2");
    const hockeyCheckBox = page.locator("#checkbox3");

    await cricketCheckBox.check();
    await page.pause();
    await moviesCheckBox.check();
    await page.pause();

    // What is the status of all?
    // cricketCheckBox returns locator
    // toBeChecked - action on top of that locator 
    // which is returning  - Promise - hover over toBeChecked()
    // await for the Promise to be fulfilled

    await expect(cricketCheckBox).toBeChecked();

    // see await here is with isChecked()
    // not before expect - not needed

    expect(await moviesCheckBox.isChecked()).toBeFalsy();
    expect(await hockeyCheckBox.isChecked()).toBeFalsy();

})