const { test, expect } = require('@playwright/test');

test('Page Tset', async({page}) =>{

    await page.goto('https://www.flipkart.com/');

    const pageTitle = await page.title();
    console.log(`Page Title: ${pageTitle}`);

    await page.close();
 
})