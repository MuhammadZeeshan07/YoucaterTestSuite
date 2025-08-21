const { test } = require('@playwright/test');
const AcceptDirectRequestPage = require('../pages/AcceptDirectRequest');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');
const path = require('path');

test('Vendor accepts direct request and submits quote', async ({ page }) => {
    const { url, email, password } = testData.PARTNER;
    const loginPage = new PartnerLoginPage(page);
    await loginPage.navigate(url);
    await loginPage.login(email, password);

    const acceptPage = new AcceptDirectRequestPage(page);
    const fileToUpload = 'C:\\Users\\mztre\\OneDrive\\Desktop\\YouCater Automation\\utils\\Sample.pdf';
    await acceptPage.acceptAndSubmitQuote(fileToUpload, '1234', 'Test Comments');

});
