import {BasePage} from "../rentlerBasePage"
import {
    By,
    Builder,
    until,
    WebDriver,
    WebElement,
    Capabilities,
    Browser
} from "selenium-webdriver";
 jest.setTimeout(1000*60*5)

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();


const click = async function (driver, elementBy: By) {
    await driver.wait(until.elementLocated(elementBy));
    return (await driver.findElement(elementBy)).click();
 };


 //Creating the class
export class FiltersPage extends BasePage {
    driver: WebDriver;
    url: string = 'https://rentler.com';
   
    //Begin Selector definitions
    //General Search Filters Options   
    searchListingsButton: By = By.id("header_listings_menu_toggle");
    moreFiltersButton: By = By.className("more-filters-button");
    showResultsButton: By = By.className("btn-primary btn px-2 mb-0");
    showPropertyResultsButton: By = By.className("btn-primary btn px-2");
    clickListing: By = By.className("listing-item");
    
    //Pet Allowance
    //smallDogsCheckBox: By = By.id("aresmalldogsallowed");
    smallDogsCheckBox: By = By.css('label[for = "aresmalldogsallowed"]');
    largeDogsCheckBox: By = By.css('label[for = "arelargedogsallowed"]');
    catsCheckBox: By = By.css('label[for = "arecatsallowed"]');
    numberSearchResults: By = By.className("zeta search-result-text");
    smallDogsStatus: By = By.xpath('//*[contains(text(),"Small Dogs Allowed")]');
    backToSearch: By = By.className("icon-back-arrow");
    catsStatus: By = By.xpath('//*[contains(text(),"Cats Allowed")]');
    largeDogStatus: By = By.xpath('//*[contains(text(),"Large Dogs Allowed")]');


    //Property Type Selectors
    propertyFilterButton: By = By.id("property-fake");
    houseListingCheckBox: By = By.css('label[for = "house1"]');
    aptListingCheckBox: By = By.css('label[for = "apartment1"]');
    townhouseListingCheckBox: By = By.css('label[for = "townhome1"]');
    condoListingCheckBox: By = By.css('label[for = "condomult1"]');
    inLawAndBasementListingCheckBox: By = By.css('label[for = "inlaw1"]');
    singleRoomListingCheckBox: By = By.css('label[for = "singleroom1"]');
    subleaseListingCheckBox: By = By.css('label[for = "sublease1"]');
    apartmentStatus: By = By.xpath('//*[contains(text(),"Apartment")]');
    houseStatus: By = By.xpath('//*[contains(text(),"House")]');
    townHomeStatus: By = By.xpath('//*[contains(text(),"Townhome")]');
    

    //Smoking
    allSmokingCheckBox: By = By.css('label[for = "issmokingallowedAll"]');
    yesSmokingCheckBox: By = By.css('label[for = "issmokingallowedYes"]');
    noSmokingCheckBox: By = By.css('label[for = "issmokingallowedNo"]');
    allSmokingStatus: By = By.xpath('//*[contains(text(),"Small Dogs Allowed")]');
    yesSmokingStatus: By = By.xpath('//*[contains(text(),"Smoking • Allowed")]');
    noSmokingStatus: By = By.xpath('//*[contains(text(),"Smoking • Not Allowed")]');


    //Begin Methods
    constructor(driver:WebDriver) {
        super(driver);
   
}
    //General Search Filter Methods
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.signIn));
        await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.signIn))
    );
    }
    async clickSearchListings() {
        await this.driver.wait(until.elementLocated(this.searchListingsButton));
        await click(this.driver,this.searchListingsButton);       
    }
    async searchMoreFilters() {
        await this.driver.wait(until.elementLocated(this.moreFiltersButton));
        await click(this.driver,this.moreFiltersButton); 
    }
    async showResults () {
        await this.driver.wait(until.elementLocated(this.showResultsButton));
        await click(this.driver,this.showResultsButton);
    }
    async showPropertyResults () {
        await this.driver.wait(until.elementLocated(this.showPropertyResultsButton));
        await click(this.driver,this.showPropertyResultsButton);
    }
  
    
    //Pet Allowance Methods
    async smallDogsAllowed () {
        await this.driver.wait(until.elementLocated(this.smallDogsCheckBox));
        await click(this.driver,this.smallDogsCheckBox);
    }
    async largeDogsAllowed () {
        await this.driver.wait(until.elementLocated(this.largeDogsCheckBox));
        await click(this.driver,this.largeDogsCheckBox);
    }
    async catsAllowed () {
        await this.driver.wait(until.elementLocated(this.catsCheckBox));
        await click(this.driver,this.catsCheckBox);
    }
    async numberOfResults () {
        await this.driver.wait(until.elementLocated(this.numberSearchResults));
        let numberResultsString:String = await (await driver.findElement(this.numberSearchResults)).getText()
        if (numberResultsString == 'No Results') {
            return 0;
        }
        numberResultsString = numberResultsString.replace(' Results','');
        let numberResults:number = Number(numberResultsString);
        return numberResults;
        //await click(this.driver,this.numberSearchResults);
    }
    async clickRandomListing () {
        await this.driver.wait(until.elementLocated(this.clickListing));
        let arrayOfListings = await driver.findElements(this.clickListing);
        let selectedListing = arrayOfListings[Math.floor(Math.random()*arrayOfListings.length)];
        //console.log('selectedListing',selectedListing)
        await selectedListing.click();
    }
    async clickBackButton () {
        await this.driver.wait(until.elementLocated(this.backToSearch));
        await click(this.driver,this.backToSearch);
    }

    //Smoking Methods
    async searchSmokingYes () {
        await this.driver.wait(until.elementLocated(this.yesSmokingCheckBox));
        await click(this.driver,this.yesSmokingCheckBox)
    }

    //Property type Methods
    async searchPropertyType () {
        await this.driver.wait(until.elementLocated(this.propertyFilterButton));
        await click(this.driver,this.propertyFilterButton)
    }
    async searchForApartments () {
        await this.driver.wait(until.elementLocated(this.aptListingCheckBox));
        await click (this.driver,this.aptListingCheckBox)
    }
    async searchForTownHouse () {
        await this.driver.wait(until.elementLocated(this.townhouseListingCheckBox));
        await click (this.driver,this.townhouseListingCheckBox)
    }
    async searchForHouse () {
        await this.driver.wait(until.elementLocated(this.houseStatus));
        await click (this.driver,this.houseStatus)
    }

}

//Begin Testing
const filterPage = new FiltersPage(driver);
//This test will check that pet filters work.
//1. Navigate to Rentler.com
test ("Search Listings by Small Dogs: Lower number of listings after pet filter & random listing with small dog filter on to check for small dogs", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(2000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchMoreFilters();
    //5. Search for Small Dogs.
    await filterPage.smallDogsAllowed();
    await filterPage.showResults();
    await driver.sleep(2000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    //8. Now test that a random listing has been filtered accurately by small dog allowance (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(2000);
        let smallDogsStatusElements = (await driver.findElements(filterPage.smallDogsStatus));
        expect(smallDogsStatusElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(2000);
    }   
});

test ("Search Listings by Cats: Lower number of listings after pet filter & random listing cat filter to check for cats", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(2000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchMoreFilters();
    //5. Search for Cats.
    await filterPage.catsAllowed();
    await filterPage.showResults();
    await driver.sleep(2000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    //8. Now test that a random listing has been filtered accurately by cat allowance (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(2000);
        let catsStatusElements = (await driver.findElements(filterPage.catsStatus));
        expect(catsStatusElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(2000);
    }   
});

test ("Apartment: Search Listings by Property Type", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(2000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchPropertyType();
    //5. Search for Apartments.
    await filterPage.searchForApartments();
    await filterPage.showPropertyResults();
    await driver.sleep(2000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    //8. Now test that a random listing has been filtered accurately by apartment (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(2000);
        let apartmentElements = (await driver.findElements(filterPage.apartmentStatus));
        expect(apartmentElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(2000);
    }   
});

test ("Townhouse: Search Listings by Property Type", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(2000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchPropertyType();
    //5. Search for Apartments.
    await filterPage.searchForTownHouse();
    await filterPage.showPropertyResults();
    await driver.sleep(2000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    //8. Now test that a random listing has been filtered accurately by townhouse (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(2000);
        let townhouseElements = (await driver.findElements(filterPage.townHomeStatus));
        expect(townhouseElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(2000);
    } 
});  
test ("House: Search Listings by Property Type", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(4000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchPropertyType();
    //5. Search for Apartments.
    await filterPage.searchForHouse();
    await filterPage.showPropertyResults();
    await driver.sleep(4000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    //8. Now test that a random listing has been filtered accurately by house (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(4000);
        let houseElements = (await driver.findElements(filterPage.houseStatus));
        expect(houseElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(4000);
    } 
});  

test ("Search Listings by Smoking: Yes Smoking", async () => {
    await filterPage.navigate();
    //2. Click Search Listings on main page.
    await filterPage.clickSearchListings();
    //3. Click More Listings.
    await driver.sleep(5000);
    //4. Log the number of results before filtering
    let originalResultsCount:number = await filterPage.numberOfResults();
    await filterPage.searchMoreFilters();
    //5. Search for Cats.
    await filterPage.searchSmokingYes();
    await filterPage.showResults();
    await driver.sleep(5000);
    //6. Log the number of results after filtering
    let newResultsCount:number = await filterPage.numberOfResults();
    //7. Expect the number of results that are filtered to be less than the original number
    expect(newResultsCount).toBeLessThan(originalResultsCount);
    if (newResultsCount == 0) {
        return;
    }
    //8. Now test that a random listing has been filtered accurately by smoking allowance (yes or no)
    for (let counter=0;counter<2;counter=counter+1) {
        await filterPage.clickRandomListing();
        await driver.sleep(5000);
        let smokingStatusElements = (await driver.findElements(filterPage.yesSmokingStatus));
        expect(smokingStatusElements.length).toBeGreaterThan(0);
        // Go back to results
        await filterPage.clickBackButton();
        await driver.sleep(5000);
    }   
});
