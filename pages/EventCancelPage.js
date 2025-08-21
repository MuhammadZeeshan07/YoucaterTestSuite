const BasePage = require('./BasePage');

class EventCancelPage extends BasePage {
  constructor(page) {
    super(page);
    this.viewDetails = 'xpath=//a[contains(text(),"View details")]';
    this.cancelEventBtn = 'xpath=//button[contains(text(), "Cancel event")]';
    this.checkboxLabel = 'css=div:nth-of-type(4) > .checkboxLabel';
    this.cancelConfirmBtn = 'xpath=//button[contains(text(), "Cancel Event")]';
    this.backToEvents = 'text=Back to events';
  }

  async cancelEvent() {

    await this.waitForVisible(this.cancelEventBtn);
    await this.click(this.cancelEventBtn);
    await this.waitForVisible(this.checkboxLabel);
    await this.click(this.checkboxLabel);
    await this.waitForVisible(this.cancelConfirmBtn);
    await this.click(this.cancelConfirmBtn);
    await this.waitForVisible(this.cancelConfirmBtn);
    await this.click(this.cancelConfirmBtn);
    await this.waitForVisible(this.backToEvents);
    await this.click(this.backToEvents);
  }
}

module.exports = EventCancelPage;
