import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "../page-objects/landing-page";
import { HeroList } from "../page-objects/hero-listing";
import { HeroDetails } from "../page-objects/hero-details";

const landingPageObj = new LandingPage();
const heroesPageObj = new HeroList();
const heroDetailObj = new HeroDetails();

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks on the heroes button$/, () => {
	landingPageObj.clickOnHeroesButton();
});

Then(/^the user shall see the heroes listing$/, () => {
	cy.url().should('include', 'heroes');
	heroesPageObj.getTitle().should('contain', 'My Heroes');
});

When(/^the user clicks on the dashboard button$/, () => {
	landingPageObj.clickOnDashboardButton();
});

Then(/^the user shall see the top 4 heroes displayed$/, () => {
	landingPageObj.getTopHeroesTitle().should('contain', 'Top Heroes');
	cy.get('.heroes-menu').find('a').should('have.length', 4);
});

Given(/^the user enters "([^"]*)"$/, (args1) => {
	landingPageObj.enterSearchText(args1+"");
});

And(/^the word wheel is displayed$/, () => {
	landingPageObj.getSearchResults().should('contain', 'Bombasto');
});

When(/^selects the first item$/, () => {
	landingPageObj.clickOnFirstSearchResult();
});

Then(/^the hero details are displayed$/, () => {
	cy.url().should('include', 'detail/13');
});

Given(/^the Bombasto hero button is displayed$/, () => {
	landingPageObj.getBombastoHeroButton().should('contain', 'Bombasto');
});

When(/^the user clicks on the Bombasto hero button$/, () => {
	landingPageObj.clickOnBombastoHeroButton();
});

Then(/^the user shall see the Bombasto hero details displayed$/, () => {
	cy.url().should('include', 'detail/13');
	heroDetailObj.getTitle().should('contain', 'BOMBASTO Details');
});




