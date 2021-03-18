import {RentlerPage} from "../signInUpPage"
const chromedriver = require("chromedriver");
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities,
    Browser
} from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
  const rentler = new RentlerPage(driver);

    test("Cannot sign in with invalid email and password", async () => {
      await rentler.navigate();
      await rentler.signingIn();
      await rentler.enteringEmail("natalie.halloran@yahoo.com");
      await rentler.enteringPassword("12345678\n");
      expect(await rentler.invalidSignin()).toContain("Invalid username or password");
      });

    test("Cannot sign in with valid email but invalid password", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.enteringEmail("marsqaemail@gmail.com");
        await rentler.enteringPassword("1234\n");
        expect(await rentler.passwordShort()).toBeTruthy();
    });
   test("Can sign up with valid email address", async () => { //SignUp cannot be done by automation, but the fields can be entered automatically
        await rentler.navigate();
        await rentler.signingUp();
        await rentler.enteringName("Natalie","Halloran");
        await rentler.enteringEmail("tohog61616@naymio.com");
        await rentler.enteringPassword("12345678");
        await rentler.retypingPassword("12345678");
        await rentler.landlordOrTenant();
        await rentler.agreeToTermsSignUp();
    });
    test("Can sign in using valid email address", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.enteringEmail("marsqaemail@gmail.com");
        await rentler.enteringPassword("1234567\n");
        await rentler.useAsTenant();
        expect(await rentler.welcomePage()).toContain("Welcome");
    });
    test("Can favorite a listing", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.favoriteListing();
        expect(await rentler.showMyPlaces()).toContain("1 Result");
    });
   
