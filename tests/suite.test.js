const { test, expect, chromium } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const EventCreationPage = require('../pages/EventCreationPage');
const EventEditPage = require('../pages/EventEditPage');
const VendorRequestPage = require('../pages/directRequestpage');
const StratPlanningFromHomePage = require('../pages/StratPlanningFromHomePage');
const PartnerLoginPage = require('../pages/PartnerLoginPage');
const AcceptDirectRequest = require('../pages/AcceptDirectRequest');
const AcceptQuotePage = require('../pages/AcceptQuote');
const EventCancelPage = require('../pages/EventCancelPage');
const StartPlanningFromEventTab = require('../pages/StartPlanningFromEventTab');
const DeclineRequestAndReopenPage = require('../pages/DeclineRequestAndReopenPage');
const DeclineQuotePage = require('../pages/DeclineQuotePage');
const AdminLoginPage = require('../pages/AdminLoginPage');
const EventCreationWithoutSubmissionPage = require('../pages/EventCreationWithoutSubmissionPage');
const AssignToVendorPage = require('../pages/AssignToVendorPage');
const AcceptAIDirectRequestPage = require('../pages/AcceptAIDirectRequestPage');
const CreateRFPPage = require('../pages/CreateRFPPage');
const GetCorporateEventDetailsPage = require('../pages/GetCorporateEventDetailsPage')
const VendorGetRFPandQuotePage = require('../pages/VendorGetRFPandQuotePage');

const testData = require('../utils/testData');
const path = require('path');

const { USER, PARTNER, ADMIN } = testData;

let browser;
let customerContext, partnerContext, adminContext;
let customerPage, partnerPage, adminPage;

test.describe.serial('YouCater End-to-End Suite', () => {
  test.beforeAll(async ({ browser: launchBrowser }) => {
    browser = launchBrowser;
    customerContext = await browser.newContext();
    customerPage = await customerContext.newPage();
    const loginPage = new LoginPage(customerPage);
    await loginPage.navigate(USER.url);
    await loginPage.login(USER.email, USER.password);
  });

  test.afterAll(async () => {
    await customerContext?.close();
    await partnerContext?.close();
    await adminContext?.close();
    await browser.close();
  });

  // test('Start Planning', async () => {
  //   const eventPage = new StratPlanningFromHomePage(customerPage);
  //   await eventPage.createEvent();
  // });

  // test('Create Event', async () => {
  //   const eventPage = new EventCreationPage(customerPage);
  //   await eventPage.createEvent();
  // });

  // test('View Details and Edit Event Name', async () => {
  //   const eventDetailsPage = new EventEditPage(customerPage);
  //   await eventDetailsPage.viewDetailsAndEditName();
  // });

  // test('Send Direct Request Flow', async () => {
  //   const directRequestPage = new VendorRequestPage(customerPage);
  //   await directRequestPage.sendDirectRequestFlow();
  // });

  test('Partner Login', async () => {
    partnerContext = await browser.newContext();
    partnerPage = await partnerContext.newPage();
    const partnerLoginPage = new PartnerLoginPage(partnerPage);
    await partnerLoginPage.navigate(PARTNER.url);
    await partnerLoginPage.login(PARTNER.email, PARTNER.password);
  });

  // test('Accept the Direct Request', async () => {
  //   const acceptDirectRequestPage = new AcceptDirectRequest(partnerPage);
  //   const fileToUpload = path.resolve(__dirname, '../utils/Sample.pdf');
  //   await acceptDirectRequestPage.acceptAndSubmitQuote(
  //     fileToUpload,
  //     '1234',
  //     'Test Comments'
  //   );
  // });

  // test('Accept Quote', async () => {
  //   const acceptQuotePage = new AcceptQuotePage(customerPage);
  //   await acceptQuotePage.acceptAndPayCard();
  // });

  // test('Cancel Approved Event', async () => {
  //   const eventCancelPage = new EventCancelPage(customerPage);
  //   await eventCancelPage.cancelEvent();
  // });

  // test('Start Planning From Events Tab', async () => {
  //   const startPlanning = new StartPlanningFromEventTab(customerPage);
  //   await startPlanning.startPlanning();
  // });

  // test('Create Event from Events Tab', async () => {
  //   const eventPage = new EventCreationPage(customerPage);
  //   await eventPage.createEvent();
  // });

  // test('View Event Details', async () => {
  //   const eventDetailsPage = new EventEditPage(customerPage);
  //   await eventDetailsPage.viewDetailsAndEditName();
  // });

  // test('Send Direct Request', async () => {
  //   const directRequestPage = new VendorRequestPage(customerPage);
  //   await directRequestPage.sendDirectRequestFlow();
  // });

  // test('Decline Direct Request and Reopen', async () => {
  //   const declineRequestPage = new DeclineRequestAndReopenPage(partnerPage);
  //   const fileToUpload = path.resolve(__dirname, '../utils/Sample.pdf');
  //   await declineRequestPage.declineAndReopen(
  //     fileToUpload,
  //     '1234',
  //     'Test Comments'
  //   );
  // });

  // test('Decline Quote', async () => {
  //   const declineQuotePage = new DeclineQuotePage(customerPage);
  //   await declineQuotePage.declineQuote();
  // });

  // test('Cancel Event After Quote Decline', async () => {
  //   const eventCancelPage = new EventCancelPage(customerPage);
  //   await eventCancelPage.cancelEvent();
  // });

  // test('Create Event without Submission', async () => {
  //   const eventPage = new EventCreationWithoutSubmissionPage(customerPage);
  //   await eventPage.createEvent();
  // });

  test('Admin Login', async () => {
    adminContext = await browser.newContext();
    adminPage = await adminContext.newPage();
    const adminLoginPage = new AdminLoginPage(adminPage);
    await adminLoginPage.navigate(ADMIN.url);
    await adminLoginPage.login(ADMIN.email, ADMIN.password);
  });

  // test('Assign Event to a Vendor', async () => {
  //   const assignToVendorPage = new AssignToVendorPage(adminPage);
  //   await assignToVendorPage.assignEventToVendor();
  // });

  // test('Accept the AI Direct Request', async () => {
  //   const acceptAIRequest = new AcceptAIDirectRequestPage(partnerPage);
  //   const fileToUpload = path.resolve(__dirname, '../utils/Sample.pdf');
  //   await acceptAIRequest.acceptAndSubmitQuote(
  //     fileToUpload,
  //     '1234',
  //     'Test Comments'
  //   );
  // });

  // test('View Event Details After Vendor Assignment', async () => {
  //   const eventDetailsPage = new EventEditPage(customerPage);
  //   await eventDetailsPage.viewDetailsAndEditName();
  // });

  // test('Cancel Event After Vendor Assignment', async () => {
  //   const eventCancelPage = new EventCancelPage(customerPage);
  //   await eventCancelPage.cancelEvent();
  // });

  test('Create RFP', async () => {
    const createRFP = new CreateRFPPage(adminPage);
    await createRFP.createRFPEvent();
  });

  
  test('Vendor get corporate RFP and submits quote', async () => {
    const getRFPandQuote = new VendorGetRFPandQuotePage(partnerPage);
    await getRFPandQuote.getEventDetailsAndSendQuote();
  });

  // test('Get RFP and View Details', async () => {
  //   const getEventDetails = new GetCorporateEventDetailsPage(adminPage);
  //   await getEventDetails.getEventDetails();
  // });


});