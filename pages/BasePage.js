const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, value) {
    await this.page.locator(selector).fill(value);
  }

  async waitForVisible(selector, options = {}) {
    await this.page.locator(selector).waitFor({ state: 'visible', ...options });
  }

  async assertText(selector, expected) {
    await expect(this.page.locator(selector)).toHaveText(expected);
  }
}

module.exports = BasePage;
