const BasePage = require('./BasePage');

class CreateRFPPage extends BasePage {
    constructor(page) {
        super(page);

        this.b2BMenu = 'xpath=//*[contains(text(),"B2B")]';
        this.corporateEventsSubMenu = 'xpath=//*[contains(text(),"Active Events (RFPS)")]';
        this.planEventButton = 'button.planEventButton';
        this.eventNameInput = 'xpath=(//input[contains(@placeholder,"Enter here")])[1]';
        this.addClientButton = 'xpath=//*[contains(@class, "MuiButtonBase-root") and contains(text(), "Add")]';
        this.clientNameInput = 'xpath=//input[contains(@placeholder,"Enter client name")]';
        this.createClientButton = 'xpath=(//*[contains(@class, "MuiButtonBase-root") and contains(text(), "Add")])[2]';
        this.clientSelectDropdown = 'xpath=//input[contains(@placeholder,"Search client")]';
        this.budgetInput = 'xpath=//input[contains(@placeholder,"Enter total budget for the event")]';
        this.paymentTerms = 'xpath=//*[contains(@class, "customPaymentDaysContainer") and contains(text(), "Custom")]';
        this.paymentTermsInput = 'xpath=//*[contains(@class, "customPaymentDaysInput")]//input[@type="number"]';
        this.eventDaysInput = 'xpath=(//input[contains(@placeholder,"Enter here")])[2]';
        this.eventStartDateInput = 'xpath=(//*[contains(@class,"inputCalendarIconContainer")])[1]';
        this.eventInternalDateInput = 'xpath=(//*[contains(@class,"inputCalendarIconContainer")])[2]';
        this.eventExternalDateInput = 'xpath=(//*[contains(@class,"inputCalendarIconContainer")])[3]';
        this.nextButton = 'xpath=//button[contains(text(),"Next")]';

        // Location Details selectors
        this.locationInput = 'xpath=//*[contains(@placeholder,"Address of event")]';
        this.selectEmirate = 'xpath=(//*[contains(@id,"demo-simple-select-standard")])[1]';
        this.emirateValue = 'xpath=//*[contains(text(),"Abu Dhabi")]';
        this.enterGuests = 'xpath=//input[contains(@placeholder,"Enter here")]';
        this.selectTimeofDay = 'xpath=(//*[contains(@id,"demo-simple-select-standard")])[2]';
        this.timeOfDayValue = 'xpath=(//*[contains(text(),"Morning Break")])[2]';
        this.startTimeInput = 'xpath=(//input[contains(@placeholder,"--:-- --")])[1]';
        this.startTimeValue = 'xpath=//ul[contains(@class, "react-datepicker__time-list")]/li[1]';
        this.endTimeInput = 'xpath=(//input[contains(@placeholder,"--:-- --")])[2]';
        this.endTimeValue = 'xpath=//ul[contains(@class, "react-datepicker__time-list")]/li[2]';
        this.typeofProvider = 'xpath=//input[contains(@type,"radio") and contains(@value,"CATERERS")]';
        this.additionalInfoInput = 'xpath=(//*[contains(@placeholder,"Add any additional information")])[1]';
        this.uploadAttachmentsButton = '';


        this.addDayButton = 'button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.coreBtn.dayHeaderButton.css-qldyz3';
        this.saveDayButton = 'button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.coreBtn.undefined.css-z22kgn';
        this.addToAllDaysButton = 'button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedInherit.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorInherit.coreBtn.button.addToAllDays.css-1av6lzk';

        // Notes and Attachments selectors
        this.notesInput = '#\\:r6i\\:';
        this.uploadAttachmentsButton = 'button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.coreBtn.uploadAttachmentsBtn.css-1f8j77f';

        // Budget Review selectors
        this.budgetEditButton = 'div.editButton.MuiBox-root.css-0 > svg';
        this.budgetAmountInput = '#\\:r7r\\:';

        // Final Review selectors
        this.saveDraftButton = 'div.addCorporateModalFooterRightContainer.MuiBox-root.css-0 > button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedSecondary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorSecondary.coreBtn.addCorporateModalBtn.css-l1nix0';
        this.submitRFPButton = 'button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.coreBtnPill.assign_event_vendor_modal_footer.css-jau75b';

    }

    async selectMeals(meals = []) {
        for (const label of meals) {
            const xpath = `xpath=(//*[contains(text(),"${label}")])[1]`;
            await this.click(xpath);
        }
    }


    async createRFPEvent() {

        await this.waitForVisible(this.b2BMenu);
        await this.page.locator(this.b2BMenu).scrollIntoViewIfNeeded();
        await this.click(this.b2BMenu);
        await this.page.locator(this.b2BMenu).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.corporateEventsSubMenu);
        await this.click(this.corporateEventsSubMenu);
        await this.page.locator(this.planEventButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.planEventButton);
        await this.click(this.planEventButton);
        await this.page.locator(this.eventNameInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventNameInput);
        await this.fill(this.eventNameInput, 'Test RFP');
        await this.page.locator(this.addClientButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.addClientButton);
        await this.click(this.addClientButton);
        await this.page.locator(this.clientNameInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.clientNameInput);
        await this.fill(this.clientNameInput, 'Test Client');
        await this.page.locator(this.createClientButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.createClientButton);
        await this.click(this.createClientButton);
        await this.page.locator(this.budgetInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.budgetInput);
        await this.click(this.budgetInput);
        await this.fill(this.budgetInput, '10000');
        await this.page.locator(this.paymentTerms).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.paymentTerms);
        await this.click(this.paymentTerms);
        await this.page.locator(this.paymentTermsInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.paymentTermsInput);
        await this.fill(this.paymentTermsInput, '99');
        await this.page.locator(this.eventDaysInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventDaysInput);
        await this.fill(this.eventDaysInput, '1');
        await this.page.locator(this.eventStartDateInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventStartDateInput);
        await this.click(this.eventStartDateInput);
        await this.selectDate(this.eventStartDateInput, 5);
        await this.page.locator(this.eventInternalDateInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventInternalDateInput);
        await this.click(this.eventInternalDateInput);
        await this.selectDate(this.eventInternalDateInput, 4);
        await this.page.locator(this.eventExternalDateInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventExternalDateInput);
        await this.click(this.eventExternalDateInput);
        await this.selectDate(this.eventExternalDateInput, 3);
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);
        await this.page.locator(this.locationInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.locationInput);
        await this.fill(this.locationInput, 'Test Location');
        await this.page.locator(this.selectEmirate).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.selectEmirate);
        await this.click(this.selectEmirate);
        await this.page.locator(this.emirateValue).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.emirateValue);
        await this.click(this.emirateValue);
        await this.page.locator(this.enterGuests).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.enterGuests);
        await this.fill(this.enterGuests, '100');
        await this.page.locator(this.selectTimeofDay).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.selectTimeofDay);
        await this.click(this.selectTimeofDay);
        await this.page.locator(this.timeOfDayValue).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.timeOfDayValue);
        await this.click(this.timeOfDayValue);
        await this.page.locator(this.startTimeInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.startTimeInput);
        await this.click(this.startTimeInput);
        await this.page.locator(this.startTimeValue).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.startTimeValue);
        await this.click(this.startTimeValue);
        await this.page.locator(this.endTimeInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.endTimeInput);
        await this.click(this.endTimeInput);
        await this.page.locator(this.endTimeValue).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.endTimeValue);
        await this.click(this.endTimeValue);
        await this.page.locator(this.typeofProvider).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.typeofProvider);
        await this.click(this.typeofProvider);
        await this.selectMeals(['Buffet', 'Food trucks & Pop-Ups']);
        await this.selectMeals(['American', 'Asian', 'International']);
        await this.selectMeals(['Starters', 'Mains', 'Coffee/Tea']);
        await this.click(this.additionalInfoInput);
        await this.fill(this.additionalInfoInput, 'Some additional information');
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);
        await this.click(this.additionalInfoInput);
        await this.fill(this.additionalInfoInput, 'Some additional information');
        
    }
}

module.exports = CreateRFPPage;