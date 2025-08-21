const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const StratPlanningFromHomePage = require('../pages/StratPlanningFromHomePage');
const testData = require('../utils/testData');

test.describe('Start Planning Flow', () => {
  test('User should be able to create an event successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const eventPage = new StratPlanningFromHomePage(page);

    await loginPage.navigate(testData.URL);
    await loginPage.login(testData.EMAIL, testData.PASSWORD);
    await eventPage.createEvent();
 });
});
