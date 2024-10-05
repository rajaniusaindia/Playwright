import { test, expect } from '@playwright/test'

/*
<input type="radio" name="radiooptions" ng-model="radiovalue" value="Male" required="" 
class="ng-dirty ng-valid ng-valid-required ng-touched ng-valid-parse">

<input type="radio" name="radiooptions" ng-model="radiovalue" value="FeMale" 
class="ng-valid ng-dirty ng-touched">
*/

// Radio button
test( 'Radion Button Male and Female', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const maleRadioButton = page.locator("input[value='Male']");
    const femaleRadioButton = page.locator("input[value='FeMale']");
    await maleRadioButton.check();
    await page.pause();

    // Way 1
    expect(await maleRadioButton.isChecked()).toBeTruthy();
    
    //Exactly same - toBeTruthy and toEqual(true)
    //expect(await maleRadioButton.isChecked()).toEqual(true);
    
    expect(await femaleRadioButton.isChecked()).toBeFalsy();
    await page.pause();
    // or
    //expect(await femaleRadioButton.isChecked()).toBeTruthy();
    //expect(await maleRadioButton.isChecked()).toBeFalsy();

     // Way2 
    await femaleRadioButton.check();
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).toBeChecked();
    await page.pause();

    /*
    1. Await when to use or not to
    Whenever a Promise has to return, 
    if not say returning - Locator - no await required

    2. Await makes sure the element is loaded fully before proceeding any further - documentState Load - Done

    3. Ex Ateet lives at some address. But that does not mean he is in the house.
    Each time we go to his house we need to make sure he is there so need to check again

    4. What is lazy loading  same as await
    We know 100% it is in the DOM
    We asked before you do any action 
    await maleRadioButton.check(); before checking() - it will make sure that maleRadioButton is there to be checked
    Same Ateet's example  
    Await time - 20,000ms 20 secs maximum
    */

})