Feature: Create Order

    Background: 
      Given User Logs into WebOrders
      When user naviagtes to Orders page
      And enters product information
      And enters address information
      And enters payment information

    Scenario: User can reset all the fields of Orders Page on reset when creating New Order
      And clicks on reset button
      Then all the entered fields on Orders Page are reset to default value

    Scenario: User can create a new order
      And clicks on Process button
      Then order is successfully created