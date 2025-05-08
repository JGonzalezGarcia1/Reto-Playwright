class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstName = page.locator('[data-test="firstName"]');
      this.lastName = page.locator('[data-test="lastName"]');
      this.zip = page.locator('[data-test="postalCode"]');
      this.continueButton = page.locator('[data-test="continue"]');
      this.totalLabel = page.locator('.summary_total_label');
      this.finishButton = page.locator('[data-test="finish"]');
    }
  
    async fillCheckoutInfo(nombre, apellido, zip) {
      await this.firstName.fill(nombre);
      await this.lastName.fill(apellido);
      await this.zip.fill(zip);
      await this.continueButton.click();
    }
  }
  module.exports = { CheckoutPage };