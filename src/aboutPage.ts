import {BasePage} from "./rentlerBasePage"
import {
  By,
  Builder,
  until,
  WebDriver,
  WebElement,
  Capabilities
} from "selenium-webdriver";

export class AboutPage extends BasePage {
  heading: By = By.css(".heading");
  url: "https://www.rentler.com/about";
  constructor(driver:WebDriver) {
    super(driver);
  }
}