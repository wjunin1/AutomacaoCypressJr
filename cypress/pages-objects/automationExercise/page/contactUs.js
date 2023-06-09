export default class contactUs {
  static validateContact() {
    cy.contains("Get In Touch").should("be.visible");
  }

  static touchBody(contactName, contactEmail, contactSubject, contactMessage) {
    cy.get('[data-qa="name"]').type(contactName);
    cy.get('[data-qa="email"]').type(contactEmail);
    cy.get('[data-qa="subject"]').type(contactSubject);
    cy.get('[data-qa="message"]').type(contactMessage);
  }

  static uploadFileContactUs() {
    cy.get("input[type=file]").selectFile(
      "cypress/downloads/arquivotesteenvio.txt"
    );
  }

  static submitButton() {
    cy.get('[data-qa="submit-button"]').click();
  }

  static pressEnter() {
    cy.type("{enter}");
  }

  static validateSuccess() {
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");
  }

  static buttonHome() {
    cy.contains(" Home").click();
  }
}
