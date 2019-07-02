class OrderPage {

    get order() { return $("//a[text()='Order']"); }
    get product() { return $("#ctl00_MainContent_fmwOrder_ddlProduct"); }    
    get quantity() { return $("#ctl00_MainContent_fmwOrder_txtQuantity"); }
    get priceperUnit() { return $("#ctl00_MainContent_fmwOrder_txtUnitPrice"); }
    get discount() { return $("#ctl00_MainContent_fmwOrder_txtDiscount"); }
    get customerName() { return $("#ctl00_MainContent_fmwOrder_txtName"); }
    get street() { return $("#ctl00_MainContent_fmwOrder_TextBox2"); }
    get city() { return $("#ctl00_MainContent_fmwOrder_TextBox3"); }
    get state() { return $("#ctl00_MainContent_fmwOrder_TextBox4"); }
    get zip() { return $("#ctl00_MainContent_fmwOrder_TextBox5"); }
    get visa() { return $("#ctl00_MainContent_fmwOrder_cardList_0"); }
    get cardNumber() { return $("#ctl00_MainContent_fmwOrder_TextBox6"); }
    get expireDate() { return $("#ctl00_MainContent_fmwOrder_TextBox1"); }
    get process() { return $("#ctl00_MainContent_fmwOrder_InsertButton"); }
    get reset() { return $("input[value=Reset]"); }
    get message() { return $("strong"); }
    
  }
  
  module.exports = new OrderPage();