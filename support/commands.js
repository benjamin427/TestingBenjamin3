// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("signup_button", () => {
    cy.get(".signup-button").click({multiple: true});
});

Cypress.Commands.add("click_menu_selection_chairs", () => {
    cy.get(".chairs").click({force: true});
})

Cypress.Commands.add("click_menu_selection_sofas", () => {
    cy.get(".sofas").click({force: true});
})

Cypress.Commands.add("click_menu_selection_bedding", () => {
    cy.get(".bedding").click({force: true});
})

Cypress.Commands.add("click_menu_selection_lighting", () => {
    cy.get(".lighting").click({force: true});
})

Cypress.Commands.add("click_menu_selection_profile", () => {
    cy.get(".profile").click({force: true});
})

Cypress.Commands.add("click_menu_selection_cart", () => {
    cy.get(".cart").click({force: true});
})

Cypress.Commands.add("navigate_to_homepage", () => {
    cy.visit("https://shopist.io");
})