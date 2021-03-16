import {BasePage} from "./rentlerBasePage"
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities
} from "selenium-webdriver";

export class RentlerPage extends BasePage {
    //driver: WebDriver;
    //url: string = 'https://rentler.com';
    //signIn: By = By.css('.nav-item-sign-in');
   // signUp: By = By.css('.nav-bar')
    //searchCity: By = By.id('Location');
   // searchInProperties: By = By.css('input[aria-label = "Search"]');
   // minPrice: By = By.id('minprice');
    //maxPrice: By = By.id('maxprice');
    //bedBath: By = By.css('.bed-bath');
    //rentalPrice: By = By.css('.price');
    //rentalAddress: By = By.css('.address');
    firstName: By = By.id('Input_FirstName');
    lastName: By = By.id('Input_LastName');
    emailField: By = By.css('input[type = "email"]');
    passwordField: By = By.id('Input_Password');
    retypePassword: By = By.id('Input_ConfirmPassword');
    selectType: By = By.id('Input_UserContext');
    landlord: By = By.xpath('//*[contains(text(),"a Landlord")]');
    tenant: By = By.xpath('//*[contains(text(),"a Tenant")]');
    invalidLogin: By = By.css('.alert-danger');
    termsConditions: By = By.css('label[for = "Input_AgreeToTerms"]');
    signUpButton: By = By.css('button[type = "submit"]');
    constructor(driver:WebDriver) {
        super(driver);
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.signIn));
        await this.driver.wait(
          until.elementIsVisible(await this.driver.findElement(this.signIn))
        );
      }
    async enteringEmail(email: string) {
        await click(this.driver,this.emailField);
        await this.driver.switchTo().activeElement().sendKeys(`${email}\n`);
        await this.driver.wait(until.elementLocated(this.emailField));
    }
    async enteringPassword(password: string) {
        await click(this.driver,this.passwordField);
        await this.driver.switchTo().activeElement().sendKeys(`${password}\n`);
        await this.driver.wait(until.elementLocated(this.passwordField));
    }
    async retypingPassword(password2: string) {
        await click(this.driver,this.retypePassword);
        await this.driver.switchTo().activeElement().sendKeys(`${password2}\n`);
        await this.driver.wait(until.elementLocated(this.retypePassword)); 
    }
    async enteringName(first: string, last: string) {
        await click(this.driver,this.firstName);
        await this.driver.switchTo().activeElement().sendKeys(`${first}\n`);
        await this.driver.wait(until.elementLocated(this.firstName));
        await click(this.driver,this.lastName);
        await this.driver.switchTo().activeElement().sendKeys(`${last}\n`);
        await this.driver.wait(until.elementLocated(this.lastName));
    }
    async invalidSignin() {
        await this.driver.wait(until.elementLocated(this.invalidLogin));
        let errorMessage = await this.driver.findElement(this.invalidLogin).getText()
        console.log(errorMessage);
        return errorMessage;
    }
    async landlordOrTenant() {
        await click(this.driver,this.selectType);
        await this.driver.wait(until.elementLocated(this.landlord));
        await click(this.driver,this.landlord);
        //await click(this.driver,this.landlord);
    }
    async agreeToTermsSignUp() {
        await click(this.driver,this.termsConditions);
        await click(this.driver,this.signUpButton);
    }
}
    const click = async function (driver, elementBy: By) {
        await driver.wait(until.elementLocated(elementBy));
        return (await driver.findElement(elementBy)).click();
      };
