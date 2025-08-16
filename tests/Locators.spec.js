// const {test, expect} = require('@playwright/test'); // Import Playwright test library
import {test, expect} from '@playwright/test'; // Another way of Import Playwright test library

test('LocatorsTest', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    // Locators
    // click on login button - property of locator
    // 1st approach
    // await page.locator('id=login2').click(); // we can provide id with value no need to specify with ""
    // 2nd approach
    await page.click('id=login2'); // without specifying locator property

    // provide user name - css path
    // 1st approach by using locator property
    // await page.locator('#loginusername').fill("pavanol"); // fill is a function used to provide input to the field
    // 2nd approach directly provide value
    await page.fill('#loginusername', 'pavanol'); // fill is a function used to provide input to the field
    // await page.type('#loginusername', "pavanol"); // type is another function used to provide input to the field

    // provide password - css path
    await page.fill("input[id='loginpassword']", 'test@123');

    // click on the login button - xpath
    await page.click("//button[normalize-space()='Log in']");

    // verify logout link present in webpage - xpath
    const logoutLink = await page.locator("//a[@id='logout2']");
    await expect(logoutLink).toBeVisible();

    await page.close();


})