const BasePage = require('./BasePage');

class EventCreationWithoutSubmissionPage extends BasePage {
  constructor(page) {
    super(page);
    this.eventTab = 'xpath=//a[@href="/en/events" and contains(text(),"Event")]';
    this.planEventBtn = 'xpath=//button[contains(text(), "Plan an event")]';
    this.experienceOption = 'xpath=//*[contains(text(),"Help me find an experience")]';
    this.privateEventOption = 'xpath=//span[contains(text(),"Private event")]';
    this.plusButton = 'xpath=//*[contains(@id,"Plus")]';
    this.counterInput = 'xpath=//input[contains(@class,"inputCounter")]';
    this.datePicker = '#event-date-picker';
    this.firstEnabledDate = '.react-datepicker__day:not(.react-datepicker__day--disabled):not(.react-datepicker__day--outside-month)';
    this.labelOption = 'xpath=//*[contains(@id,"label-5")]';
    this.privateChefs = 'xpath=//*[@alt="Private Chefs"]';
    this.platedMeal = 'xpath=//*[text()="Plated Meal"]';
    this.cuisineAmerican = 'xpath=//*[text()="American"]';
    this.cuisineAsian = 'xpath=//*[text()="Asian"]';
    this.courseMains = 'xpath=//*[text()="Mains"]';
    this.courseStarters = 'xpath=//*[text()="Starters"]';
    this.nextButton = 'xpath=//button[contains(text(),"Next")]';
    this.viewTopMatches = 'xpath=//button[contains(text(),"View top matches")]';
    this.backToHome = 'text=Back to home';
}

  async createEvent() {

  await this.waitForVisible(this.eventTab);
  await this.click(this.eventTab);
  await this.waitForVisible(this.planEventBtn);
  await this.page.locator(this.planEventBtn).scrollIntoViewIfNeeded();
  await this.waitForVisible(this.planEventBtn);
  await this.click(this.planEventBtn);
  await this.waitForVisible(this.experienceOption);
  await this.page.locator(this.experienceOption).scrollIntoViewIfNeeded();
  await this.waitForVisible(this.experienceOption);
  await this.click(this.experienceOption);
  await this.waitForVisible(this.privateEventOption);
  await this.click(this.privateEventOption);
  await this.waitForVisible(this.plusButton);
  await this.click(this.plusButton);
  await this.waitForVisible(this.counterInput);
  await this.fill(this.counterInput, '16');
  await this.waitForVisible(this.datePicker);
  await this.click(this.datePicker);
  const firstDate = this.page.locator(this.firstEnabledDate).first();
  await firstDate.waitFor({ state: 'visible' });
  await firstDate.click();
  await this.waitForVisible(this.labelOption);
  await this.click(this.labelOption);
  await this.waitForVisible(this.privateChefs);
  await this.click(this.privateChefs);
  await this.waitForVisible(this.platedMeal);
  await this.click(this.platedMeal);
  await this.waitForVisible(this.nextButton);
  await this.click(this.nextButton);
  await this.waitForVisible(this.cuisineAmerican);
  await this.click(this.cuisineAmerican);
  await this.waitForVisible(this.cuisineAsian);
  await this.click(this.cuisineAsian);
  await this.waitForVisible(this.nextButton);
  await this.click(this.nextButton);
  await this.waitForVisible(this.courseMains);
  await this.click(this.courseMains);
  await this.waitForVisible(this.courseStarters);
  await this.click(this.courseStarters);
  await this.waitForVisible(this.nextButton);
  await this.click(this.nextButton);
  await this.waitForVisible('xpath=//*[text()="Dubai"]');
  await this.click('xpath=//*[text()="Dubai"]');
  await this.waitForVisible('xpath=//*[text()="Essential"]');
  await this.click('xpath=//*[text()="Essential"]');
  await this.waitForVisible(this.nextButton);
  await this.click(this.nextButton);
  await this.waitForVisible(this.viewTopMatches);
  await this.click(this.viewTopMatches);
  await this.waitForVisible(this.backToHome);
  await this.click(this.backToHome);
  
  }
}

module.exports = EventCreationWithoutSubmissionPage;
