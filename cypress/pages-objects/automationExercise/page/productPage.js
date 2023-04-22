export default class productPage {
  static productListClick(product) {
    cy.contains("View Product").eq(product).click();
  }

  static productDetail() {
    const column = [
      "Blue Top",
      "Category: Women > Tops",
      "Rs. 500",
      " In Stock",
      " New",
      " Polo",
    ];
    column.forEach(function (value) {
      cy.contains(value).should("be.visible");
    });
  }
  
}
