/*
Texbox or login button may be overlayed by some other element
Not noticed or obvious
*/

import { test, expect } from '@playwright/test'

// Plain Fill - default - within 1 sec, Fill with force
test( 'Fill method', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.pause();
    await page.locator('input[name="username"]').fill('Admin'); // bombards with value, does not wait
    await page.locator('input[name="password"]').fill('admin123',{force:true}); // force action in case of overlay
    await page.locator('input[name="password"]').press('Enter');
    await page.pause();
})

// enter in sequence don't bombard ex - card details
test( 'Press - Sequentially method', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.pause();
    await page.locator('input[name="username"]').pressSequentially('Admin'); // enter in sequence don't bombard
    await page.locator('input[name="password"]').pressSequentially('admin123'); // enter in sequence don't bombard
    await page.pause();
})

// enter each char in sequence with some Delay
test.only( 'Press - Sequentially method with Delay', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.pause();
    await page.locator('input[name="username"]').pressSequentially('Admin', {delay:500}); // enter in sequence with delay each char with 1/2 sec delay
    await page.locator('input[name="password"]').pressSequentially('admin123', {delay:500}); // enter in sequence don't bombard
    await page.pause();  
})