Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to heroes page in order to see the hero listing
        When the user clicks on the heroes button
        Then the user shall see the heroes listing

    Scenario: As a toh user, I want to search for a hero
        Given the user enters "Bombasto"
        And the word wheel is displayed
        When selects the first item
        Then the hero details are displayed 

    Scenario: As a toh user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        When the user clicks on the dashboard button
        Then the user shall see the top 4 heroes displayed

    Scenario: As a toh user, I want to select a hero from the dashboard in order to see the hero details displayed
        Given the Bombasto hero button is displayed
        When the user clicks on the Bombasto hero button
        Then the user shall see the Bombasto hero details displayed