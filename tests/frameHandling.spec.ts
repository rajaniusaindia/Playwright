/*
iFrame
iFrame within iFrame
force - overlaying of element so forcefully do it
Parent frame in DOM - Child frame - scan in the child not the parenr frame

Handle 3 ways -
1. Frame Locator
2. Frame Name
3. Frame URL
*/

// Selenium - handling a tab window vs window - different
// PW same no difference 

import { test, expect } from '@playwright/test'


test( 'Frame Handling using locator', async({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.locator('#tinymce').clear();
    await page.locator('#tinymce').fill('Rajani');
    
    await page.waitForTimeout(3000);

})
test( 'Frame Handling Page.Frame()', async({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    const allFrames = page.frames();
    console.log('Total Frame Count ' + allFrames.length);

    // if no name specified - go with url, if name -> go with name
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    
    // ?. instead of page it is a locator now
    frame1?.locator('input[name="mytext1"]').fill('Rajani');

    await page.waitForTimeout(3000);

})

test( 'Frame Handling Page.FrameLocator()', async({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    // will work exactly like other method
    // ? I did not type - auto mention by VSCODE - if locator avbl use it if not don't
    frame2?.locator('input[name="mytext2"]').fill('Playwright');

    await page.waitForTimeout(3000);

})

/*Sept 8 2024 class
iFrame within iFrame
*/
test.only( 'Nested Frame Handling', async({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrames = frame3?.childFrames();
    await childFrames[0].locator("#i5").click(); 
    // childFrames[0] - error since it thinks child frames are not there - but will run the code
    
    //await childFrames[0].locator("#i5").click(force:true); // in case not working - force with true due to some element overlays
    // How do we know an element is overlaid - no easy way to know - when automation runs - look for the message Element overlaid

    await page.waitForTimeout(3000);

})

