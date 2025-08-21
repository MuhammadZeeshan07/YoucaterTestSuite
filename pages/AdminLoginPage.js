const BasePage = require('./BasePage');

class AdminLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.continueBtn = "xpath=//button[contains(text(),'Continue')]";
  }

  async login(email, password) {
    await this.waitForVisible(this.emailInput);
    await this.page.locator(this.emailInput).scrollIntoViewIfNeeded();
    await this.fill(this.emailInput, email);
    await this.waitForVisible(this.passwordInput);
    await this.page.locator(this.passwordInput).scrollIntoViewIfNeeded();
    await this.fill(this.passwordInput, password);
    await this.waitForVisible(this.continueBtn);
    await this.page.locator(this.continueBtn).scrollIntoViewIfNeeded();
    await this.click(this.continueBtn);
  }
}

module.exports = AdminLoginPage;
