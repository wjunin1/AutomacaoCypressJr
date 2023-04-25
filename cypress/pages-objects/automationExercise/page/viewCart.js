import {
  address1,
  address2,
  country,
  state,
  city,
  zipcode,
} from "/cypress/fixtures/automationExercise/user1.json";
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

  static validateQuantity(qtd) {
    cy.get("#product-1 > .cart_quantity > .disabled").contains(qtd);
  }

  static proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  static modalCheckoutToRegister() {
    cy.get(".modal-body > :nth-child(2) > a > u").click();
  }
}
