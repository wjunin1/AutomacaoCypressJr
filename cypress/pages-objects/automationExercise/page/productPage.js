export default class productPage {
  static productListClick(product) {
    cy.contains("View Product").eq(product).click();
  }

  static productDetail() {
    const column = [
      "Blue Top",
      "Category: Women > Tops",
      "Rs. 500",
      " In Stock",
      " New",
      " Polo",
    ];
    column.forEach(function (value) {
      cy.contains(value).should("be.visible");
    });
  }

  static productSearch(productName) {
    cy.get("#search_product").type(productName);
    cy.get("#submit_search").click();
  }

  static productSearchNotVisible() {
    cy.contains("Blue Top").should("not.exist");
  }

  //eq 2 + 2 always
  static addProductToCart(prod) {
    cy.get(".add-to-cart").eq(prod).click();
  }

  static productConfirmationCart(button) {
    cy.contains(button).click();
  }

  static addProductQuantity(qtd) {
    cy.get("#quantity").clear();
    cy.get("#quantity").type(qtd);
  }

  static addToCart() {
    cy.contains("Add to cart").click();
  }

  static removeCart() {
    cy.get("#product-2 > .cart_delete > .cart_quantity_delete").click();
  }

  static checkBrandsVisible() {
    cy.get('[alt="Website for practice"]').should("be.visible");
  }

  static checkBrandBabyhugProductsVisible() {
    const column = [
      "Sleeves Printed Top - White",
      "Half Sleeves Top Schiffli Detailing - Pink",
      "Printed Off Shoulder Top - White",
      "Sleeves Top and Short - Blue & Pink",
    ];
    column.forEach(function (value) {
      cy.contains(value).should("be.visible");
    });
  }
  static checkBrandBibaProductsVisible() {
    const column = [
      "Blue Cotton Indie Mickey Dress",
      "Long Maxi Tulle Fancy Dress Up Outfits -Pink",
      "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi",
      "Cotton Silk Hand Block Print Saree",
      "Rust Red Linen Saree",
    ];
    column.forEach(function (value) {
      cy.contains(value).should("be.visible");
    });
  }
}
