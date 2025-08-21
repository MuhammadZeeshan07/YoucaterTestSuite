const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const testData = require('../utils/testData');

test.describe('Login Flow', () => {
  test('User should be able to log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(testData.USER.url);
    await loginPage.login(testData.USER.email, testData.USER.password);
  });
});
