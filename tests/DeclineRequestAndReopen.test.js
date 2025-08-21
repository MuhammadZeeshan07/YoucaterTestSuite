const { test } = require('@playwright/test');
const DeclineRequestAndReopenPage = require('../pages/DeclineRequestAndReopenPage');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');
const path = require('path');

test('Vendor decline direct request and submits quote', async ({ page }) => {
    const { url, email, password } = testData.PARTNER;
    const loginPage = new PartnerLoginPage(page);
    await loginPage.navigate(url);
    await loginPage.login(email, password);

    const declinePage = new DeclineRequestAndReopenPage(page);
    const fileToUpload = 'C:/Zeeshan Data/my desktop data/RobotTestCases/Sample.pdf';
    await declinePage.declineAndReopen(fileToUpload, '1234', 'Test Comments');

});
