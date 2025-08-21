const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.initialLoginLink = 'xpath=//a[contains(text(),"Log in")]';
    this.loginBtn = '#loginBtn';
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.sendOtpBtn = '#sendOtpContinueBtn';
  }

  async login(email, password) {
    await this.waitForVisible(this.initialLoginLink);
    await this.page.locator(this.initialLoginLink).scrollIntoViewIfNeeded();
    await this.click(this.initialLoginLink);

    await this.waitForVisible(this.loginBtn);
    await this.page.locator(this.loginBtn).scrollIntoViewIfNeeded();
    await this.click(this.loginBtn);

    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.sendOtpBtn);
  }
}

module.exports = LoginPage;
