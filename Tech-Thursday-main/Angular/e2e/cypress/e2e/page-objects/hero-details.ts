export class HeroDetails {
    getTitle() {
        return cy.get('h2[id="heroDetailTitle"]');
    }
}