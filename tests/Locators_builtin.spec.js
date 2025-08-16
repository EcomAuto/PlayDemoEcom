// Builtin Locators
/*
Notes:
---------------
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const {test, expect} = require('@playwright/test');

test('Built-inLocators', async ({page})=>{
    // Using Built-in Locators

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // using getByAltText()- if any element is having alt attribute then it will be used to locate the element
    const logo = await page.getByAltText('company-branding'); // locate the logo by alt attribute
    // validate logo is visible or not
    // await expect(logo).toBeVisible();

    // using getByPlaceholder()- if any element is having placeholder attribute 
    // then it will be used to locate the element
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // using getByRole()- if any element is having role attribute then it will be used to locate the element
    // it can be used to locate the element by explicit and implicit accessibility attributes
    // ex: button, link, checkbox, radio button etc.
    // 1st parameter is the role of the element and 2nd parameter is the name of the element
    await page.getByRole('button', {type : 'submit'}).click();

    // using getByText()- if any element is having text content then it will be used to locate the element
    // it can be used to locate the element by text content
    // 1st parameter is the text content of the element
    // await expect(page.getByText('Dashboard')).toBeVisible();
    // To handle dynamic content we can use the following method
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    // verifying the name is visible or not
    await expect(await page.getByText(name)).toBeVisible();

    await page.close();

})

