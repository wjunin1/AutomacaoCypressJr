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
  company,
  address1,
  address2,
  country,
  state,
  city,
  zipcode,
  mobileNumber,
  emailfixo,
  passwordfixo,
  nomefixo,
} from "/cypress/fixtures/automationExercise/user1.json";
import Navbar from "../../pages-objects/automationExercise/components/Navbar";
import singup from "../../pages-objects/automationExercise/page/singup";
beforeEach(() => {
  //1. Launch browser
  //2. Navigate to url 'http://automationexercise.com'
  mainPage.login(automationExercise);
  //3. Verify that home page is visible successfully
  mainPage.checkImgVisible();
});

describe("Test Case 1: Register User", () => {
  it("Create Account and delete", () => {
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
    // 13. Click 'Create Account button'
    singup.accountCreateButton();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    singup.accountCreateConfirm();
    // 15. Click 'Continue' button
    singup.continueButton();
    // 16. Verify that 'Logged in as username' is visible
    Navbar.loggedValidade(name);
    // 17. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    mainPage.accountDeleted();
  });
});

describe("Test Case 2: Login User with correct email and password", () => {
  it("new user", () => {
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
  });
  it("Login and delete account", () => {
    //4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'Login to your account' is visible
    singup.checkloginToAccount();
    // 6. Enter correct email address and password
    singup.loginAcess(email, password);
    // 7. Click 'login' button
    singup.buttonLogin();
    // 8. Verify that 'Logged in as username' is visible
    Navbar.loggedValidade(name);
    // 9. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 10. Verify that 'ACCOUNT DELETED!' is visible
    mainPage.accountDeleted();
  });
});

describe("Test Case 3: Login User with incorrect email and password", () => {
  it("Incorrect email and password", () => {
    // 4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'Login to your account' is visible
    singup.checkloginToAccount();
    // 6. Enter incorrect email address and password
    singup.loginAcess("Incorrectemail@email", "1234");
    // 7. Click 'login' button
    singup.buttonLogin();
    // 8. Verify error 'Your email or password is incorrect!' is visible
    singup.incorrectLogin();
  });
});

describe("Test Case 4: Logout User", () => {
  it("Logout", () => {
    // 4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'Login to your account' is visible
    singup.checkloginToAccount();
    // 6. Enter correct email address and password
    singup.loginAcess(emailfixo, passwordfixo);
    // 7. Click 'login' button
    singup.buttonLogin();
    // 8. Verify that 'Logged in as username' is visible
    Navbar.loggedValidade(nomefixo);
    // 9. Click 'Logout' button
    Navbar.logoutButton();
    // 10. Verify that user is navigated to login page
    Navbar.validadeUrlLogin();
  });
});

describe("Test Case 5: Register User with existing email", () => {
  it.only("Register user with existing email", () => {
    // 4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'New User Signup!' is visible
    singup.checkloginToAccount();
    // 6. Enter name and already registered email address
    singup.enterNameEmailNewRegister(name, emailfixo);
    // 7. Click 'Signup' button
    singup.buttonSingup();
    // 8. Verify error 'Email Address already exist!' is visible
    singup.emailExist();
  });
});
