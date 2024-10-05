import { test, expect } from '@playwright/test'


test.skip('Skipped test', async() => { //Do not execute when Devs fixing code, push this code, cmdline - yes, 
    console.log("I am a skipped test case");// Dhrumil - password issue handle at Unit level not e2e
})

test('Skip in WebKit', async({page, browserName}) => { // works in 1 browser but not in another - do not skip - cond -> only for WebKit
    test.skip(browserName === 'webkit','This setup will not work for Safari')
    console.log("I am a Skip with Condition test");

})

test('Test not ready yet', async() => { 

})

test('Fail in WebKit', async({page, browserName}) => { // works in 1 browser but not in another - do not skip - cond -> only for WebKit
        test.skip(browserName === 'webkit','This setup will not work for Safari')
        console.log("I am a Fail with Condition test");
        // Vignesh not used it, do not use - FAIL
        // Mostly use - skip, slow - ideally if slow - inform Dev - mark to slow so it doe not FAIL
        
        // real time - 3 defects - being fixed - do not skip if you want
        // Existing defects - skip - 1:34 

        // test case with - only, be careful to remove it

        // Posiible to have custome annotation - no - it should be custom code
})

test.fixme('Fix me test', async() => {
        console.log("I am a Fail with Condition test");
        //skip and not execute
        //No difference btw skip and fixme - execution wise just for documentation puerpose - a reminder
})

test('Slow test', async() => {
    console.log("I am a slow test");
    test.slow();// default 20,000 automatically * 3 to slow the speed
    // very smart
    // slow test for any browser - marking a s globally/
 })

 test('Slow test with Condition', async() => {// some browser slow - revisit 1:24 min - 60,000 vs 20,0000
    console.log("I am a slow test with Condition test");
    //below with condition - can choose which browser is SlowBuffer()
    // run in webkit - to understand 
 })
    
 // All to remind you - fixme, slow test - a toggle or reminder in report