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

  test("Cannot sign in with invalid email or password", async () => {
      await rentler.navigate();
      await rentler.signingIn();
      await rentler.enteringEmail("natalie.halloran@yahoo.com");
      await rentler.enteringPassword("12345678");
      expect(await rentler.invalidSignin()).toContain("Invalid username or password");
  });
   test("Can sign up with valid email address", async () => {
        await rentler.navigate();
        await rentler.signingUp();
        await rentler.enteringName("Natalie","Halloran");
        await rentler.enteringEmail("tohog61616@naymio.com");
        await rentler.enteringPassword("12345678");
        await rentler.retypingPassword("12345678");
        await rentler.landlordOrTenant();
        await rentler.agreeToTermsSignUp();
    });

