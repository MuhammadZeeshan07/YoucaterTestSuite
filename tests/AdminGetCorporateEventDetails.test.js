const { test } = require('@playwright/test');
const AdminGetCorporateEventDetailsPage = require('../pages/AdminGetCorporateEventDetailsPage');
const testData = require('../utils/testData');

test.describe('RFP Detail Flow', () => {
  test('Get RFP and View Details', async ({ page }) => {
    const getEventDetails = new AdminGetCorporateEventDetailsPage(page);
    await getEventDetails.getEventDetails();

  });
});
