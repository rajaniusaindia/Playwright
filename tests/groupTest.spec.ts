/*
Grouping tests - Describe Block
When same pre-conditions  - no need for description
When different pre-conditions - we use Describe
parallel - false - single worker
sequential - only R will do the work
parallel - true - cannot be override
Checkout - test.describe.serial ????
*/

import { test, expect } from '@playwright/test'

// Add describe block
// Group test 1 and test 2 with all the hooks
test.describe(async() => { 
  
    test.beforeAll(async({ }) => { 
        console.log('Database Connection');    
    })
    
    test.afterAll(async({ }) => {
        console.log('Clearing Cookies');      
    })
    
    test.beforeEach( async({ }) => {
        console.log('Cache Removal');
    })
    
    test.afterEach(async({  }) => {
    
        console.log('Database Disconnect');     
    })

    test( 'Test 1', async({ page }) => { 
        console.log('Test 1');   
       
    })
    
    test( 'Test 2', async({ page }) => {
        console.log('Test 2');  
    })
})

//=========== test ============
// Out of Describe block - hooks will not execute for these tests
test.describe(async() => { 
test( 'Test 3', async({ page }) => {
    console.log('Test 3');
    console.log("test 3 some other set of hooks");
})

test( 'Test 4', async({ page }) => {
    console.log('Test 4'); 
    console.log("test 3 some other set of hooks");    
})
})

// You not leave test 3 and test4 alone 
// Can have different set of hooks for these test cases

// Do not repeat hooks 
// group based on common code - very important
// Beauty of describe block - depends of how product is structured 
// Cypress - based on Mocha Framework
// PW - based on playwright Fr only - Jest initially but later created their own framework

// Very important
// How ot set priority - asking from Selenium background
// 1. Sanity 2. E2E 3. Regression - How to setup priority
// Vigesh - in PW each test will not execute in same Browser like Selenium
// Always want Login to work - so once = P1
// P2 - exe depends on the same onemptied
// Tests run in different browser context
// All parallel, individual test case
