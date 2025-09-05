const BasePage = require('./BasePage');
const QuoteFormPage = require('../pages/QuoteFormPage');
const { expect } = require('@playwright/test');


class VendorGetRFPandQuotePage extends BasePage {
    constructor(page) {
        super(page);
        this.quoteFormPage = new QuoteFormPage(page);
        this.corporateMenu = 'xpath=//span[text()="Corporate"]';
        this.activeRFP = 'xpath=//span[text()="Corporate RFPs"]';
        this.getEvent = 'xpath=(//div[contains(@class,"MuiDataGrid-virtualScrollerRenderZone")]/div[.//div[@data-field="name"]//div[@title="Automation Test RFP"]])[1]';
        this.sendQuoteButton = 'xpath=//button[contains(text(),"Send a quote")]';
        this.getLocationDetails = 'xpath=//button[contains(@class,"subTab") and contains(text(),"Schedule & Locations")]';
        this.getAdditionalInfo = 'xpath=//button[contains(@class,"subTab") and contains(text(),"Additional Information")]';
        this.quoteTab = 'xpath=//button[contains(@class,"mainTab") and contains(text(),"Quotes")]';
        this.addAdditionalQuoteButton = 'xpath=//button[contains(@class,"sendQuoteButton") and contains(text(),"Add additional quote")]';
        this.typeMessage = 'xpath=//*[contains(@id,"sendbird-message-input-text-field")]';
        this.sendMessage = 'xpath=//*[contains(@class,"sendbird-message-input--send")]';

    }

    async getEventDetailsAndSendQuote() {


        await this.page.waitForTimeout(1000);
        await this.page.locator(this.corporateMenu).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.corporateMenu);
        await this.click(this.corporateMenu);
        await this.page.locator(this.activeRFP).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.activeRFP);
        await this.click(this.activeRFP);
        await this.page.locator(this.getEvent).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.getEvent);
        await this.click(this.getEvent);
        await this.page.waitForTimeout(1000);
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
        await this.page.locator(this.sendQuoteButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.sendQuoteButton);
        await this.click(this.sendQuoteButton);
        await this.completeQuoteFlow();
        await this.assertToastMessageVisible("Quote submitted successfully");
        await this.page.locator(this.quoteTab).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.quoteTab);
        await this.click(this.quoteTab);
        await this.page.waitForSelector('div.quotesList div.quoteCard');
        const quoteCardCount = await this.page.locator('div.quotesList div.quoteCard').count();
        expect(quoteCardCount).toBeGreaterThan(0);
        await this.page.locator(this.addAdditionalQuoteButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.addAdditionalQuoteButton);
        await this.click(this.addAdditionalQuoteButton);
        await this.completeQuoteFlow();
        await this.page.waitForSelector('div.quotesHistoryList div.quoteCard');
        const quoteHistoryCardCount = await this.page.locator('div.quotesHistoryList div.quoteCard').count();
        expect(quoteHistoryCardCount).toBeGreaterThan(0);
        await this.assertToastMessageVisible("Quote has been sent successfully");
        await this.page.locator(this.typeMessage).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.typeMessage);
        await this.click(this.typeMessage);
        await this.fill(this.typeMessage, 'Hello YouCater, Quote has been sent');
        await this.page.waitForTimeout(1000);
        await this.click(this.sendMessage);
        await this.page.waitForTimeout(1000);

    }

    async completeQuoteFlow() {
        const path = require('path');
        const filePath = path.resolve(__dirname, '../utils/Sample.pdf');
        await this.quoteFormPage.submitQuote({
            amount: '12000'
          //  filePath,
           // comments: 'This is an automated quote submission.'
        });
    }

    async verifyAdditionalInfoTabContent() {

        await this.page.waitForSelector('div.additionalInfoTabContent');
        const attachmentNames = this.page.locator('div.attachmentsContainer p.attachmentName');
        const nameCount = await attachmentNames.count();
        expect(nameCount).toBeGreaterThan(0);
        for (let i = 0; i < nameCount; i++) {
            const name = await attachmentNames.nth(i).textContent();
            expect(name?.trim().length).toBeGreaterThan(0);
        }
        const attachmentDates = this.page.locator('div.attachmentsContainer p.attachmentDate');
        const dateCount = await attachmentDates.count();
        expect(dateCount).toBeGreaterThan(0);
        for (let i = 0; i < dateCount; i++) {
            const date = await attachmentDates.nth(i).textContent();
            expect(date?.trim().length).toBeGreaterThan(0);
        }
        await expect(this.page.getByText('Notes')).toBeVisible();
        const notesText = await this.page.locator('div.detailItem p.value').last().textContent();
        expect(notesText?.trim().length).toBeGreaterThan(0);
    }

}

module.exports = VendorGetRFPandQuotePage;