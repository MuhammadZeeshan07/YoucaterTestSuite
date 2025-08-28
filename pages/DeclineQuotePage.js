const BasePage = require('./BasePage');

class DeclineQuotePage extends BasePage {
    constructor(page) {
        super(page);
        this.eventTitle = 'xpath=//*[contains(text(),"Start a conversation with vendor")]';
        this.acceptCheckoutBtn = 'xpath=//*[contains(text(),"View quote")]';
        this.acceptAndCheckoutLink = 'text=Accept & checkout';
        this.declineQuoteBtn = 'xpath=//button[contains(text(),"Decline")]';
        this.selectReason = '#FIRST_IMPRESSION';
        this.declineBidModal = 'xpath=//div[contains(@class,"DeclineBidModal")]//button[contains(text(),"Decline")]';
        this.backToEvent = 'xpath=//button[contains(text(),"Back to event")]';
    }

    async declineQuote() {
    await this.waitForVisible(this.eventTitle);
    await this.click(this.eventTitle);

    await this.waitForVisible(this.acceptCheckoutBtn);
    await this.click(this.acceptCheckoutBtn);

    await this.waitForVisible(this.acceptAndCheckoutLink);
    await this.click(this.acceptAndCheckoutLink);

    await this.waitForVisible(this.declineQuoteBtn);
    await this.click(this.declineQuoteBtn);

    await this.waitForVisible(this.selectReason);
    await this.click(this.selectReason);

    await this.waitForVisible(this.declineBidModal);
    await this.click(this.declineBidModal);
    }
}

module.exports = DeclineQuotePage;
