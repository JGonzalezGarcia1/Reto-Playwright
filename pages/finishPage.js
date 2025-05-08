class FinishPage {
    constructor(page) {
      this.page = page;
      this.confirmation = page.locator('.complete-header');
    }
  }
  module.exports = { FinishPage };