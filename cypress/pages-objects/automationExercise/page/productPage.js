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

  static productSearch(productName) {
    cy.get("#search_product").type(productName);
    cy.get("#submit_search").click();
  }

  static productSearchNotVisible() {
    cy.contains("Blue Top").should("not.exist");
  }

  //eq 2 + 2 always
  static addProductToCart(prod) {
    cy.get(".add-to-cart").eq(prod).click();
  }

  static productConfirmationCart(button) {
    cy.contains(button).click();
  }

  static addProductQuantity(qtd) {
    cy.get("#quantity").clear();
    cy.get("#quantity").type(qtd);
  }

  static addToCart() {
    cy.contains("Add to cart").click();
  }
}
