/*
Button handling - different types of click supported - double, right, left
*/

import { test, expect } from '@playwright/test'


// Simple click
test( 'Simple click', async({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator("#click_type").click();
    await expect(page.locator("#click_type")).toHaveText('Click');

})

// double click
test.only( 'Double click', async({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator("#click_type").dblclick();
    await expect(page.locator("#click_type")).toHaveText('Double-Click');
})
// Right click 
test( 'Right click', async({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator("#click_type").click({button:'right'});
    await expect(page.locator("#click_type")).toHaveText('Right-Click');
 
})