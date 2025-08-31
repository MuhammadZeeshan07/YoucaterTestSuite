const BasePage = require('./BasePage');
const QuoteFormPage = require('./QuoteFormPage');
class AcceptDirectRequestPage extends BasePage {
  constructor(page) {
    super(page);
    this.quoteFormPage = new QuoteFormPage(page);
    this.activeEventsTab = 'xpath=//span[contains(text(),"Active Events")]';
    this.consumerTab = 'xpath=//span[contains(text(),"Consumer")]';
    this.userDirectRequestTab = 'xpath=//span[contains(text(),"User Direct Request")]';
    this.firstRow = "//div[contains(@class,'MuiDataGrid-virtualScrollerRenderZone')]/div[@data-rowindex='0']";
    this.acceptRequestBtn = 'xpath=//button[contains(text(),"Accept Request")]';
    this.myQuoteTab = 'xpath=//button[@aria-label="My Quote"]';
    this.addNewQuoteBtn = 'xpath=//button[text()="Add new quote"]';
    // this.quoteAmountInput = '#quoteAmount';
    // this.fileInput = 'xpath=//input[@type="file"]';
    // this.attachQuoteBtn = 'xpath=//*[contains(@class,"attachQuoteBtn")]';
    // this.notApplicableBtn = 'xpath=//button[text()="Not applicable"]';
    // this.notVatRegisteredBtn = "xpath=//button[text()=\"I’m not VAT registered\"]";
    // this.additionalCommentsInput = '#additionalComments';
    // this.submitQuoteBtn = 'xpath=//button[text()="Submit quote"]';
    this.goToChat = 'xpath=//button[contains(text(),"Go to chat")]';
    this.sendMessage = '#sendbird-message-input-text-field';


  }

  async acceptAndSubmitQuote() {
    // await this.waitForVisible(this.activeEventsTab);
    // await this.click(this.activeEventsTab);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.userDirectRequestTab);
    await this.click(this.userDirectRequestTab);
    await this.page.waitForTimeout(3000);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.firstRow);
    await this.click(this.firstRow);
    await this.page.waitForTimeout(2000);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.acceptRequestBtn);
    await this.click(this.acceptRequestBtn);
    await this.page.waitForTimeout(5000);

    await this.page.waitForTimeout(2000);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.myQuoteTab);
    await this.click(this.myQuoteTab);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.myQuoteTab);
    await this.click(this.myQuoteTab);

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.addNewQuoteBtn);
    await this.click(this.addNewQuoteBtn);

    // await this.waitForVisible(this.quoteAmountInput);
    // await this.waitForVisible(this.quoteAmountInput);
    // await this.fill(this.quoteAmountInput, amount);

    // await this.waitForVisible(this.attachQuoteBtn);
    // await this.waitForVisible(this.fileInput);
    // await this.page.setInputFiles(this.fileInput, filePath);
    // await this.page.waitForTimeout(2000);

    // await this.page.evaluate(() => {
    //   document.querySelector('div.modalBody')?.scrollBy(0, 300);
    // });

    // await this.waitForVisible(this.notApplicableBtn);
    // await this.click(this.notApplicableBtn);

    // await this.waitForVisible(this.notVatRegisteredBtn);
    // await this.click(this.notVatRegisteredBtn);

    // await this.waitForVisible(this.additionalCommentsInput);
    // await this.fill(this.additionalCommentsInput, comments);

    // await this.page.waitForTimeout(2000);
    // await this.waitForVisible(this.submitQuoteBtn);
    // await this.click(this.submitQuoteBtn);

    await this.completeQuoteFlow();
    

    await this.page.waitForTimeout(2000);
    await this.waitForVisible(this.goToChat);
    await this.click(this.goToChat);

  }


  async completeQuoteFlow() {
    const path = require('path');
    const filePath = path.resolve(__dirname, '../utils/Sample.pdf');
    await this.quoteFormPage.submitQuote({
      amount: '12000',
      filePath,
      comments: 'This is an automated quote submission.'
    });
  }


}



module.exports = AcceptDirectRequestPage;
