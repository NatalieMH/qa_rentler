import { Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver"

import {BasePage} from "../rentlerBasePage"

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const basePage = new BasePage (driver);
describe("Search listing by price", () => {
     beforeEach(async () =>{
        await driver.get("https://www.rentler.com/");
    })
   
    // need to setup some variables
const minPrice: By = By.css ('input[data-bind-event-blur="onMinBlur(this, event)"]')
const maxPrice: By = By.css ('input[data-bind-event-blur="onMaxBlur(this, event)"]')
//const results: By = By.xpath ('//*[contains(text(), "Sandy, UT Properties For Rent")]')

test("Check that listings fall within Min and Max", async () => {
// Navigate to Rentler.com
await basePage.navigate();
// Select Search Listings Button
await basePage.click(basePage.searchListings);
// Enter in the Min field $1000
await driver.findElement(minPrice).sendKeys("1000");
// Enter in the Max field $2000, select Enter 
await driver.findElement(maxPrice).sendKeys("2000\n");
// Select filter low to high
await driver.manage().window().maximize()
await driver.wait(until.elementLocated(By.css('select[data-bind="orderby"]') ))
await basePage.click(By.css('select[data-bind="orderby"]'));
// Look at first value and verify it's not less than $1000
// Select filter High to Low
// Verify the highest price is not greater than $2000

//    await (await driver).findElement(minPrice).sendKeys("1000");
//     await (await driver).findElement(maxPrice).sendKeys("2000\n");
//     let resultsText = await driver.findElement(results).getText()
//     expect(resultsText).toContain("Sandy, UT Properties For Rent");
    
    })
});



