export default class singup {
  static checkSingup() {
    cy.contains("New User Signup!").should("be.visible");
  }

  static checkloginToAccount() {
    cy.contains("Login to your account").should("be.visible");
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

  static adressInformation(
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobileNumber
  ) {
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address1);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('[data-qa="country"]').select(country).as("county");
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);
  }

  static accountCreateButton() {
    cy.get('[data-qa="create-account"]').click();
  }

  static accountCreateConfirm() {
    cy.contains("Account Created!").should("be.visible");
  }

  static continueButton() {
    cy.get('[data-qa="continue-button"]').click();
  }

  static loginAcess(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
  }

  static buttonLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  static incorrectLogin() {
    cy.contains("Your email or password is incorrect!").should("be.visible");
  }
}
