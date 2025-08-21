const BasePage = require('./BasePage');

class StartPlanningFromEventTab extends BasePage {
  constructor(page) {
    super(page);
    this.planEventBtn = 'xpath=//button[contains(text(), "Plan an event")]';
  }

  async startPlanning() {
    await this.waitForVisible(this.planEventBtn);
    await this.page.locator(this.planEventBtn).scrollIntoViewIfNeeded();
    await this.click(this.planEventBtn);
  }
}

module.exports = StartPlanningFromEventTab;