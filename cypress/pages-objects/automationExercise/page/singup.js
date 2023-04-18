export default class singup {
  static checkSingup() {
    cy.contains("New User Signup!").should("be.visible");
  }

  static enterNameEmailNewRegister(name, email) {
    cy.get('[data-qa="signup-name"').type(name);
    cy.get('[data-qa="signup-email"').type(email);
  }

  static buttonSingup() {
    cy.get('[data-qa="signup-button"').click();
  }

  static newAccountValidate() {
    cy.contains("Enter Account Information").should("be.visible");
  }

  static accountDetails(password, day, month, year) {
    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').type(password);
    cy.get("#days").select(day).as("day");
    cy.get("#months").select(month).as("month");
    cy.get("#years").select(year).as("year");
  }

  static acceptNewsletter() {
    cy.get("#newsletter").check();
  }

  static acceptRecieveSpecial() {
    cy.get("#optin").check();
  }
}
