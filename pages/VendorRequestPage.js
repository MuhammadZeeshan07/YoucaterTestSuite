const BasePage = require('./BasePage');

class VendorRequestPage extends BasePage {
  constructor(page) {
    super(page);
    this.findPartners = 'xpath=//a[contains(text(), "Find partners")]';
    this.findProviders = 'xpath=//a[contains(text(),"Find providers")]';
    this.searchVendorInput = 'xpath=//input[@placeholder="Search Vendor" and @type="search"]';
    this.vendorLink = 'xpath=//a[@href="/en/event-caterers/varak/"]';
    this.sendRequestStrong = 'xpath=//strong[contains(text(),"Send request")]';
    this.partnerEventCard = 'xpath=//div[contains(@class,"sharePartnerEventsList")]//a[contains(@class,"simpleEventCard")][1]';
    this.sendRequestBtn = 'xpath=//button[contains(text(),"Send request")]';
    this.myDashboard = 'text=My dashboard';
  }

  async sendDirectRequestFlow() {

    const partnersLocator = this.page.locator(this.findPartners);
    const providersLocator = this.page.locator(this.findProviders);
    if (await partnersLocator.count() > 0 && await partnersLocator.isVisible()) {
      await partnersLocator.scrollIntoViewIfNeeded();
      await this.waitForVisible(this.findPartners);
      await this.click(this.findPartners);
    } else if (await providersLocator.count() > 0 && await providersLocator.isVisible()) {
      await providersLocator.scrollIntoViewIfNeeded();
      await this.waitForVisible(this.findProviders);
      await this.click(this.findProviders);
      await partnersLocator.scrollIntoViewIfNeeded();
      await this.waitForVisible(this.findPartners);
      await this.click(this.findPartners);
    }
    await this.page.locator(this.searchVendorInput).scrollIntoViewIfNeeded();
    await this.waitForVisible(this.searchVendorInput);
    await this.fill(this.searchVendorInput, 'ambala');
    await this.waitForVisible(this.vendorLink);
    await this.page.locator(this.vendorLink).scrollIntoViewIfNeeded();
    await this.click(this.vendorLink);
    await this.waitForVisible(this.sendRequestStrong);
    await this.page.locator(this.sendRequestStrong).scrollIntoViewIfNeeded();
    await this.click(this.sendRequestStrong);
    await this.waitForVisible(this.partnerEventCard);
    await this.page.locator('(//div[contains(@class,"sharePartnerEventsList")]//a[contains(@class,"simpleEventCard")])[1]').click();
    await this.waitForVisible(this.sendRequestBtn);
    await page.locator(this.sendRequestBtn).scrollIntoViewIfNeeded();
    await this.click(this.sendRequestBtn);
    await this.waitForVisible(this.myDashboard);
    await this.page.locator(this.myDashboard).scrollIntoViewIfNeeded();
    await this.click(this.myDashboard);
  }
}

module.exports = VendorRequestPage;
