// tests/create-event.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const EventCreationPage = require('../pages/EventCreationPage');
const testData = require('../utils/testData');

test.describe('Event Creation Flow', () => {
  test('User should be able to create an event successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const eventPage = new EventCreationPage(page);

    await loginPage.navigate(testData.URL);
    await loginPage.login(testData.EMAIL, testData.PASSWORD);
    await eventPage.createEvent();

    // Assertion: Back to home button or event confirmation
    await expect(page.locator('text=Back to home')).toBeVisible();
  });
});
