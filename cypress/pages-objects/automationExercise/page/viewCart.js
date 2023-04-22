export default class viewCart {
  static quantityCartProduct() {
    cy.get(".cart_quantity").its("length").should("eq", 2);
  }

  static verifyProductDetails() {
    cy.get("#product-1 > .cart_price > p").contains("Rs. 500");
    cy.get("#product-2 > .cart_price > p").contains("Rs. 400");
    cy.get("#product-1 > .cart_quantity > .disabled").contains("1");
    cy.get("#product-2 > .cart_quantity > .disabled").contains("1");
    cy.get("#product-1 > .cart_total > .cart_total_price").contains("Rs. 500");
    cy.get("#product-2 > .cart_total > .cart_total_price").contains("Rs. 400");
  }
}