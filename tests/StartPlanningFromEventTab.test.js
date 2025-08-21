const { test, expect } = require('@playwright/test');
const StartPlanningFromEventTab = require('../pages/StartPlanningFromEventTab');
const testData = require('../utils/testData');
const LoginPage = require('../pages/LoginPage');

test.describe('Start Planning From Event Tab', () => {
  test('User should be able to start planning from event tab', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(testData.USER.url);
    await loginPage.login(testData.USER.email, testData.USER.password);

    const startPlanning = new StartPlanningFromEventTab(page);
    await startPlanning.startPlanning();
  });
});