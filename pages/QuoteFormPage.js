const { expect } = require('@playwright/test');
const path = require('path');
const filePath = path.resolve(__dirname, '../utils/TestImage.jpg');

class QuoteFormPage {
  constructor(page) {
    this.page = page;

    this.quoteAmountInput = '#quoteAmount';
    this.fileInput = 'xpath=//*[contains(@class,"attachQuoteBtn")]//input[@type="file"]';
    this.attachQuoteBtn = 'xpath=//*[contains(@class,"attachQuoteBtn")]';
    this.notApplicableBtn = 'xpath=//button[text()="Not applicable"]';
    this.notVatRegisteredBtn = 'xpath=//button[contains(text(),"m not VAT registered")]';
    this.additionalCommentsInput = '#additionalComments';
    this.nextBtn = 'xpath=//button[contains(@class,"quoteFormFooterBtn") and contains(text(),"Next")]';
    this.selectCategoryBtn = 'xpath=//*[contains(@class,"categoriesContainer")]/div[1]';
    this.menuInfoSection = 'xpath=//*[contains(@class,"menuInfoSection")]//*[contains(@class,"richTextEditorContainer")]/div[@role="textbox"]';
    this.menuOptions = 'xpath=//*[contains(@class,"menuInfoSection ")]//*[contains(@class,"richTextToolbar")]/button';
    this.uploadMenuAttachments = 'xpath=//*[contains(@class,"menuInfoSection ")]//div[contains(@class,"menuAttachmentsWrapper")]';
    this.servicesInfoSection = 'xpath=//*[contains(@class,"servicesInfoSection")]//*[contains(@class,"richTextEditorContainer")]/div[@role="textbox"]';
    this.servicesOptions = 'xpath=//*[contains(@class,"servicesInfoSection")]//*[contains(@class,"richTextToolbar")]/button';
    this.uploadServicesAttachments = 'xpath=//*[contains(@class,"servicesInfoSection")]//div[contains(@class,"menuAttachmentsWrapper")]';
    this.collapseBtn = 'xpath=//*[contains(@class,"menuInfoSection")]//*[contains(@class,"sectionHeaderRightText") and  contains(text(), "Collapse")]';
    this.expandBtn = 'xpath=//*[contains(@class,"menuInfoSection")]//*[contains(@class,"sectionHeaderRightText") and  contains(text(), "Expand")]';
    this.editCategoryNameBtn = 'xpath=//*[contains(@class,"categoryHeader")]//*[contains(@class,"editIcon")]';
    this.previewQuoteBtn = 'xpath=//*[contains(@class,"quoteFormFooterBtn") and text()="Preview"]';
    this.submitQuoteBtn = 'xpath=//button[contains(@class,"quoteFormFooterBtn") and text()="Submit"]';
    this.confirmationModal = 'xpath=//button[contains(text(),"Confirm")]';

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

  async submitQuote({ amount }) {
    await this.waitForVisible(this.quoteAmountInput);
    await this.fill(this.quoteAmountInput, amount);

    await this.page.evaluate(() => {
      document.querySelector('div.modalBody')?.scrollBy(0, 300);
    });

    await this.waitForVisible(this.notApplicableBtn);
    await this.click(this.notApplicableBtn);

    await this.waitForVisible(this.notVatRegisteredBtn);
    await this.click(this.notVatRegisteredBtn);

    // await this.waitForVisible(this.additionalCommentsInput);
    // await this.fill(this.additionalCommentsInput, comments);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.nextBtn);
    await this.click(this.nextBtn);

    await this.waitForVisible(this.selectCategoryBtn);
    await this.click(this.selectCategoryBtn);

    const menuInfoSection = this.page.locator('//*[contains(@class,"menuInfoSection ")]');
    const servicesInfoSection = this.page.locator('(//*[contains(@class,"servicesInfoSection")])[1]');

    await expect(menuInfoSection).toBeVisible();
    await expect(servicesInfoSection).toBeVisible();

    await fillAndApplyStyles.call(this, this.menuInfoSection, this.menuOptions, 'This is an automated menu information entry.');
    await this.page.waitForTimeout(1000);
    await fillAndApplyStyles.call(this, this.servicesInfoSection, this.servicesOptions, 'This is an automated services information entry.');
    await this.page.waitForTimeout(1000);
    await uploadAttachment.call(this, this.uploadMenuAttachments, filePath);
    await uploadAttachment.call(this, this.uploadServicesAttachments, filePath);


    await this.page.waitForTimeout(1000);
    await this.waitForVisible(this.collapseBtn);
    await this.click(this.collapseBtn);

    await this.waitForVisible(this.expandBtn);
    await expect(this.page.locator(this.expandBtn)).toBeVisible();

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.submitQuoteBtn);
    await this.click(this.submitQuoteBtn);

    
    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.confirmationModal);
    await this.click(this.confirmationModal);


  }



}

async function fillAndApplyStyles(sectionSelector, buttonsSelector, textToEnter) {
  await this.page.waitForTimeout(1000);
  await this.waitForVisible(sectionSelector);
  await this.fill(sectionSelector, textToEnter);

  await this.page.locator(sectionSelector).click();
  await this.page.keyboard.press('Control+A');

  const buttons = this.page.locator(buttonsSelector);
  const count = await buttons.count();

  for (let i = 0; i < count; i++) {
    await buttons.nth(i).click();
    await this.page.waitForTimeout(300);
  }

}

async function uploadAttachment(uploadBtnSelector, filePath) {
  await this.waitForVisible(uploadBtnSelector);

  const fileInputLocator = this.page.locator(`${uploadBtnSelector}/input[@type="file"]`);
  await fileInputLocator.waitFor({ state: 'visible' });
  await fileInputLocator.setInputFiles(filePath);

  await this.page.waitForTimeout(2000);
}





module.exports = QuoteFormPage;
