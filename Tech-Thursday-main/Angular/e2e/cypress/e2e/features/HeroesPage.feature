Feature: HeroesPage Functionality

This Feature tests heroes scenarios

    Background: 
        Given the user is on the heroes page

    Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
        Given there is at least one hero in the list
        When the user clicks on the delete button next to hero "Bombasto"
        Then the hero "Bombasto" is no longer visible in the list

    Scenario: As a TOH user, I want to add a hero in order to see the hero list increase 
        Given a user enters the hero name ("MrNo") to be added
        When the user clicks on add hero 
        Then the hero is visible in the list 
    
    Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
        Given a user leaves the hero name blank
        When the user clicks on add hero 
        Then the hero is not visible in the list