const { test } = require('@playwright/test');
const CreateRFPPage = require('../pages/CreateRFPPage');
const testData = require('../utils/testData');

test.describe('RFP Creation Flow', () => {
  test('Create RFP', async ({ page }) => {
    const createRFP = new CreateRFPPage(page);
    await createRFP.createRFPEvent();



  });
});
