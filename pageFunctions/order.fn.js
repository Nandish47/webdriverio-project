var lib = require("../utilities/commonFunctions")
var orderPage = require("../pageObjects/order.page")

class Order {

    isOrdersPageReset() {

        let flag =
        lib.getText(orderPage.product) === "MyMoney" &&
        lib.getText(orderPage.quantity) === "0" &&
        lib.getText(orderPage.priceperUnit) === "100" &&
        lib.getText(orderPage.discount) === "0" &&
        lib.getText(orderPage.customerName) === "" &&
        lib.getText(orderPage.street) === "" &&
        lib.getText(orderPage.state) === "" &&
        lib.getText(orderPage.city) === "" &&
        lib.getText(orderPage.zip) === "" &&
        !lib.isSelected(orderPage.visa) &&
        lib.getText(orderPage.cardNumber) === "" &&
        lib.getText(orderPage.expireDate) === ""

        return flag
    }

    enterProductInfo() {
        lib.selectItemFromCombobox(orderPage.product, "ScreenSaver")
        lib.enterText(orderPage.quantity, 20)
        lib.enterText(orderPage.priceperUnit, 200)
        lib.enterText(orderPage.discount, 5)
    }

    enterAddress() {
        lib.enterText(orderPage.customerName, "Bruce Wayne")
        lib.enterText(orderPage.street, "1007 Mountain Drive")
        lib.enterText(orderPage.city, "Gotham")
        lib.enterText(orderPage.state, "US")
        lib.enterText(orderPage.zip, "1234567")
    }

    enterPaymentInfo() {
        lib.click(orderPage.visa)
        lib.enterText(orderPage.cardNumber, "1234567")
        lib.enterText(orderPage.expireDate, "05/06")
    }

}

module.exports = new Order();