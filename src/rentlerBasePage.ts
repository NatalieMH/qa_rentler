import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities
} from "selenium-webdriver";

export class BasePage {
    driver: WebDriver;
    url: string = "https://rentler.com";
    signIn: By = By.css('.nav-item-sign-in');
    signUp: By = By.css('.nav-item-sign-up');
    searchListings: By = By.id('header_listings_menu_toggle');
    rentlerLogo: By = By.css('img[alt = "Rentler logo');
    //tenants: By = By.id('header_tenant_menu_toggle');
    //listYourProperty: By = By.id('header_landlord_menu_toggle');
   // pricing: By = By.id('header_pricing_menu_toggle');
    constructor(driver:WebDriver) {
        this.driver = driver;
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.signIn));
        await this.driver.wait(
          until.elementIsVisible(await this.driver.findElement(this.signIn))
        );
      }
    async searchesListings() {
        await click(this.driver,this.searchListings);
        await this.driver.wait(until.elementLocated(this.searchListings));
    }
    /*async areTenants() {
        await click(this.driver,this.tenants);
        await this.driver.wait(until.elementLocated(this.tenants));
    }
    async listProp() {
        await click(this.driver,this.listYourProperty);
        await this.driver.wait(until.elementLocated(this.listProp));
    }
    async prices() {
        await click(this.driver,this.pricing);
        await this.driver.wait(until.elementLocated(this.pricing));
    }*/
    async signingIn() {
        await click(this.driver,this.signIn);
        //await this.driver.wait(until.elementLocated(this.signIn));
    }
    async signingUp() {
        await click(this.driver,this.signUp);
       // await this.driver.wait(until.elementLocated(this.signUp));
    }
    async logo() {
        await click(this.driver,this.rentlerLogo);
        await this.driver.wait(until.elementLocated(this.rentlerLogo));
    }
}
const click = async function (driver, elementBy: By) {
    await driver.wait(until.elementLocated(elementBy));
    return (await driver.findElement(elementBy)).click();
  };