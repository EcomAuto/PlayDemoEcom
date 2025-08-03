// Import necessary libraries and modules
// @playwright is a module for Playwright testing framework and test is a part of it.
// This code is used to set up a test environment for Playwright tests.
// test to write and run tests, expect to make assertions/validations in tests.
const {test, expect} = require('@playwright/test'); // Import Playwright test library

// Then we need to write test blocks using the test function.
// Test block contains title and a callback function(Anonymus) that contains the test logic.
// The callback function receives a page object that represents the browser page.
test('Page Test', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html'); // Navigate to the demo website

    const pageTitle = await page.title(); // Get the title of the page
    console.log('Page Title is: ', pageTitle); // Log/print the title to the console

    await expect(page).toHaveTitle('STORE'); // Assert that the page title is 'STORE'
    // This is an assertion that checks if the page title matches the expected value.

    const pageUrl = page.url(); // Get the current URL of the page
    console.log('Page URL is: ', pageUrl); // Log/print the URL to the console

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); // Assert that the page URL is correct
    // This checks if the current URL of the page matches the expected URL.

    await page.close(); // Close the page after the test is done
    console.log('Page closed successfully'); // Log a message indicating the page has been closed

})