export default class mainPage {
  static login(url) {
    cy.visit(url);
  }

  static checkImgVisible() {
    cy.get('[alt="Website for automation practice"]').should("be.visible");
  }
}
