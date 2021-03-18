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
    tenantOrLandlord: By = By.xpath('(//div[@class = "choice-figure"])[1]');
    welcome: By = By.css('nav[aria-label = "breadcrumb');
    favorites: By = By.xpath('(//*[@class = "btn-favorite"])[1]');
    passwordLength: By = By.css('input[data-val-length="Password must be between 7 and 100 characters"]');
    sListSigned: By = By.xpath('//li/a[contains(text(),"Search Listings")]');
    myPlaces: By = By.css('.link-favorite');
    resultList: By = By.css('.zeta.search-result-text');
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
        await this.driver.switchTo().activeElement().sendKeys(`${password}`);
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
    async passwordShort() {
        await click(this.driver,this.passwordField);
        await this.driver.wait(until.elementLocated(this.passwordLength));
        return this.passwordLength;
    }
    async landlordOrTenant() {
        await click(this.driver,this.selectType);
        await this.driver.wait(until.elementLocated(this.landlord));
        await click(this.driver,this.landlord);
    }
    async agreeToTermsSignUp() {
        await click(this.driver,this.termsConditions);
        await click(this.driver,this.signUpButton);
    }
    async useAsTenant() {
        await this.driver.wait(until.elementLocated(this.tenantOrLandlord));
        await this.driver.findElement(this.tenantOrLandlord);
        await click(this.driver,this.tenantOrLandlord);
        await this.driver.wait(until.elementLocated(this.welcome));
    }
    async welcomePage() {
        await this.driver.wait(until.elementLocated(this.welcome));
        let welcomeScreen = await (await (this.driver.findElement(this.welcome))).getText();
        return welcomeScreen;
    }
    async favoriteListing() {
        await click(this.driver,this.sListSigned);
        await this.driver.wait(until.elementLocated(this.favorites));
        await click(this.driver,this.favorites);
        await this.driver.wait(until.elementLocated(By.css('div[data-liked = "true"]')));
    }
    async showMyPlaces() {
        await click(this.driver,this.myPlaces);
        await this.driver.wait(until.elementLocated(this.resultList));
        let results = await (await (this.driver.findElement(this.resultList))).getText();
        return results;
    }
}
    const click = async function (driver, elementBy: By) {
        await driver.wait(until.elementLocated(elementBy));
        return (await driver.findElement(elementBy)).click();
      };
