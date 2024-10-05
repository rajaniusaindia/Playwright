/*
Add @tag inside the test case title
@sanity
@smoke
@regression
Playwright-config.ts - grep:[new RegExp("@smoke")],
*/

import { test, expect } from '@playwright/test'

test('Login Page Test @smoke', async() => {
    console.log("This is a Login Page test");
    
})

test('Home Page Test @sanity', async() => {
    console.log("This is a Home Page Sanity test");
    
})

test('Payment Page Test @regression', async() => {
    console.log("This is a Payment Page Regression test");
    
})

test('Checkout Page Test @regression', async() => {
    console.log("This is a Checkout Page Regression test");
    
})

/* run for chromium, furefox, webkit, google-chrome
1. @smoke - 4 test cases
(base) rajanichoudhary@Rajanis-MBP-2 Playwright % npx playwright test 
Running 3 tests using 3 workers
[firefox] › tagsTest.spec.ts:11:5 › Login Page Test @smoke
This is a Login Page test
[chromium] › tagsTest.spec.ts:11:5 › Login Page Test @smoke
This is a Login Page test
[webkit] › tagsTest.spec.ts:11:5 › Login Page Test @smoke
This is a Login Page test
  3 passed (602ms)

2. @regression - 8 test cases

3. How to run in CI/CD pipeline - PW.config.ts - grep:[new RegExp(run-time)],
 1.depends on use case - 1st PASS - Smoke then Smoke
 run from command-line - npx playwright test --tag=smoke
 2. then npx playwright test --tag=sanity
 to be configured in CI-CD pipeline

*/