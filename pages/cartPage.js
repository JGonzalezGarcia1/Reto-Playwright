class CartPage {
    constructor(page) {
      this.page = page;
      this.items = page.locator('.cart_item');
      this.checkoutButton = page.locator('[data-test="checkout"]');
    }
  
    async goto() {
      await this.page.click('.shopping_cart_link');
    }
  }
  module.exports = { CartPage }; 
  