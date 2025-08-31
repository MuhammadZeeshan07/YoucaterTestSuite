const { test } = require('@playwright/test');
const AcceptAIDirectRequestPage = require('../pages/AcceptAIDirectRequestPage');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const testData = require('../utils/testData');

test('Vendor accepts ai direct request and submits quote', async ({ page }) => {
    const { url, email, password } = testData.PARTNER;
    const loginPage = new PartnerLoginPage(page);
    await loginPage.navigate(url);
    await loginPage.login(email, password);

    const acceptPage = new AcceptAIDirectRequestPage(page);
  //  const fileToUpload = path.resolve(__dirname, '../utils/Sample.pdf');
    await acceptPage.acceptAndSubmitQuote();

});
