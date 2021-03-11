import {RentlerPage} from "../rentlerPageObject"
const chromedriver = require("chromedriver");
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities
} from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
  const rentler = new RentlerPage(driver);

  test("Cannot sign in with invalid email or password", async () => {
      await rentler.navigate();
      await rentler.enteringEmail("natalie.halloran@yahoo.com");
      await rentler.enteringPassword("12345678");
      expect(rentler.invalidSignin()).toContain("Invalid username or password");
  });

