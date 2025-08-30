const { test } = require('@playwright/test');
const GetCorporateEventDetailsPage = require('../pages/GetCorporateEventDetailsPage');
const testData = require('../utils/testData');

test.describe('RFP Detail Flow', () => {
  test('Get RFP and View Details', async ({ page }) => {
    const getEventDetails = new GetCorporateEventDetailsPage(page);
    await getEventDetails.getEventDetails();

  });
});
