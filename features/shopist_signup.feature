Feature: Shop.ist signup page

    Background: 
        Given Navigate to the website

    Scenario: Enter relevent information in text fields
        Given Enter first name last name and email address
        |FirstName  |   LastName       | EmailAddress            |
        |Benjamin   |   Saint Elien    | random.email@email.com  |
        Then Click signup button
