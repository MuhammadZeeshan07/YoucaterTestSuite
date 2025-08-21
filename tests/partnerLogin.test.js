const { test, expect } = require('@playwright/test');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');

const { url, email, password } = testData.PARTNER;

test('Partner app login', async ({ page }) => {
  await page.goto(url);
  const loginPage = new PartnerLoginPage(page);
  await loginPage.login(email, password);
});
