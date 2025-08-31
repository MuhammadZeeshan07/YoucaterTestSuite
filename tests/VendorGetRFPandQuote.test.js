const { test } = require('@playwright/test');
const VendorGetRFPandQuotePage = require('../pages/VendorGetRFPandQuotePage');

test('Vendor get corporate RFP and submits quote', async ({ page }) => {

    const getAndSentQuote = new VendorGetRFPandQuotePage(page);
  //  const fileToUpload = path.resolve(__dirname, '../utils/Sample.pdf');
    await getAndSentQuote.getEventDetailsAndSendQuote();

});