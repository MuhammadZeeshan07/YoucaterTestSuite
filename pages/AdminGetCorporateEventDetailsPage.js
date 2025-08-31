const BasePage = require('./BasePage');
const VendorGetRFPandQuotePage = require('./VendorGetRFPandQuotePage');
const { expect } = require('@playwright/test');

class AdminGetCorporateEventDetailsPage extends BasePage {
    constructor(page) {
        super(page);
        this.vendorGetRFPandQuotePage = new VendorGetRFPandQuotePage(page);

        this.getEvent = 'xpath=(//div[contains(@class,"MuiDataGrid-virtualScrollerRenderZone")]/div[.//div[@data-field="name"]//div[@title="Automation Test RFP"]   and   .//div[@data-field="clientName"]//div[@title="Test Client"]])[1]';
        this.getLocationDetails = 'xpath=//button[contains(@class,"subTab") and contains(text(),"Schedule & Locations")]';
        this.getAdditionalInfo = 'xpath=//button[contains(@class,"subTab") and contains(text(),"Additional Information")]';
        this.quoteTab = 'xpath=//button[contains(@class,"mainTab") and contains(text(),"Quotes")]';
        this.addAdditionalQuoteButton = 'xpath=//button[contains(@class,"sendQuoteButton") and contains(text(),"Add additional quote")]';
        this.typeMessage = 'xpath=//*[contains(@id,"sendbird-message-input-text-field")]';
        this.sendMessage = 'xpath=//*[contains(@class,"sendbird-message-input--send")]';
        this.initiateChat = 'xpath=//*[contains(@class,"messageTextContainer")]';
        this.selectAdmin = 'xpath=//*[contains(@id,"demo-simple-select-standard") and contains(text(),"Unassigned")]';
        this.assignAdmin = 'xpath=(//ul[contains(@class,"MuiMenu-list")])/li[1]';

    }

    async getEventDetails() {

        await this.page.locator(this.getEvent).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.getEvent);
        await this.click(this.getEvent);
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.initiateChat).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.initiateChat);
        await this.page.click(this.initiateChat);
        await this.page.locator(this.selectAdmin).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.selectAdmin);
        await this.page.click(this.selectAdmin);
        await this.page.locator(this.assignAdmin).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.assignAdmin);
        await this.page.click(this.assignAdmin);
        await this.interactWithTabsAndVerifyAdditionalInfo();
        await this.page.locator(this.typeMessage).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.typeMessage);
        await this.page.fill(this.typeMessage, 'Hello, Thanks for connecting let me review');
        await this.page.click(this.sendMessage);


    }
    async interactWithTabsAndVerifyAdditionalInfo() {
        await this.page.locator(this.getLocationDetails).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.getLocationDetails);
        await this.click(this.getLocationDetails);
        await this.waitForVisible('div.daysContainer');
        const dayCount = await this.page.locator('div.daysContainer > div.dayAccordion').count();
        expect(dayCount).toBe(3);
        await this.page.locator(this.getAdditionalInfo).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.getAdditionalInfo);
        await this.click(this.getAdditionalInfo);
        await this.verifyAdditionalInfoTabContent();
    }

    async verifyAdditionalInfoTabContent() {
        await this.vendorGetRFPandQuotePage.verifyAdditionalInfoTabContent();
    }
}

module.exports = AdminGetCorporateEventDetailsPage;