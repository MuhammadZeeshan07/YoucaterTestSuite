// tests/edit-event.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const EventEditPage = require('../pages/EventEditPage');
const testData = require('../utils/testData');

test.describe('Edit Event Details', () => {
  test('User should be able to edit the event name', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const eventEditPage = new EventEditPage(page);

    await loginPage.navigate(testData.URL);
    await loginPage.login(testData.EMAIL, testData.PASSWORD);
    await eventEditPage.viewDetailsAndEditName();
  });
});
