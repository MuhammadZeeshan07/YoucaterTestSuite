class QuoteFormPage {
  constructor(page) {
    this.page = page;
    
    this.quoteAmountInput = '#quoteAmount';
    this.fileInput = 'xpath=//*[contains(@class,"attachQuoteBtn")]//input[@type="file"]';
    this.attachQuoteBtn = 'xpath=//*[contains(@class,"attachQuoteBtn")]';
    this.notApplicableBtn = 'xpath=//button[text()="Not applicable"]';
    this.notVatRegisteredBtn = 'xpath=//button[text()="I’m not VAT registered"]';
    this.additionalCommentsInput = '#additionalComments';
    this.submitQuoteBtn = 'xpath=//button[text()="Submit quote"]';
  }

  async waitForVisible(selector) {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, value) {
    await this.page.locator(selector).fill(value);
  }

  async submitQuote({ amount, filePath, comments }) {
    await this.waitForVisible(this.quoteAmountInput);
    await this.fill(this.quoteAmountInput, amount);

    await this.waitForVisible(this.attachQuoteBtn);
    // Use robust file input selector and check visibility
    await this.waitForVisible(this.fileInput);
    const fileInputLocator = this.page.locator(this.fileInput);
    await fileInputLocator.setInputFiles(filePath);
    await this.page.waitForTimeout(2000);

    await this.page.evaluate(() => {
      document.querySelector('div.modalBody')?.scrollBy(0, 300);
    });

    await this.waitForVisible(this.notApplicableBtn);
    await this.click(this.notApplicableBtn);

    await this.waitForVisible(this.notVatRegisteredBtn);
    await this.click(this.notVatRegisteredBtn);

    await this.waitForVisible(this.additionalCommentsInput);
    await this.fill(this.additionalCommentsInput, comments);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.submitQuoteBtn);
    await this.click(this.submitQuoteBtn);
  }
}

module.exports = QuoteFormPage;
