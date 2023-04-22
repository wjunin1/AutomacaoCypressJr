export default class mainPage {
  static login(url) {
    cy.visit(url);
  }

  static checkImgVisible() {
    cy.get('[alt="Website for automation practice"]').should("be.visible");
  }

  static accountDeleted() {
    cy.contains("Account Deleted!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }

  static scrollRoll(value) {
    cy.scrollTo(value);
  }

  static subscriptionEmail(value) {
    cy.get("#susbscribe_email").type(value);
    cy.get("#subscribe").click();
  }

  static viewProduct() {
    cy.contains("View Product").click();
  }
}
