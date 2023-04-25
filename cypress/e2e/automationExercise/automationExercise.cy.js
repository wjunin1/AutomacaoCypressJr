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
import Navbar from "../../pages-objects/automationExercise/page/Navbar";
import singup from "../../pages-objects/automationExercise/page/singup";
import contactUs from "../../pages-objects/automationExercise/page/contactUs";
import {
  contactName,
  contactEmail,
  contactSubject,
  contactMessage,
} from "/cypress/fixtures/automationExercise/contactMensage.json";
import testCases from "../../pages-objects/automationExercise/page/testCases";
import productPage from "../../pages-objects/automationExercise/page/productPage";
import viewCart from "../../pages-objects/automationExercise/page/viewCart";
import payment from "../../pages-objects/automationExercise/page/payment";
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
    Navbar.loggedValidate(name);
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
    Navbar.loggedValidate(name);
  });
  it("Login and delete account", () => {
    //4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'Login to your account' is visible
    singup.checkLoginToAccount();
    // 6. Enter correct email address and password
    singup.loginAccess(email, password);
    // 7. Click 'login' button
    singup.buttonLogin();
    // 8. Verify that 'Logged in as username' is visible
    Navbar.loggedValidate(name);
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
    singup.checkLoginToAccount();
    // 6. Enter incorrect email address and password
    singup.loginAccess("Incorrectemail@email", "1234");
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
    singup.checkLoginToAccount();
    // 6. Enter correct email address and password
    singup.loginAccess(emailfixo, passwordfixo);
    // 7. Click 'login' button
    singup.buttonLogin();
    // 8. Verify that 'Logged in as username' is visible
    Navbar.loggedValidate(nomefixo);
    // 9. Click 'Logout' button
    Navbar.logoutButton();
    // 10. Verify that user is navigated to login page
    Navbar.validateUrlLogin();
  });
});

describe("Test Case 5: Register User with existing email", () => {
  it("Register user with existing email", () => {
    // 4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'New User Signup!' is visible
    singup.checkLoginToAccount();
    // 6. Enter name and already registered email address
    singup.enterNameEmailNewRegister(name, emailfixo);
    // 7. Click 'Signup' button
    singup.buttonSingup();
    // 8. Verify error 'Email Address already exist!' is visible
    singup.emailExist();
  });
});

describe("Test Case 6: Contact Us Form", () => {
  it("Contact us", () => {
    // 4. Click on 'Contact Us' button
    Navbar.contactUs();
    // 5. Verify 'GET IN TOUCH' is visible
    contactUs.validateContact();
    // 6. Enter name, email, subject and message
    contactUs.touchBody(
      contactName,
      contactEmail,
      contactSubject,
      contactMessage
    );
    // 7. Upload file
    contactUs.uploadFileContactUs();
    // 8. Click 'Submit' button
    contactUs.submitButton();
    // 9. Click OK button
    // contactUs.pressEnter();
    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    contactUs.validateSuccess();
    // 11. Click 'Home' button and verify that landed to home page successfully
    contactUs.buttonHome();
  });
});

describe("Test Case 7: Verify Test Cases Page", () => {
  it("Test Cases Page", () => {
    // 4. Click on 'Test Cases' button
    Navbar.testCase();
    // 5. Verify user is navigated to test cases page successfully
    testCases.testCase();
  });
});

describe("Test Case 8: Verify All Products and product detail page", () => {
  it("Product page", () => {
    // 4. Click on 'Products' button
    Navbar.productPage();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.ccContainsVisible("All Products");
    // 6. The products list is visible
    cy.ccGetVisible(".features_items");
    // 7. Click on 'View Product' of first product
    productPage.productListClick(0);
    // 8. User is landed to product detail page
    cy.ccValidateUrl("/product_details/1");
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    productPage.productDetail();
  });
});

describe("Test Case 9: Search Product", () => {
  it("Search Product", () => {
    // 4. Click on 'Products' button
    Navbar.productPage();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.ccContainsVisible("All Products");
    // 6. Enter product name in search input and click search button
    productPage.productSearch("Winter Top");
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    cy.ccContainsVisible("Winter Top");
    // 8. Verify all the products related to search are visible
    productPage.productSearchNotVisible();
  });
});

describe("Test Case 10: Verify Subscription in home page", () => {
  it("Subscription in home", () => {
    // 4. Scroll down to footer
    mainPage.scrollRoll("bottom");
    // 5. Verify text 'SUBSCRIPTION'
    cy.ccContainsVisible("Subscription");
    // 6. Enter email address in input and click arrow button
    mainPage.subscriptionEmail(emailfixo);
    // 7. Verify success message 'You have been successfully subscribed!' is visible
    cy.ccContainsVisible("You have been successfully subscribed!");
  });
});

describe("Test Case 11: Verify Subscription in Cart page", () => {
  it("Subscription in Cart Page", () => {
    // 4. Click 'Cart' button
    Navbar.cartPage();
    // 5. Scroll down to footer
    // mainPage.scrollRoll("bottom"); Tela sem produtos fica pequena e não precisa
    // 6. Verify text 'SUBSCRIPTION'
    cy.ccContainsVisible("Subscription");
    // 7. Enter email address in input and click arrow button
    mainPage.subscriptionEmail(emailfixo);
    // 8. Verify success message 'You have been successfully subscribed!' is visible
    cy.ccContainsVisible("You have been successfully subscribed!");
  });
});

describe("Test Case 12: Add Products in Cart", () => {
  it("Add Products in Cart", () => {
    // 4. Click 'Products' button
    Navbar.productPage();
    // 5. Hover over first product and click 'Add to cart'
    productPage.addProductToCart(0);
    // 6. Click 'Continue Shopping' button
    productPage.productConfirmationCart("Continue Shopping");
    // 7. Hover over second product and click 'Add to cart'
    productPage.addProductToCart(2);
    // 8. Click 'View Cart' button
    productPage.productConfirmationCart("View Cart");
    // 9. Verify both products are added to Cart
    viewCart.quantityCartProduct();
    // 10. Verify their prices, quantity and total price
    viewCart.verifyProductDetails();
  });
});

describe("Test Case 13: Verify Product quantity in Cart", () => {
  it("Verify Product quantity in Cart", () => {
    // 4. Click 'View Product' for any product on home page
    mainPage.viewProduct();
    // 5. Verify product detail is opened
    cy.ccValidateUrl("/product_details/1");
    // 6. Increase quantity to 4
    productPage.addProductQuantity(4);
    // 7. Click 'Add to cart' button
    productPage.addToCart();
    // 8. Click 'View Cart' button
    productPage.productConfirmationCart("View Cart");
    // 9. Verify that product is displayed in cart page with exact quantity
    viewCart.validateQuantity(4);
  });
});

describe("Test Case 14: Place Order: Register while Checkout", () => {
  it("Place order", () => {
    // 4. Add products to cart
    productPage.addProductToCart(2);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(4);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(14);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(18);
    productPage.productConfirmationCart("Continue Shopping");
    // 5. Click 'Cart' button
    Navbar.cartPage();
    // 6. Verify that cart page is displayed
    cy.ccContainsVisible("Shopping Cart");
    // 7. Click Proceed To Checkout
    viewCart.proceedToCheckout();
    // 8. Click 'Register / Login' button
    viewCart.modalCheckoutToRegister();
    // 9. Fill all details in Signup and create account
    singup.enterNameEmailNewRegister(name, email);
    singup.buttonSingup();
    singup.accountDetails(password, day, month, year);
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
    // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    singup.accountCreateConfirm();
    singup.continueButton();
    // 11. Verify ' Logged in as username' at top
    Navbar.loggedValidate(name);
    // 12.Click 'Cart' button
    Navbar.cartPage();
    // 13. Click 'Proceed To Checkout' button
    cy.ccContainsClick("Proceed To Checkout");
    // 14. Verify Address Details and Review Your Order
    payment.productDetail();
    // 15. Enter description in comment text area and click 'Place Order'
    payment.enterDescription();
    cy.ccContainsClick("Place Order");
    // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    payment.paymentCard();
    // 17. Click 'Pay and Confirm Order' button
    cy.ccGetClick('[data-qa="pay-button"]');
    // 18. Verify success message 'Your order has been placed successfully!'
    cy.ccContainsVisible("Order Placed!");
    // 19. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    mainPage.accountDeleted();
  });
});
