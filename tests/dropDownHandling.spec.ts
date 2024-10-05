import { test, expect } from '@playwright/test'

/*
Two types of dropdowns
1. Static - Single - no changes
2. Dynamic - Non-Static
3. Single or Multi Select Option
4. Nested DD
*/
/*
Skills - <label class="col-md-3 col-xs-3 col-sm-3 control-label">Skills</label>

Select Skiils
<select type="text" class="form-control ng-valid ng-touched ng-dirty ng-valid-parse" id="Skills" ng-model="Skill" ng-init="Skill=''">
<option value="">Select Skills</option>
<option value="Adobe InDesign">Adobe InDesign</option><option value="Adobe Photoshop">Adobe Photoshop</option>
</select>
      
*/

// dropdown handling 
// Acordian - dropdown arrow
// select keyword
// Access elements base on text, Vale and indexing
test( 'Single Static Drop down Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    // value
    await page.selectOption('#Skills', {
        value:'Art Design'
    })
    await page.waitForTimeout(5000);

    // label
    await page.selectOption('#Skills', {
        label:'Backup Management'
    })

    await page.waitForTimeout(5000);
    // indexing - starts from 0 - Select Skills then 1 - Android
    // do not use this - may forget down the line or change in code may break it
    await page.selectOption('#Skills', {
        index:4
    })
 await page.waitForTimeout(5000);

})
/*
<select size="10" name="States" multiple="" id="multi-select" class="text-size-14 border border-gray-400 w-150">
<option value="California">California</option>
<option value="Florida">Florida</option>
<option value="New Jersey">New Jersey</option>
<option value="New York">New York</option>
<option value="Ohio">Ohio</option>
<option value="Texas">Texas</option>
<option value="Pennsylvania">Pennsylvania</option><
option value="Washington">Washington</option>
</select>
*/
// Array - value, label, index
test( 'Multi Static Drop down Handling', async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('#multi-select',[
        {value:"California"},
        {label:"Florida"},
        {index:3}
    ])
    await page.waitForTimeout(5000);

});

/*
No select type - empty
select Country - sarchable dynamic dd

// When click on top most search dropdown - Select Country
<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" 
autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">

<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-country-container">
<span class="select2-selection__rendered" id="select2-country-container" title=""></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b>
</span>
</span>

Search - Manually or by typing 
ex - India
<span class="select2-selection__rendered" id="select2-country-container" title="India">India</span>
*/
test( 'Searchable Dynamic Drop down Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
        //1. locate the dynamic dd - to expand
        // <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-labelledby="select2-country-container">
        //<span class="select2-selection__rendered" id="select2-country-container" title=""></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
        await page.locator('span[role="combobox"]').click();

        //2. locate - dd search input filed
        //<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" 
        //autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">
        await page.locator('input[type="search"]').click();

        //3. Pass search term - partial text Ind - 
        await page.locator('input[type="search"]').fill("Ind");
        
        await page.waitForTimeout(5000);
       
        //4.locate - dd search input field
        //<input class="select2-search__field" type="search" tabindex="0" autocomplete="off" 
        //autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox">
        await page.locator('input[type="search"]').click();

        await page.waitForTimeout(5000);

        // You get only 1 search result - inspect this search result displayed in dd only not the one above
        // Notice you will see - <ul> with <li> - unordered list, list
        // With dynamic dd – 99% of the time - It will be under this <ul> <li> structure only
        // Each one of them are – individua <ul> <li> only - <ul> is the parent – so take its ID
        // Parent
        // <ul class="select2-results__options" role="tree" id="select2-country-results" aria-expanded="true" aria-hidden="false">
        // <li class="select2-results__option select2-results__option--highlighted" role="treeitem" aria-selected="false">India</li></ul>
        // Child
        // <li class="select2-results__option select2-results__option--highlighted" role="treeitem" aria-selected="false">India</li>

        //5. So take parent ID - id="select2-country-results" 
        // We can go from Parent -> Child - CSS allows it --> #select2-country-results>li
        // Child to Parent - CCS will not allow - always top to bottom
        // xpath - can use any relation vice versa 

        await page.locator("#select2-country-results>li").click();

        await page.waitForTimeout(5000);

        // Important notes
        // Remember dynamic values change - check with DEVS
        // If multiple results - select 1st one 
        // PW will FAIl the test case - saying multiple matches
        // So make sure you have 1 value only
        // enter - full or partial text - that give 1 result only
        // Indexing can be used - but not suggested
        // #select2-country-results>li:nth-child(1)
})

// Locator chaining
test.only( 'Non Searchable Dynamic Drop down Handling', async({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
  
    // based on simple text - do not iterate through the list
    // No change here
    await page.locator('span[role="combobox"]').click();

    // I am not searching anything - selecting manually from the dynamic dd - non-searchable
    // New concept - Locator Chaining
    // hover over - locator and see the text function - hasText
    // just li will give all the li element
    // so will do the locator chaining
    // after  li - found - go to the right 
    // directly select the text India - not search - no typing

    //<span class="select2-selection__rendered" id="select2-country-container" title="India">India</span>

    // using locator chaining
    await page.locator('#select2-country-results').locator('li', {hasText:"India"}).click();
    // simple one
    //await page.locator('#select2-country-results>li', {hasText:"India"}).click();
    // await page.locator('#select2-country-container').click();

    await page.waitForTimeout(3000);

})

/*
What to choose - Static vs Dynamic
then searchable vs non-searchable
*/

