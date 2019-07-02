const { Given, When, Then } = require('cucumber')

//Import Page Objects
var orderPage = require("../pageObjects/order.page")

//Import common functions specific to WebdriverIO
var lib = require("../utilities/commonFunctions")

//Import common functions specific to Orders Page
var ordersLib = require("../pageFunctions/order.fn")

Given(/^User Logs into WebOrders$/, function () {
    lib.navigate("./")
    $('#ctl00_MainContent_username').setValue("Tester")
    $('#ctl00_MainContent_password').setValue("test")
    $('#ctl00_MainContent_login_button').click()
});

//Step-definition with Page object and Common library
When(/^user naviagtes to Orders page$/, function () {
    lib.click(orderPage.order)
});

When(/^enters product information$/, function () {
    ordersLib.enterProductInfo()
});

When(/^enters address information$/, function () {
    ordersLib.enterAddress()
});

When(/^enters payment information$/, function () {
    ordersLib.enterPaymentInfo()
});

When(/^clicks on reset button$/, function () {
    lib.click(orderPage.reset)
});

When(/^clicks on Process button$/, function () {
    lib.click(orderPage.process)
});

Then(/^all the entered fields on Orders Page are reset to default value$/, function () {
    expect(ordersLib.isOrdersPageReset(), "Orders page is reset").to.be.true
});

Then(/^order is successfully created$/, function () {
    expect(lib.isVisible(orderPage.message), "Order is created successfully").to.be.true
});