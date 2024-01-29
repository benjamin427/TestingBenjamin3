class SignupPage {
    navigate_to_url(){
        cy.visit("https://shopist.io/signup")
    }
    first_name = "#fn-input"
    last_name = "#ln-input"
    email_address = "#email-addr-input"
    
    click_signup_button(){
        cy.signup_button();
    }
}

const sign_up = new SignupPage();
export default sign_up;