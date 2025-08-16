const {test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page})=>{
    // navigate to url
    await page.goto('https://demo.nopcommerce.com/register');

    //1) expect(page).toHaveURL----------------> page has URL
    // verify the page has the URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    //2) expect(page).toHaveTitle----------------> page has title
    // verify the page has the title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3) expect(locator).toBeVisible()---------------->  Element is visible
    // verify the element is visible or not
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4) expect(locator).toBeEnabled()----------------->  Control is enabled
    // verify the element is enabled or not
    // verifying search box is enabled or not
    const searchField = await page.locator('#small-searchterms');
    await expect(searchField).toBeEnabled();

    //5) expect(locator).toBeChecked()-------------------->  Radio/Checkbox is checked
    // verify the radio button is checked or not
    const maleRadioBtn = await page.locator('#gender-male');
    await maleRadioBtn.click(); // click on radio button
    await expect(maleRadioBtn).toBeChecked();

    // verify the check box is checked or not
    const newsLetterCheckBox = await page.locator('#Newsletter');
    await expect(newsLetterCheckBox).toBeChecked();

    //6) expect(locator).toHaveAttribute()-------------------------> Element has attribute
    // we can verify specific attribute of element is present or not
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit'); // one parameter is attribute type and another is expected value

    //7) expect(locator).toHaveText()----------------------->  Element matches text
    // verify the text of element is matching or not
    const registerText = await page.locator('//div/h1');
    await expect(registerText).toHaveText('Register'); // full text of element is matching or not

    //8) expect(locator).toContainText()--------------------->  Element contains text
    // verify the text of element is containing or not
    // we can pass partial text to match
    await expect(registerText).toContainText('Regi'); // partial text of element is matching or not

    //9)  expect(locator).toHaveValue(value)------------------> Input has a value
    // verify the input field has value or not
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@gmail.com'); // fill the input field
    await expect(emailInput).toHaveValue('test@gmail.com');

    // 10) expect(locator).toHaveCount()------------------------->  List of elements has given length
    // verify the list of elements has given length or not
    const links = await page.$$('a');
    console.log(links.length);
    await expect(links).toHaveLength(62);
})