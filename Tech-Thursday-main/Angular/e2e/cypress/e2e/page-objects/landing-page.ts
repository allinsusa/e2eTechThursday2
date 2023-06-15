import { Environment } from "../../environments/environment";

export class LandingPage {

    clickOnHeroesButton() {
        cy.get('a[id="btnHeroList"]').click();
    }

    clickOnDashboardButton() {
        cy.get('a[id="btnDashboard"]').click();
    }

    enterSearchText(searchText: string) {
        cy.get('input[id="search-box"]').type(searchText);
    }

    getSearchResults() {
        return cy.get('ul[class="search-result"]');
    }

    clickOnFirstSearchResult() {
        cy.get('ul[class="search-result"] li:first-child').click();
    }

    getTopHeroesTitle() {
        return cy.get('h2[id="topHeroesTitle"]');
    }

    getBombastoHeroButton() {
        return cy.get('a:contains(Bombasto)');
    }

    clickOnBombastoHeroButton() {
        cy.get('a:contains(Bombasto)').click();
    }
}
