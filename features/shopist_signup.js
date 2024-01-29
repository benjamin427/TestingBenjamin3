import sign_up from "../pages/shopist_signup_page";
const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor');


Given("Navigate to the website", () => {
    sign_up.navigate_to_url();
})

Then("Enter first name last name and email address", (datatable) => (
    datatable.hashes().forEach(element => {
        cy.get(sign_up.first_name).type(element.FirstName);
        cy.get(sign_up.last_name).type(element.LastName);
        cy.get(sign_up.email_address).type(element.EmailAddress);
    })
))

Then("Click signup button", () => {
    sign_up.click_signup_button();
});
