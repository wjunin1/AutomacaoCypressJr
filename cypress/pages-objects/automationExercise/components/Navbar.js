export default class Navbar {
  static singupLogin() {
    cy.get(".fa-lock").click();
  }

  static loggedValidade(name) {
    cy.contains(name).should("be.visible");
  }

  static buttonDeleteUser() {
    cy.contains(" Delete Account").click();
  }

  static logoutButton() {
    cy.contains(" Logout").click();
  }

  static validadeUrlLogin() {
    cy.url().should("include", "/login");
  }
}
