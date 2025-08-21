const BasePage = require('./BasePage');

class StratPlanningFromHomePage extends BasePage {
  constructor(page) {
    super(page);
    this.startPlanningButton = 'xpath=//button[contains(@aria-label,"Start planning")]';
  }

  async createEvent() {
    await this.waitForVisible(this.startPlanningButton);
    await this.page.locator(this.startPlanningButton).scrollIntoViewIfNeeded();
    await this.click(this.startPlanningButton);
    
  }
}

module.exports = StratPlanningFromHomePage;
