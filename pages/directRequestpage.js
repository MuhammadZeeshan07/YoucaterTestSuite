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
  await this.page.waitForTimeout(2000);
  await this.waitForVisible(this.findPartners);
  await this.click(this.findPartners);
  await this.page.waitForTimeout(2000);
  await this.waitForVisible(this.searchVendorInput);
  await this.fill(this.searchVendorInput, 'varak');
  await this.waitForVisible(this.vendorLink);
  await this.click(this.vendorLink);
  await this.waitForVisible(this.sendRequestStrong);
  await this.click(this.sendRequestStrong);
  await this.page.waitForTimeout(2000);
  await this.waitForVisible(this.partnerEventCard);
  await this.page.locator('(//div[contains(@class,"sharePartnerEventsList")]//a[contains(@class,"simpleEventCard")])[1]').click();
  await this.page.waitForTimeout(2000);
  await this.waitForVisible(this.sendRequestBtn);
  await this.click(this.sendRequestBtn);
  await this.page.waitForTimeout(2000);
  await this.waitForVisible(this.myDashboard);
  await this.click(this.myDashboard);
  await this.page.waitForTimeout(2000);
  }
}

module.exports = VendorRequestPage;
