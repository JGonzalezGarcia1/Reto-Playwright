class InventoryPage {
    constructor(page) {
      this.page = page;
      this.items = page.locator('.inventory_item');
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartLink = page.locator('.shopping_cart_link');
    }
  
    async addProductByName(name) {
      await this.page.locator(`.inventory_item:has-text("${name}") button`).click();
    }
  }
  module.exports = { InventoryPage };