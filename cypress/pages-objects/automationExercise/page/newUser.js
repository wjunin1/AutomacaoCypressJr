import mainPage from "/cypress/pages-objects/automationExercise/page/mainPage.js";
import {
  name,
  email,
  password,
  day,
  month,
  year,
  firstName,
  lastName,
  company,
  address1,
  address2,
  country,
  state,
  city,
  zipcode,
  mobileNumber,
} from "/cypress/fixtures/automationExercise/user1.json";
import Navbar from "../../pages-objects/automationExercise/components/Navbar";
import singup from "../../pages-objects/automationExercise/page/singup";

export default class newUser {
  static newUser() {
    Navbar.singupLogin();
    singup.checkSingup();
    singup.enterNameEmailNewRegister(name, email);
    singup.buttonSingup();
    singup.newAccountValidate();
    singup.accountDetails(password, day, month, year);
    singup.acceptNewsletter();
    singup.acceptRecieveSpecial();
    singup.adressInformation(
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
    );
    singup.accountCreateButton();
    singup.accountCreateConfirm();
    singup.continueButton();
    Navbar.loggedValidade(name);
  }
}
