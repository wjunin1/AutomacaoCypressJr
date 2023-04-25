import { faker } from "@faker-js/faker";
import {
  address1,
  address2,
  country,
  state,
  city,
  zipcode,
} from "/cypress/fixtures/automationExercise/user1.json";
export default class payment {
  static productDetail() {
    const column = [address1, address2, country, state, city, zipcode];
    column.forEach(function (value) {
      cy.contains(value).should("be.visible");
    });
  }

  static enterDescription() {
    cy.get('[name="message"]').type(faker.lorem.paragraph());
  }

  static paymentCard() {
    const month = faker.date.month();
    const monthNumber = new Date(`${month} 1, 2000`).getMonth() + 1;
    cy.get('[data-qa="name-on-card"]').type(faker.name.firstName());
    cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
    cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
    cy.get('[data-qa="expiry-month"]').type(monthNumber);
    cy.get('[data-qa="expiry-year"]').type(
      faker.date.past().getFullYear().toString()
    );
  }
}
