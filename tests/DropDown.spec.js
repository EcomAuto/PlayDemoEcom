const{test,expect} = require('@playwright/test')

test('DropDownTest', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // DropDown
    // multiple ways to select option from the dropdown
    // 1st we will locate the dropdown and then select the option
    // await page.locator("#country").selectOption({label:'India'}); // select option by label / visible text
    // await page.locator("#country").selectOption('India');   // select option by visible Text
    // await page.locator("#country").selectOption({value:'uk'}); // select option by value
    // await page.locator("#country").selectOption({index: 1}); // select option by index
    // await page.selectOption("#country", 'India'); // select option by visible text by using direct method of selectOption
    
    // Assertions on dropdown
    // const options = await page.locator("#country option");
    // await expect(options).toHaveCount(10);

    // // check presence of value in dropdown
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India').toBeTruthy());

    // Select multiple options from multi select dropdownq
    await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);
    
    await page.waitForTimeout(5000);
})