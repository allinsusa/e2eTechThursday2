export class HeroList {
    getTitle() {
        return cy.get('h2[id="heroListTitle"]');
    }

    getHeroItem(){
        return cy.get('a[class="hero"]');
    }

    getHeroList(){
        return cy.get('ul[class="heroes"]');
    }
}