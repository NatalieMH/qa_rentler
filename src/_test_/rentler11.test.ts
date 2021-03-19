import { Builder, By, Capabilities, WebDriver, until} from "selenium-webdriver"

import {BasePage} from "../rentlerBasePage"

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const basePage = new BasePage (driver);
describe("Search for Toronto, Ontario and verify it returns No Results", () => {
     beforeEach(async () =>{
        await driver.get("https://www.rentler.com/");
    })
    })
// need to setup some variables
const searchBar: By = By.xpath ('//input[@id="Location"]')
const results: By = By.css('[class="zeta search-result-text"]')
    
test("Search Toronto, Ontario and verify it returns No Results", async () => {
    // Navigate to Rentler.com
    await basePage.navigate();
    // In the Search Bar search for "Toronto, Ontario" and verify the page has No Results
        await driver.findElement(searchBar).sendKeys("Toronto, Ontario\n");
        let resultsText = await driver.findElement(results).getText()
        expect(resultsText).toContain("No Results");
    });
