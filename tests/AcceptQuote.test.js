// tests/AcceptQuote.test.js
const { test } = require('@playwright/test');
const AcceptQuotePage = require('../pages/AcceptQuote');
const testData = require('../utils/testData');

test.describe('Quote Acceptance Flow', () => {
  test('Accept quote and complete payment', async ({ page }) => {
    const acceptQuote = new AcceptQuotePage(page);
    await acceptQuote.acceptAndPayCard();

  });
});
