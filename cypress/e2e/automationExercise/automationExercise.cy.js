import { automationExercise } from "/cypress/fixtures/links.json";
import mainPage from "/cypress/pages-objects//automationExercise/page/mainPage";
import {
  name,
  email,
  password,
  day,
  month,
  year,
  firstName,
  lastName,
} from "/cypress/fixtures/automationExercise/user1.json";
import Navbar from "../../pages-objects/automationExercise/components/Navbar";
import singup from "../../pages-objects/automationExercise/page/singup";

describe("Test Case 1: Register User", () => {
  //1. Launch browser
  beforeEach(() => {
    //2. Navigate to url 'http://automationexercise.com'
    mainPage.login(automationExercise);
  });

  it("login", () => {
    //3. Verify that home page is visible successfully
    mainPage.checkImgVisible();
    //4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    //5. Verify 'New User Signup!' is visible
    singup.checkSingup();
    //6. Enter name and email address
    singup.enterNameEmailNewRegister(name, email);
    ////7. Click 'Signup' button
    singup.buttonSingup();
    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    singup.newAccountValidate();
    //// 9. Fill details: Title, Name, Email, Password, Date of birth
    singup.accountDetails(password, day, month, year);
    // 10. Select checkbox 'Sign up for our newsletter!'
    singup.acceptNewsletter();
    // 11. Select checkbox 'Receive special offers from our partners!'
    singup.acceptRecieveSpecial();
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // cy.get('data-qa="first_name"').type(firstName);
    // cy.get('data-qa="last_name"').type(lastName);
    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  });
});
