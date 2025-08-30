const BasePage = require('./BasePage');

class GetCorporateEventDetailsPage extends BasePage {
    constructor(page) {
        super(page);

        this.getEvent = 'xpath=(//div[contains(@class,"MuiDataGrid-virtualScrollerRenderZone")]/div[.//div[@data-field="name"]//div[@title="Automation Test RFP"]   and   .//div[@data-field="clientName"]//div[@title="Test Client"]])[1]';

    }

    async getEventDetails() {

        await this.page.locator(this.getEvent).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.getEvent);
        await this.click(this.getEvent);
        await this.page.waitForTimeout(5000);

    
    }
    
}

module.exports = GetCorporateEventDetailsPage;