const BasePage = require('./BasePage');

class AssignToVendorPage extends BasePage {
  constructor(page) {
    super(page);
    this.b2CMenu = 'xpath=//*[contains(text(),"B2C")]';
    this.activeEvents = 'xpath=(//*[contains(text(),"Active Events")])[1]';
    this.selectEvent = 'xpath=//div[contains(@class,"MuiDataGrid")]/div[@data-rowindex="0"]'
    this.assignEventBtn = 'xpath=//button[contains(text(),"Assign Event To Vendor")]'
    this.searchVendor = '#select_vendors';
    this.selectVendor = 'xpath=(//div[contains(@class,"assign_vendor_list_hold")]/div)[1]';
    this.sendVendor = 'xpath=//button[contains(text(),"Send vendor")]';
  }

  async assignEventToVendor() {

  await this.page.waitForTimeout(5000);
  await this.waitForVisible(this.b2CMenu);
  await this.waitForVisible(this.b2CMenu);
  await this.click(this.b2CMenu);
  await this.page.waitForTimeout(5000);

  await this.waitForVisible(this.activeEvents);
  await this.click(this.activeEvents);

  await this.waitForVisible(this.selectEvent);
  await this.click(this.selectEvent);

  await this.waitForVisible(this.assignEventBtn);
  await this.click(this.assignEventBtn);

  await this.page.waitForTimeout(1000);
  await this.waitForVisible(this.searchVendor);
  await this.click(this.searchVendor);

  await this.page.waitForTimeout(1000);
  await this.waitForVisible(this.searchVendor);
  await this.fill(this.searchVendor, 'Ambala');

  await this.page.waitForTimeout(1000);
  await this.waitForVisible(this.selectVendor);
  await this.click(this.selectVendor);

  await this.waitForVisible(this.sendVendor);
  await this.click(this.sendVendor);
  }
}

module.exports = AssignToVendorPage;
