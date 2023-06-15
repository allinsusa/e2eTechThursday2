import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { HeroList } from "../page-objects/hero-listing";

const heroesPageObj = new HeroList();

Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

Given(/^there is at least one hero in the list$/, () => {
	cy.get('.heroes').find('li').should('have.length.greaterThan', 1);
});

When(/^the user clicks on the delete button next to hero "([^"]*)"$/, (args1) => {
	cy.get("li:nth-of-type(1) > button").click();
});

Then(/^the hero "([^"]*)" is no longer visible in the list$/, (args1) => {
    heroesPageObj.getTitle().should('contain', 'My Heroes');
    console.log(args1);
	return true;
});

Given(/^a user enters the hero name ("([^"]*)") to be added$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^the user clicks on add hero$/, () => {
	return true;
});

Then(/^the hero is visible in the list$/, () => {
	return true;
});

Given(/^a user leaves the hero name blank$/, () => {
	return true;
});

When(/^the user clicks on add hero$/, () => {
	return true;
});

Then(/^the hero is not visible in the list$/, () => {
	return true;
});
