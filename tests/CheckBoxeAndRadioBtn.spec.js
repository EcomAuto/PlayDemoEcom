const {test,expect} = require('@playwright/test');


test('checkBoxAndRadioBtnTest', async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form');

    // CheckBoxes
    // 1st with single checkbox
    await page.locator("//label[normalize-space()='Sports']").check();
    // await page.check("//label[normalize-space()='Sports']");
    // asserting the checkbox is checked
    await expect(page.locator("//label[normalize-space()='Sports']")).toBeChecked();
    // we can also use the following assertion isChecked() will return true if the checkbox is checked and 
    // toBeTruthy() will pass if isChecked() is returning true
    // await expect(page.locator("//label[normalize-space()='Sports']").isChecked()).toBeTruthy();

    // 2nd with multiple CheckBoxes
    // 1st we need to create an array of the checkbox locators
    const checkboxes = ["//label[normalize-space()='Sports']",  // adding xpaths of the checkboxes/locators
                       "//label[normalize-space()='Reading']",
                       "//label[normalize-space()='Music']"
                       ];

    // then we loop through the array and check each checkbox
    for(const checkBox of checkboxes){  // select multiple checkboxes
        await page.check(checkBox);
    }

    for(const checkBox of checkboxes){  // un-select multiple checkboxes
        if(await page.locator(checkBox).isChecked()){
            await page.uncheck(checkBox);
        }
    }

    // waitForTimeout() is used to wait for a certain amount of time before proceeding with the test
    await page.waitForTimeout(5000);
})