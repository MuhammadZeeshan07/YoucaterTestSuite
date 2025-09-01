const { test } = require('@playwright/test');
const DeclineRequestAndReopenPage = require('../pages/DeclineRequestAndReopenPage');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');

test('Vendor decline direct request and submits quote', async ({ page }) => {
    const { url, email, password } = testData.PARTNER;
    const loginPage = new PartnerLoginPage(page);
    await loginPage.navigate(url);
    await loginPage.login(email, password);

    const declinePage = new DeclineRequestAndReopenPage(page);
    await declinePage.declineAndReopen();

});
