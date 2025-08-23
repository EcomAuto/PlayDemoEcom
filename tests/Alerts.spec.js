import {test, expect} from '@playwright/test';

test('AlertsTest', async ({page})=>{
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Alert
    // 1st we need to enable alert handling // dialog window handler
    page.on('dialog', async dialog =>{ // creating arrow function
        expect(dialog.type()).toContain('alert'); // checking if it is alert
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept(); // it will accept the dialog
    })

    // before clicking the button, we need to enable the dialog window handler
    // without enabling will be able to handle but not able to validate
    // we can use page.on() method to enable the dialog window handler
    // page.on() method will be triggered when dialog window is opened
    // we can use it to validate the dialog window and accept it
    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(5000);
});

test('ConfirmPromptTest', async ({page})=>{
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Alert
    // 1st we need to enable alert handling // dialog window handler
    page.on('dialog', async dialog =>{ // creating arrow function
        expect(dialog.type()).toContain('confirm'); // checking if it is alert
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // it will accept the dialog
        // await dialog.dismiss(); // it will dismiss the dialog
    })

    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
});

test('PromptTest', async ({page})=>{
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Alert
    // 1st we need to enable alert handling // dialog window handler
    page.on('dialog', async dialog =>{ // creating arrow function
        expect(dialog.type()).toContain('prompt'); // checking if it is alert
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John'); // it will accept the dialog by passing the value
    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);
});