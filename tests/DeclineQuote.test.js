const { test } = require('@playwright/test');
const DeclineQuotePage = require('../pages/DeclineQuotePage');
const testData = require('../utils/testData');

test.describe('Quote Decline Flow', () => {
  test('Decline quote', async ({ page }) => {

    const declineQuote = new DeclineQuotePage(page);
    await declineQuote.declineQuote();

  });
});
