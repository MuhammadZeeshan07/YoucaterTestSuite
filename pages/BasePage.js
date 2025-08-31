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
    try {
      await this.page.locator(selector).waitFor({ state: 'visible', ...options });
    } catch (error) {
      if (this.page.isClosed()) {
        throw new Error(`Page was closed while waiting for selector: ${selector}`);
      }
      throw error;
    }
  }
  async assertText(selector, expected) {
    await expect(this.page.locator(selector)).toHaveText(expected);
  }

  async selectDate(inputSelector, daysFromToday) {
    await this.page.locator(inputSelector).scrollIntoViewIfNeeded();
    await this.waitForVisible(inputSelector);
    await this.click(inputSelector);

    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysFromToday);
    const targetDay = targetDate.getDate();
    const targetMonth = targetDate.toLocaleString('default', { month: 'long' });
    const targetYear = targetDate.getFullYear();
    const targetMonthYear = `${targetMonth} ${targetYear}`;

    await this.page.waitForSelector('.react-datepicker');
    while (true) {
      const currentMonthYear = await this.page.locator('.react-datepicker__current-month').innerText();
      if (currentMonthYear === targetMonthYear) break;
      await this.page.locator('.react-datepicker__navigation--next').click();
      await this.page.waitForTimeout(500);
    }

    const daySelector = `.react-datepicker__day--0${targetDay.toString().padStart(2, '0')}:not(.react-datepicker__day--disabled)`;
    await this.page.locator(daySelector).first().click();
  }

  async assertToastMessageVisible(messageText) {
  const toastSelector = `//*[contains(@class,"MuiAlert-message") and contains(text(),"${messageText}")]`;
  await expect(this.page.locator(toastSelector)).toBeVisible({ timeout: 20000 });
}

}
module.exports = BasePage;