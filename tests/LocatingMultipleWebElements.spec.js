const {test, expect} = require('@playwright/test'); // import playwright test library

test('LocatingMultipleWebElements', async ({page})=>{
    // Navigate to the webpage
    await page.goto("https://www.demoblaze.com/index.html")

    // Locate multiple WebElements
    // const links = await page.$$('a') // $ is used to locate elements, $$ is used to locate multiple elements

    // for(const link of links){ // Loop through each link by using for of loop/advance for loop
    //     const linkText = await link.textContent(); // Get the text of the link as a string by using textContent method
    //     console.log(linkText); // Print the text of the link
    // }

    // locate all the products displayed in the home
    // this command will wait till all products are displayed in the home page
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    for(const product of products){
        const productText = await product.textContent();
        console.log("Name of Product: ", productText);
    }

    page.close();
})

