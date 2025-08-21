const { test } = require('@playwright/test');
const { MainPage } = require('../pages/BasePage');

const URL = 'https://dev.youcater.me/en/';

test('Start Planning from Event Tab', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.startPlanningFromEventTab();
  // Add assertion for navigation or visible element
});
