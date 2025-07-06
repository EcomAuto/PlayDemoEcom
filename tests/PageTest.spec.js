const { test, expect } = require('@playwright/test');

test('Page Tset', async({page}) =>{

    await page.goto('https://www.flipkart.com/');
    // aale chak main aa gaya
    await page.close();
 
})