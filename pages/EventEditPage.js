const BasePage = require('./BasePage');
class EventEditPage extends BasePage {
  constructor(page) {
    super(page);
    this.viewDetails = 'xpath=//a[contains(text(),"View details")]';
    this.chatCircleBtn = 'xpath=//button[contains(@class,"chatCircleBtn")]';
    this.editBtn = '#editBtn';
    this.eventNameEditInput = 'xpath=//input[contains(@placeholder,"Enter Event name")]';
    this.confirmNameBtn = 'xpath=//button[contains(@class,"h-[35px]")]';
  }
  async viewDetailsAndEditName() {
  await this.waitForVisible(this.viewDetails);
  await this.page.locator(this.viewDetails).scrollIntoViewIfNeeded();
  await this.click(this.viewDetails);
  await this.waitForVisible(this.chatCircleBtn);
  await this.page.locator(this.chatCircleBtn).scrollIntoViewIfNeeded();
  await this.click(this.chatCircleBtn);
  await this.waitForVisible(this.editBtn);
  await this.click(this.editBtn);
  await this.waitForVisible(this.eventNameEditInput);
  await this.fill(this.eventNameEditInput, 'Test event uat');
  await this.page.locator('(//button[contains(@class,"h-[35px]")])[1]').click();
  await this.page.waitForTimeout(1000);
  await this.page.goBack();
  await this.page.waitForTimeout(1000);
  }
}
module.exports = EventEditPage;