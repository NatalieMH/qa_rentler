import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities
} from "selenium-webdriver";

export class RentlerPage {
    driver: WebDriver;
    url: string = 'https://rentler.com';
    signIn: By = By.css('.nav-item-sign-in');
    signUp: By = By.css('.nav-bar')
    searchCity: By = By.id('Location');
    searchInProperties: By = By.css('input[aria-label = "Search"]');
    minPrice: By = By.id('minprice');
    maxPrice: By = By.id('maxprice');
    bedBath: By = By.css('.bed-bath');
    rentalPrice: By = By.css('.price');
    rentalAddress: By = By.css('.address');
    emailField: By = By.css('input[type = "email"]');
    passwordField: By = By.css('input[type = "password"]');
    invalidLogin: By = By.css('.alert-danger');
    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.signIn));
        await this.driver.wait(
          until.elementIsVisible(await this.driver.findElement(this.signIn))
        );
      }
    async enteringEmail(email: string) {
        await click(this.driver,this.signIn);
        await click(this.driver,this.emailField);
        await this.driver.switchTo().activeElement().sendKeys(`${email}\n`);
        await this.driver.wait(until.elementLocated(this.emailField));
    }
    async enteringPassword(password: string) {
        await click(this.driver,this.passwordField);
        await this.driver.switchTo().activeElement().sendKeys(`${password}\n`);
        await this.driver.wait(until.elementLocated(this.passwordField));
    }
    async invalidSignin() {
        await this.driver.wait(until.elementLocated(this.invalidLogin));
        let errorMessage = await this.driver.findElement(this.invalidLogin).getText()
        console.log(errorMessage);
        return errorMessage;
    }
}
    const click = async function (driver, elementBy: By) {
        await driver.wait(until.elementLocated(elementBy));
        return (await driver.findElement(elementBy)).click();
      };
