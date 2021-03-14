import {RentlerPage} from "../signInUpPage"
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities,
    Browser
} from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
  const rentler = new RentlerPage(driver);

  describe("rentler", () => {
    beforeEach(async () => {
        await rentler.navigate();
      });
    afterEach(async () => {
        await rentler.driver.quit();
    });
    // test("Cannot sign in with invalid email or password", async () => {
    //     await rentler.signingIn();
    //     await rentler.enteringEmail("natalie.halloran@yahoo.com");
    //     await rentler.enteringPassword("12345678");
    //     expect(await rentler.invalidSignin()).toContain("Invalid username or password");
    // });
    //  test("Can sign up with valid email address", async () => {
    //       await rentler.signingUp();
    //       await rentler.enteringName("Natalie","Halloran");
    //       await rentler.enteringEmail("tohog61616@naymio.com");
    //       await rentler.enteringPassword("12345678");
    //       await rentler.retypingPassword("12345678");
    //       await rentler.landlordOrTenant();
    //       await rentler.agreeToTermsSignUp();
    //   });
      test("Can use search button on the main page", async () => {

      });
      test("Can use hyperlinks to navigate to other endpoints", async() => {

      });
      test("Verify if filters persist", async() => {

      });
  });




