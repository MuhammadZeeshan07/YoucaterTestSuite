// tests/vendor-request.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const VendorRequestPage = require('../pages/VendorRequestPage');
const testData = require('../utils/testData');

test.describe('Send Direct Vendor Request', () => {
  test('User should be able to send a direct request to a vendor', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const vendorRequestPage = new VendorRequestPage(page);

    await loginPage.navigate(testData.URL);
    await loginPage.login(testData.EMAIL, testData.PASSWORD);
    await vendorRequestPage.sendDirectRequestFlow();

 });
});
