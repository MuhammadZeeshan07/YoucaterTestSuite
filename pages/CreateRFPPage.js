const BasePage = require('./BasePage');
const path = require('path');
const uploadPdf = path.resolve(__dirname, '../utils/Sample.pdf');
const uploadImage = path.resolve(__dirname, '../utils/TestImage.jpg');

class CreateRFPPage extends BasePage {
    constructor(page) {
        super(page);

        // Event Details selectors
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

        // Additional Details selectors
        this.uploadAttachmentsButton = '#attachmentsInput';

        // Summary selectors
        this.editEventDetail = 'xpath=(//*[contains(@class,"editButton")])[1]';
        this.editLocationDetail = 'xpath=(//*[contains(@class,"editButton")])[4]';
        this.cloneDay = 'xpath=(//button[contains(text(),"Clone day")])[1]';
        this.confirmationModal = 'xpath=//button[contains(text(),"Confirm")]';
        this.cloneDayAssertion = 'xpath=//p[contains(text(), "Day 2")]';
        this.cloneLocation = 'xpath=(//button[contains(text(),"Clone this location")])[1]';
        this.cloneLocationAssertion = 'xpath=//p[contains(text(), "Location 2")]';
        this.addDay = 'xpath=//*[contains(@class, "addCorporateEventFormDayAddBtn")]';
        this.addDayAssertion = 'xpath=//p[contains(text(), "Day 3")]';
        this.applyToAllDays = 'xpath=//button[contains(text(), "Apply to all days")]';
        this.addLocationToAllDays = 'xpath=(//button[contains(text(), "Add this location to all days")])[1]';
        this.selectDay2 = 'xpath=//*[contains(@class, "addCorporateEventFormDays")]/div[2]';
        this.day2SelectionAssertion = 'xpath=//*[contains(@class,"dayDetailsHeaderLeft")]/p[normalize-space(.)="Day 2 Details"]';
        this.selectDay3 = 'xpath=//*[contains(@class, "addCorporateEventFormDays")]/div[3]';
        this.day3SelectionAssertion = 'xpath=//*[contains(@class,"dayDetailsHeaderLeft")]/p[normalize-space(.)="Day 3 Details"]';
        this.editAdditionalDetail = 'xpath=(//*[contains(@class,"editButton")])[6]';
        this.saveDraftButton = 'xpath=//*[contains(@class,"addCorporateModalBtn") and contains(text(),"Save draft")]';
        this.saveDraftConfirmation = 'xpath=//*[contains(@class,"MuiAlert-message") and contains(text(),"Draft saved successfully")]';

        //Event draft locators
        this.openDraft = 'xpath=(//div[contains(@class,"eventDraftCard")][.//p[contains(@class,"eventDraftCardTitle") and normalize-space(text())="Automation Test RFP"]   and    .//p[normalize-space(text())="Step 3/3 completed"]])[1]';
        this.submitRFPButton = 'xpath=//button[contains(@class,"addCorporateModalNextBtn") and contains(text(),"Submit")]';

        //Assign to vendor locators
        this.searchVendor = '#select_vendors';
        this.selectVendor = 'xpath=(//div[contains(@class,"assign_vendor_list_hold")]/div)[1]';
        this.sendVendor = 'xpath=//button[contains(text(),"Send vendor")]';
        this.eventCreationConfirmation = 'xpath=//*[contains(@class,"MuiAlert-message") and contains(text(),"Event created and assigned successfully")]';

        
    }

    async selectMeals(meals = []) {
        for (const label of meals) {
            const xpath = `xpath=(//*[contains(text(),"${label}")])[1]`;
            await this.click(xpath);
        }
    }


    async createRFPEvent() {

        // Event Details actions
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
        await this.fill(this.eventNameInput, 'Automation Test RFP');
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

        // Location Details actions
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

        // Additional Details actions
        await this.click(this.additionalInfoInput);
        await this.fill(this.additionalInfoInput, 'Some additional information');
        await this.waitForVisible(this.uploadAttachmentsButton);
        await this.page.setInputFiles(this.uploadAttachmentsButton, uploadPdf);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);

        // Edit Event details actions
        await this.page.locator(this.editEventDetail).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.editEventDetail);
        await this.click(this.editEventDetail);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.paymentTermsInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.paymentTermsInput);
        await this.fill(this.paymentTermsInput, '');
        await this.fill(this.paymentTermsInput, '80');
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);

        // Edit Location details actions
        await this.page.locator(this.editLocationDetail).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.editLocationDetail);
        await this.click(this.editLocationDetail);
        await this.page.locator(this.cloneDay).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.cloneDay);
        await this.click(this.cloneDay);
        await this.page.locator(this.confirmationModal).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.confirmationModal);
        await this.click(this.confirmationModal);
        await this.waitForVisible(this.cloneDayAssertion);
        await this.page.locator(this.cloneDayAssertion).scrollIntoViewIfNeeded();
        await this.page.locator(this.cloneDayAssertion).waitFor({ state: 'visible' });
        await this.page.locator(this.cloneLocation).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.cloneLocation);
        await this.click(this.cloneLocation);
        await this.page.locator(this.confirmationModal).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.confirmationModal);
        await this.click(this.confirmationModal);
        await this.waitForVisible(this.cloneLocationAssertion);
        await this.page.locator(this.cloneLocationAssertion).scrollIntoViewIfNeeded();
        await this.page.locator(this.cloneLocationAssertion).waitFor({ state: 'visible' });
        await this.page.locator(this.addDay).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.addDay);
        await this.click(this.addDay);
        await this.page.locator(this.confirmationModal).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.confirmationModal);
        await this.click(this.confirmationModal);
        await this.waitForVisible(this.addDayAssertion);
        await this.page.locator(this.addDayAssertion).scrollIntoViewIfNeeded();
        await this.page.locator(this.addDayAssertion).waitFor({ state: 'visible' });
        await this.page.locator(this.applyToAllDays).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.applyToAllDays);
        await this.click(this.applyToAllDays);
        await this.page.locator(this.confirmationModal).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.confirmationModal);
        await this.click(this.confirmationModal);
        await this.page.locator(this.addLocationToAllDays).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.addLocationToAllDays);
        await this.click(this.addLocationToAllDays);
        await this.page.locator(this.confirmationModal).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.confirmationModal);
        await this.click(this.confirmationModal);
        await this.page.locator(this.selectDay2).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.selectDay2);
        await this.click(this.selectDay2);
        await this.waitForVisible(this.day2SelectionAssertion);
        await this.page.locator(this.day2SelectionAssertion).scrollIntoViewIfNeeded();
        await this.page.locator(this.day2SelectionAssertion).waitFor({ state: 'visible' });
        await this.page.locator(this.eventStartDateInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventStartDateInput);
        await this.click(this.eventStartDateInput);
        await this.selectDate(this.eventStartDateInput, 6);
        await this.page.locator(this.selectDay3).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.selectDay3);
        await this.click(this.selectDay3);
        await this.waitForVisible(this.day3SelectionAssertion);
        await this.page.locator(this.day3SelectionAssertion).scrollIntoViewIfNeeded();
        await this.page.locator(this.day3SelectionAssertion).waitFor({ state: 'visible' });
        await this.page.locator(this.eventStartDateInput).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.eventStartDateInput);
        await this.click(this.eventStartDateInput);
        await this.selectDate(this.eventStartDateInput, 7);
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);

        // Edit Additional details actions
        await this.page.locator(this.editAdditionalDetail).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.editAdditionalDetail);
        await this.click(this.editAdditionalDetail);
        await this.waitForVisible(this.uploadAttachmentsButton);
        await this.page.setInputFiles(this.uploadAttachmentsButton, uploadImage);
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.nextButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.nextButton);
        await this.click(this.nextButton);

        //Save Draft actions
        await this.page.locator(this.saveDraftButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.saveDraftButton);
        await this.click(this.saveDraftButton);
        await this.waitForVisible(this.saveDraftConfirmation);
        await this.page.locator(this.saveDraftConfirmation).scrollIntoViewIfNeeded();
        await this.page.locator(this.saveDraftConfirmation).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.openDraft).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.openDraft);
        await this.click(this.openDraft);
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.submitRFPButton).scrollIntoViewIfNeeded();
        await this.waitForVisible(this.submitRFPButton);
        await this.click(this.submitRFPButton);
        await this.page.waitForTimeout(1000);

        //Assign to vendor actions
        await this.waitForVisible(this.searchVendor);
        await this.fill(this.searchVendor, 'Ambala');
        await this.waitForVisible(this.selectVendor);
        await this.click(this.selectVendor);
        await this.waitForVisible(this.sendVendor);
        await this.click(this.sendVendor);
        await this.page.waitForTimeout(1000);
        await this.waitForVisible(this.eventCreationConfirmation);
        await this.page.locator(this.eventCreationConfirmation).scrollIntoViewIfNeeded();
        await this.page.locator(this.eventCreationConfirmation).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);

    }
}

module.exports = CreateRFPPage;