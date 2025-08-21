const BasePage = require('./BasePage');

class VendorRequestPage extends BasePage {
  constructor(page) {
    super(page);
    this.findPartners = 'xpath=//a[contains(text(), "Find partners")]';
    this.searchVendorInput = 'xpath=//input[@placeholder="Search Vendor" and @type="search"]';
    this.vendorLink = 'xpath=//a[@href="/en/event-caterers/varak/"]';
    this.sendRequestStrong = 'xpath=//strong[contains(text(),"Send request")]';
    this.partnerEventCard = 'xpath=//div[contains(@class,"sharePartnerEventsList")]//a[contains(@class,"simpleEventCard")][1]';
    this.sendRequestBtn = 'xpath=//button[contains(text(),"Send request")]';
    this.myDashboard = 'text=My dashboard';
  }

  async sendDirectRequestFlow() {
    await this.waitForVisible(this.findPartners);
    await this.page.locator(this.findPartners).scrollIntoViewIfNeeded();
    await this.click(this.findPartners);
    await this.fill(this.searchVendorInput, 'ambala');
    await this.click(this.vendorLink);
    await this.click(this.sendRequestStrong);
    await page.locator('(//div[contains(@class,"sharePartnerEventsList")]//a[contains(@class,"simpleEventCard")])[1]').click();
    await this.waitForVisible(this.sendRequestBtn);
    await page.locator(this.sendRequestBtn).scrollIntoViewIfNeeded();
    await this.click(this.sendRequestBtn);
    await this.click(this.myDashboard);
  }
}

module.exports = VendorRequestPage;
