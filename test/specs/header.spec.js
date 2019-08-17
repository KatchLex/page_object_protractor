const expect = require("chai").expect;
const HomePageClass = require("../utils/page_objects/home_page/home_page");
const HomePage = new HomePageClass();

describe("Home page header", function () {

    it("should have 6 menu items", async function () {
        await HomePage.open();
        await HomePage.Header.navigationButtons.clickElementByText("OUR WORK");
        const countOfNavigationButtons = await HomePage.Header.navigationButtons.getCount();
        expect(countOfNavigationButtons).to.be.equal(6);
    });

    // This an example of a bad implementation, don't to it this way EVER!
    it("should have 6 menu items (Example of how NOT to do it)", async function () {
        await browser.get("https://www.epam.com");
        const arrayOfelementsTexts = await element.all(by.css("div.header .top-navigation__item")).getText();
        const elementToClickIndex = arrayOfelementsTexts.indexOf("OUR WORK");
        elementToClick = element.all(by.css("div.header .top-navigation__item")).get(elementToClickIndex);
        await elementToClick.click();
        const countOfNavigationButtons = await element.all(by.css("div.header .top-navigation__item")).count();
        expect(countOfNavigationButtons).to.be.equal(6);
    });

});