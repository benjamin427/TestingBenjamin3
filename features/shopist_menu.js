const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor');



Given("Navigate to the url", () => {
    cy.navigate_to_homepage();
})

Then("Select chair from the menu", () => {
    cy.click_menu_selection_chairs();
});

Then("Select sofas from the menu", () => {
    cy.click_menu_selection_sofas();
});

Then("Select bedding from the menu", () => {
    cy.click_menu_selection_bedding();
});

Then("Select lighting from the menu", () => {
    cy.click_menu_selection_lighting();
});

Then("Select my profile from the menu", () => {
    cy.click_menu_selection_profile();
});

Then("Select cart from the menu", () => {
    cy.click_menu_selection_cart();
});