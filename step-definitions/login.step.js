const { Given, When, Then } = require('cucumber')

Given(/^User navigates to WebOrders$/, function () {
    //Navigate to Application url
    browser.url("./")
});

When(/^user enters invalid username and password$/, function () {
    //Identify web element by $(locator) function
    //Enter text to textbox
    $('#ctl00_MainContent_username').setValue("Tester")
    $('#ctl00_MainContent_password').setValue("invalid")
});

When(/^clicks of login button$/, function () {
    //Click on element
    $('#ctl00_MainContent_login_button').click()
});

Then(/^user login attempt is unsuccessful$/, function () {
    //Wait for element visibility, invisibility
    $('.error').waitForVisible(10000)
    expect($('#ctl00_MainContent_login_button').isVisible()).to.be.true
});

When(/^user enters valid username and password$/, function () {
    $('#ctl00_MainContent_username').setValue("Tester")
    $('#ctl00_MainContent_password').setValue("test")
});

Then(/^user login attempt is successful$/, function () {
    //Wait for element to exist, not exist
    $('#ctl00_logout').waitForExist(10000)
    expect($('#ctl00_logout').isVisible()).to.be.true
});

When(/^user enters valid username and password and logs into application$/, function () {
    $('#ctl00_MainContent_username').setValue("Tester")
    $('#ctl00_MainContent_password').setValue("test")
    $('#ctl00_MainContent_login_button').click()
    $('#ctl00_logout').waitForExist(10000)
});

When(/^clicks on Logout link$/, function () {
    $('#ctl00_logout').click()
});

Then(/^user is successfully logged out of the application$/, function () {
    //Verification
    expect($('#ctl00_MainContent_login_button').isVisible()).to.be.true
});

