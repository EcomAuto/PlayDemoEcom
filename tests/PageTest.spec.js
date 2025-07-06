const { test, expect } = require('@playwright/test');

test('Page Tset', async({page}) =>{

    await page.goto('https://www.flipkart.com/');

    await page.close();
 
})