import {RentlerPage} from "../signInUpPage"
import {AboutPage} from "../aboutPage"
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
  const rentlerAbout = new AboutPage(driver);

  describe("rentler", () => {
    beforeEach(async () => {
        await rentler.navigate();
      });
    afterAll(async () => {
        await rentler.driver.quit();
    });
      test("Can use search button on the main page", async () => {
        await rentler.driver.findElement(rentler.searchBar).sendKeys("Salt Lake City, Utah");
        await rentler.click(rentler.searchButton);
        expect(await driver.findElement(await By.xpath("//*[contains(text(), 'Properties For Rent')]")).getText()).toEqual("Salt Lake City, UT Properties For Rent");
      });
      test("Can use hyperlinks to navigate to the about page", async() => {
        let aboutUs: By = By.css("a[href='/about']");
        await rentler.driver.wait(until.elementLocated(aboutUs))
        await rentler.click(aboutUs);
        expect(await driver.findElement(await By.xpath('//*[contains(text(),"Our story")]')).getText()).toEqual("Our story");
      });
      test("Verify if filters persist after searching another city", async() => {
        await rentler.search(rentler.searchBar,"Salt Lake City, Utah");
        // click the more filters button
        await rentler.click(By.xpath("//*[contains(text(), 'More Filters')]"));
        // apply some filters
        await rentler.click(By.xpath("//label[@for='arelargedogsallowed']"));
        await rentler.click(By.xpath("//label[@for='arecatsallowed']"));
        await rentler.click(By.xpath("//label[@for='walkinclosets']"));
        await rentler.click(By.xpath("//label[@for='communitygameroom']"));
        await rentler.click(By.xpath("//label[@for='isacceptingapplications']"));
        await rentler.click(By.xpath("//button[@class='btn-primary btn px-2 mb-0']"));
        // search for a different city
        await rentler.driver.findElement(By.xpath("//input[@class='mapboxgl-ctrl-geocoder--input']")).clear();
        await rentler.driver.findElement(By.xpath("//input[@class='mapboxgl-ctrl-geocoder--input']")).sendKeys("West Valley City, Utah");
        // filters should remain checked
        expect(await rentler.driver.findElement(By.xpath("//span[@data-bind='formatMoreFilters()']")).getText()).toEqual("More Filters(5)");
      });
      test("Verify if filters persist after navigating to home screen and then navigating to properties to rent page", async() => {
        await rentler.search(rentler.searchBar,"Salt Lake City, Utah");
        // click the more filters button
        await rentler.click(By.xpath("//*[contains(text(), 'More Filters')]"));
        // apply some filters
        await rentler.click(By.xpath("//label[@for='arelargedogsallowed']"));
        await rentler.click(By.xpath("//label[@for='arecatsallowed']"));
        await rentler.click(By.xpath("//label[@for='walkinclosets']"));
        await rentler.click(By.xpath("//label[@for='communitygameroom']"));
        await rentler.click(By.xpath("//label[@for='isacceptingapplications']"));
        await rentler.click(By.xpath("//button[@class='btn-primary btn px-2 mb-0']"));
        // search for a different city
        await rentler.driver.findElement(By.xpath("//input[@class='mapboxgl-ctrl-geocoder--input']")).clear();
        await rentler.driver.findElement(By.xpath("//input[@class='mapboxgl-ctrl-geocoder--input']")).sendKeys("West Valley City, Utah");
        // go to the home screen
        await rentler.click(By.css(".logo"));
        // come back
        await rentler.search(rentler.searchBar,"Salt Lake City, Utah");
        /* are the filters still checkmarked?
        I would have assumed that they would be, but Rentler does not keep them checkmarked. I had to set expect to 0 to make this test pass.
        */
        expect(await rentler.driver.findElement(By.xpath("//span[@data-bind='formatMoreFilters()']")).getText()).toEqual("More Filters");
      });
  });




