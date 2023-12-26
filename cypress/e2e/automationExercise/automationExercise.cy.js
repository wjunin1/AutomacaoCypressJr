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
  reviewBlusa,
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

describe("Test Case 15: Place Order: Register before Checkout", () => {
  it("Register before checkout", () => {
    // 4. Click 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Fill all details in Signup and create account
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
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    singup.accountCreateConfirm();
    singup.continueButton();
    // 7. Verify ' Logged in as username' at top
    Navbar.loggedValidate(name);
    // 8. Add products to cart
    productPage.addProductToCart(2);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(4);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(14);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(18);
    productPage.productConfirmationCart("Continue Shopping");
    // 9. Click 'Cart' button
    Navbar.cartPage();
    // 10. Verify that cart page is displayed
    cy.ccContainsVisible("Shopping Cart");
    // 11. Click Proceed To Checkout
    cy.ccContainsClick("Proceed To Checkout");
    // 12. Verify Address Details and Review Your Order
    payment.productDetail();
    // 13. Enter description in comment text area and click 'Place Order'
    payment.enterDescription();
    cy.ccContainsClick("Place Order");
    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    payment.paymentCard();
    // 15. Click 'Pay and Confirm Order' button
    cy.ccGetClick('[data-qa="pay-button"]');
    // 16. Verify success message 'Your order has been placed successfully!'
    cy.ccContainsVisible("Order Placed!");
    // 17. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    mainPage.accountDeleted();
  });
});

describe("Test Case 16: Place Order: Login before Checkout", () => {
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
  it("Login before checkout", () => {
    // 4. Click 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Fill email, password and click 'Login' button
    singup.loginAccess(email, password);
    singup.buttonLogin();
    // 6. Verify 'Logged in as username' at top
    Navbar.loggedValidate(name);
    // 7. Add products to cart
    productPage.addProductToCart(2);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(4);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(14);
    productPage.productConfirmationCart("Continue Shopping");
    productPage.addProductToCart(18);
    productPage.productConfirmationCart("Continue Shopping");
    // 8. Click 'Cart' button
    Navbar.cartPage();
    // 9. Verify that cart page is displayed
    cy.ccContainsVisible("Shopping Cart");
    // 10. Click Proceed To Checkout
    cy.ccContainsClick("Proceed To Checkout");
    // 11. Verify Address Details and Review Your Order
    payment.productDetail();
    // 12. Enter description in comment text area and click 'Place Order'
    payment.enterDescription();
    cy.ccContainsClick("Place Order");
    // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    payment.paymentCard();
    // 14. Click 'Pay and Confirm Order' button
    cy.ccGetClick('[data-qa="pay-button"]');
    // 15. Verify success message 'Your order has been placed successfully!'
    cy.ccContainsVisible("Order Placed!");
    // 16. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    mainPage.accountDeleted();
  });
});

describe("Test Case 17: Remove Products From Cart", () => {
  it("Remove products from cart", () => {
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
    // 7. Click 'X' button corresponding to particular product
    productPage.removeCart();
    // 8. Verify that product is removed from the cart
    cy.contains("Men Tshirt").should("not.exist");
  });
});

describe("Test Case 18: View Category Products", () => {
  it("View Category products", () => {
    // 4. Click on 'Women' category
    mainPage.womenCategory();
    // 5. Click on any category link under 'Women' category, for example: Dress
    mainPage.womenSubCategory();
    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.ccContainsVisible("Women - Dress Products");
    // 7. On left side bar, click on any sub-category link of 'Men' category
    mainPage.menCategory();
    mainPage.menSubCategory();
    // 8. Verify that user is navigated to that category page
    cy.ccContainsVisible("Men - Jeans Products");
  });
});

describe("Test Case 19: View & Cart Brand Products", () => {
  it("View & Cart Brand Products", () => {
    // 3. Click on 'Products' button
    Navbar.productPage();
    // 4. Verify that Brands are visible on left side bar
    cy.ccGetVisible(".brands_products");
    // 5. Click on any brand name
    cy.ccContainsClick("Babyhug");
    // 6. Verify that user is navigated to brand page and brand products are displayed
    productPage.checkBrandBabyhugProductsVisible();
    // 7. On left side bar, click on any other brand link
    cy.ccContainsClick("Biba");
    // 8. Verify that user is navigated to that brand page and can see products
    productPage.checkBrandBibaProductsVisible();
  });
});

describe("Test Case 20: Search Products and Verify Cart After Login", () => {
  it("Search Products and Verify Cart After Login", () => {
    // 3. Click on 'Products' button
    Navbar.productPage();
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.ccContainsVisible("All Products");
    // 5. Enter product name in search input and click search button
    productPage.productSearch("Winter Top");
    // 7. Verify all the products related to search are visible
    productPage.productSearchVisible("Winter Top");
    // 8. Add those products to cart
    productPage.addProductToCart(0);
    productPage.productConfirmationCart("Continue Shopping");
    // 9. Click 'Cart' button and verify that products are visible in cart
    Navbar.cartPage();
    cy.ccContainsVisible("Winter Top");
    // 10. Click 'Signup / Login' button and submit login details
    Navbar.singupLogin();
    singup.loginAccess(email, password);
    singup.buttonLogin();
    // 11. Again, go to Cart page
    Navbar.cartPage();
    // 12. Verify that those products are visible in cart after login as well
    cy.ccContainsVisible("Winter Top");
  });
});

describe("Test Case 21: Add review on product", () => {
  it("Add review on product", () => {
    // 3. Click on 'Products' button
    Navbar.productPage();
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.ccContainsVisible("All Products");
    // 5. Click on 'View Product' button
    productPage.productListClick(0);
    // 6. Verify 'Write Your Review' is visible
    cy.get('a[href="#reviews"]')
      .contains("Write Your Review")
      .should("be.visible");
    // 7. Enter name, email and review
    cy.get("#name").type(nomefixo);
    cy.get("#email").type(emailfixo);
    cy.get("#review").type(reviewBlusa);
    // 8. Click 'Submit' button
    cy.ccGetClick("#button-review");
    // 9. Verify success message 'Thank you for your review.'
    cy.ccContainsVisible("Thank you for your review.");
  });
});

describe("Test Case 22: Add to cart from Recommended items", () => {
  it("Add to cart from Recommended items", () => {
    // 3. Scroll to bottom of page
    cy.scrollTo("bottom");
    // 4. Verify 'RECOMMENDED ITEMS' are visible
    cy.get(".recommended_items").should("be.visible");
    // 5. Click on 'Add To Cart' on Recommended product
    cy.get(
      ".active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn"
    ).click();
    // 6. Click on 'View Cart' button
    productPage.productConfirmationCart("View Cart");
    // 7. Verify that product is displayed in cart page
    cy.get(".cart_price > p").should("not.be.empty");
  });
});

describe("Test Case 23: Verify address details in checkout page", () => {
  it("Verify address details in checkout page", () => {
    // 4. Click 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Fill all details in Signup and create account
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
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    singup.accountCreateConfirm();
    singup.continueButton();
    // 7. Verify ' Logged in as username' at top
    Navbar.loggedValidate(name);
    // 8. Add products to cart
    Navbar.productPage();
    productPage.addProductToCart(2);
    productPage.productConfirmationCart("Continue Shopping");
    // 9. Click 'Cart' button
    Navbar.cartPage();
    // 10. Verify that cart page is displayed
    cy.ccContainsVisible("Shopping Cart");
    // 11. Click Proceed To Checkout
    viewCart.proceedToCheckout();
    // 12. Verify that the delivery address is same address filled at the time registration of account
    cy.get("#address_delivery").contains(address1).should("be.visible");
    cy.get("#address_delivery").contains(address2).should("be.visible");
    cy.get("#address_delivery").contains(country).should("be.visible");
    cy.get("#address_delivery").contains(state).should("be.visible");
    cy.get("#address_delivery").contains(city).should("be.visible");
    cy.get("#address_delivery").contains(zipcode).should("be.visible");
    cy.get("#address_delivery").contains(mobileNumber).should("be.visible");
    // 13. Verify that the billing address is same address filled at the time registration of account
    cy.get("#address_invoice").contains(address1).should("be.visible");
    cy.get("#address_invoice").contains(address2).should("be.visible");
    cy.get("#address_invoice").contains(country).should("be.visible");
    cy.get("#address_invoice").contains(state).should("be.visible");
    cy.get("#address_invoice").contains(city).should("be.visible");
    cy.get("#address_invoice").contains(zipcode).should("be.visible");
    cy.get("#address_invoice").contains(mobileNumber).should("be.visible");
    // 14. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    mainPage.accountDeleted();
  });
});

describe("Test Case 24: Download Invoice after purchase order", () => {
  it("Download Invoice after purchase order", () => {
    // 4. Add products to cart
    Navbar.productPage();
    productPage.addProductToCart(2);
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
    viewCart.proceedToCheckout();
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
    // 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
    cy.ccContainsClick("Download Invoice");
    cy.wait(3000);
    const filePath = "cypress/downloads/invoice.txt";
    cy.readFile(filePath).then((fileContent) => {
      // Verifica se o conteúdo do arquivo é válido, se necessário
      // assert your expectations on the file content here if needed
      expect(fileContent).to.exist;
    });
    // 20. Click 'Continue' button
    singup.continueButton();
    // 21. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    mainPage.accountDeleted();
  });
});

describe("Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality", () => {
  it("Verify Scroll Up using Arrow button and Scroll Down functionality", () => {
    // 4. Scroll down page to bottom
    mainPage.scrollRoll("bottom");
    // 5. Verify 'SUBSCRIPTION' is visible
    cy.ccContainsVisible("Subscription");
    // 6. Click on arrow at bottom right side to move upward
    cy.ccGetClick("#scrollUp");
    // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    cy.ccContainsVisible(
      "Full-Fledged practice website for Automation Engineers"
    );
  });
});
