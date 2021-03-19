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
      await rentler.enteringEmail("natalie.halloran@yahoo.com"); //natalie.halloran@yahoo.com has not been signed up
      await rentler.enteringPassword("12345678\n");
      expect(await rentler.invalidSignin()).toContain("Invalid username or password");
      });

    test("Cannot sign in with valid email but invalid password", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.enteringEmail("marsqaemail@gmail.com"); //marsqaemail@gmail.com has been signed up
        await rentler.enteringPassword("1234\n"); //This is not the password for marsquaemail@gmail.com, it is also too short.
        expect(await rentler.passwordShort()).toBeTruthy(); //The data element that includes "Password must be between 7 and 100 characters" has been returned
    });
   test("Can sign up with valid email address", async () => { //SignUp cannot be done by automation, but the fields can be entered automatically
        await rentler.navigate();
        await rentler.signingUp();
        await rentler.enteringName("Natalie","Halloran"); //The enteringName function takes 2 arguments, so both the first and last name can be entered through one method.
        await rentler.enteringEmail("tohog61616@naymio.com");
        await rentler.enteringPassword("12345678");
        await rentler.retypingPassword("12345678");
        await rentler.landlordOrTenant();
        await rentler.agreeToTermsSignUp();
    });
    test("Can sign in using valid email address", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.enteringEmail("marsqaemail@gmail.com");//This email address was used to sign up manually
        await rentler.enteringPassword("1234567\n"); //This is the correct password for marsqaemail@gmail.com
        await rentler.useAsTenant();
        expect(await rentler.welcomePage()).toContain("Welcome"); //Once "Use As Tenant" has been chosen the user will be brought to the Welcome page
    });
    test("Can favorite a listing", async () => {
        await rentler.navigate();
        await rentler.signingIn();
        await rentler.favoriteListing(); //A listing should be favorited, but this only works sometimes due to a bug with the map
        expect(await rentler.showMyPlaces()).toContain("1 Result");//Once a listing is favorited, My Place is clicked and the one favorited listing appears under My Properties
    });
   
