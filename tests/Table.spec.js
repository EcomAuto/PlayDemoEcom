const{test, expect} = require('@playwright/test')

test('tableTest', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
})