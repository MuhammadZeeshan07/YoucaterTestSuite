const { test } = require('@playwright/test');
const { CancelEventPage } = require('../pages/EventCancelPage');

const URL = 'https://dev.youcater.me/en/';

test('Cancel Event', async ({ page }) => {
  const cancelEventPage = new CancelEventPage(page);
  await cancelEventPage.cancelEvent();
});
