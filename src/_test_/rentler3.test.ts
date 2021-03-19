import { Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver"

import {BasePage} from "../rentlerBasePage"

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const basePage = new BasePage (driver);
describe("Search listing by number of Bed and Bath selected", () => {
     beforeEach(async () =>{
        await driver.get("https://www.rentler.com/");
    })
   
    // need to setup some variables
//const minPrice: By = By.css ('input[data-bind-event-blur="onMinBlur(this, event)"]')
//const maxPrice: By = By.css ('input[data-bind-event-blur="onMaxBlur(this, event)"]')
//const results: By = By.xpath ('//*[contains(text(), "Sandy, UT Properties For Rent")]')
//const bed: By = By.css('div[#="bed-fake"]');
//const bath: By = By.css('div[#="bath-fake]');
//const showResultsBed: By = By.css('div[class="btn-primary btn px-2"]');
const select2Bed: By = By.css('label[for="twoBedroom1"]');
const select2Bath: By = By.css('label[for="twoBathroom1"]');
const showResults: By = By.css('button[class="btn-primary btn px-2 mb-0"]');
const moreFilters: By = By.css('span[class="text d-none d-sm-block"]')
const results: By = By.css('div[class="bed-bath"]')

test("Check that bed and bath search returns searches for 2 bed and 2 bath", async () => {
// Navigate to Rentler.com
await basePage.navigate();
// Select Search Listings Button
await basePage.click(basePage.searchListings);
// Select "More Filters"
await basePage.click(By.css('span[class="text d-none d-sm-block"]'));
// Select "2 Bed"
await basePage.click(By.css('label[for="twoBedroom1"]'));
// Select "2" Bath
await basePage.click(By.css('label[for="twoBathroom1"]'));
// Select Show Results for 2 Bed and 2 Bath
await basePage.click(By.css('button[class="btn-primary btn px-2 mb-0"]'));
await driver.wait(until.elementLocated(results));
//let resultsText = await driver.findElement(results).getText()
until.elementTextContains(
    await driver.findElement(results),
    "2 Bed Bed • 2 Bath Bath"
    )
});





// await basePage.click(By.css('label[for="twoBedroom1"]'));
// select Search Results for 2 bedroom
// await basePage.click(By.css('div[class="btn-primary btn px-2"]'));
// Select "Bath"
// await basePage.click(By.css('div[#="bath-fake]'));
// Select "2 Bath"
// await basePage.click(By.css('input[id="twoBathroom1"]'));
// Verify that "2 Bed" and "2 Bath" are showing on the search results page
// await driver.findElement(minPrice).sendKeys("1000");
// Enter in the Max field $2000, select Enter 
// await driver.findElement(maxPrice).sendKeys("2000\n");
// Select filter low to high
// await driver.manage().window().maximize()
// await driver.wait(until.elementLocated(By.css('select[data-bind="orderby"]') ))
// await basePage.click(By.css('select[data-bind="orderby"]'));
// Look at first value and verify it's not less than $1000
// Select filter High to Low
// Verify the highest price is not greater than $2000
// await (await driver).findElement(minPrice).sendKeys("1000");
// await (await driver).findElement(maxPrice).sendKeys("2000\n");
// let resultsText = await driver.findElement(results).getText()
//  xpect(resultsText).toContain("Sandy, UT Properties For Rent");
    
    




})