const { test } = require('@playwright/test');
const AcceptAIDirectRequestPage = require('../pages/AcceptAIDirectRequestPage');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');
const path = require('path');

test('Vendor accepts ai direct request and submits quote', async ({ page }) => {
    const { url, email, password } = testData.PARTNER;
    const loginPage = new PartnerLoginPage(page);
    await loginPage.navigate(url);
    await loginPage.login(email, password);

    const acceptPage = new AcceptAIDirectRequestPage(page);
    const fileToUpload = 'C:/Zeeshan Data/my desktop data/RobotTestCases/Sample.pdf';
    await acceptPage.acceptAndSubmitQuote(fileToUpload, '1234', 'Test Comments');

});
