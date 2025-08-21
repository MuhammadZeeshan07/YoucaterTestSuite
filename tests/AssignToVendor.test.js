const { test, expect } = require('@playwright/test');
const AssignToVendorPage = require('../pages/AssignToVendorPage');

test.describe('Assign Event to the Vendor', () => {
  test('Assign event to vendor', async ({ page }) => {
    await page.goto('https://admin.youcater.me/dashboard');

    const assignToVendorPage = new AssignToVendorPage(page);
    await assignToVendorPage.assignEventToVendor();

  });
});
