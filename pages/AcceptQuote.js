// pages/AcceptQuote.js
const BasePage = require('./BasePage');
class AcceptQuotePage extends BasePage {
    constructor(page) {
        super(page);
        this.eventTitle = 'xpath=//*[contains(text(),"Start a conversation with vendor")]';
        this.acceptCheckoutBtn = 'xpath=//*[contains(text(),"View quote")]';
        this.acceptAndCheckoutLink = 'text=Accept & checkout';
        this.acceptedCheckbox = 'id=acceptedCheckbox';
        this.paymentPanel = 'xpath=//*[contains(text(),"Accept & pay")]';
        this.email = 'id=email';
        this.stripeCardNo = 'id=cardNumber';
        this.stripeExp = 'id=cardExpiry';
        this.stripeCvc = 'id=cardCvc';
        this.checkoutName = 'id=billingName';
        this.checkoutAddress1 = 'id=billingAddressLine1';
        this.checkoutAddress2 = 'id=billingAddressLine2';
        this.checkoutLocality = 'id=billingLocality';
        this.checkoutPostal = 'id=billingPostalCode';
        this.submitPayment = 'div.SubmitButton-IconContainer';
        this.backToEvent = 'xpath=//button[contains(text(),"Back to event")]';
    }
    async acceptAndPayCard(testCard = '4242 4242 4242 4242') {
        await this.waitForVisible(this.eventTitle);
        await this.click(this.eventTitle);
        await this.waitForVisible(this.acceptCheckoutBtn);
        await this.click(this.acceptCheckoutBtn);
        await this.waitForVisible(this.acceptAndCheckoutLink);
        await this.click(this.acceptAndCheckoutLink);
        await this.waitForVisible(this.acceptedCheckbox);
        await this.click(this.acceptedCheckbox);
        await this.waitForVisible(this.paymentPanel);
        await this.click(this.paymentPanel);
        await this.waitForVisible(this.email);
        await this.fill(this.email, 'test@example.com');
        await this.fill(this.stripeCardNo, '4242424242424242');
        await this.fill(this.stripeExp, '09 / 30');
        await this.fill(this.stripeCvc, '100');
        await this.fill(this.checkoutName, 'Test card');
        await this.fill(this.checkoutAddress1, 'test');
        await this.fill(this.checkoutAddress2, 'test');
        await this.fill(this.checkoutLocality, 'test');
        await this.fill(this.checkoutPostal, '123456');
        await this.page.waitForTimeout(2000);
        await this.waitForVisible(this.submitPayment);
        await this.click(this.submitPayment);
        await this.page.waitForTimeout(5000);
        await this.waitForVisible(this.backToEvent);
        await this.click(this.backToEvent);
    }
}
module.exports = AcceptQuotePage;