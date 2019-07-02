class CommonFunctions {

    navigate(url) {
        browser.url(url)
    }

    click(element) {
        element.click()
    }

    enterText(element, value) {
        element.setValue(value)
    }

    selectItemFromCombobox(element, item) {
        element.selectByVisibleText(item)
    }

    isVisible(element) {
        return element.isVisible()
    }

    getText(element) {
        return element.getValue()
    }

    isSelected(element) {
        return element.isSelected()
    }

}

module.exports = new CommonFunctions();