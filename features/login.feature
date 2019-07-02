@login
Feature: Login

    Background: User naviagtes to UAT
      Given User navigates to WebOrders

    Scenario: User cannot login with invalid credentials
      When user enters invalid username and password
      And clicks of login button
      Then user login attempt is unsuccessful

    Scenario: User can login with valid credentials
      When user enters valid username and password
      And clicks of login button
      Then user login attempt is successful

    Scenario: User can login with valid credentials and logout
      When user enters valid username and password and logs into application
      And clicks on Logout link
      Then user is successfully logged out of the application

    

    