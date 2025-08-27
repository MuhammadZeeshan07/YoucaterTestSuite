const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  timeout: 180 * 1000, // Increased global test timeout
  expect: {
    timeout: 15000, // Increased expect timeout
  },
  retries: process.env.CI ? 2 : 0, // More retries in CI
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  use: {
    headless: process.env.CI ? true : false, // Headless only in CI
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://dev.youcater.me/en/',
    actionTimeout: 15000, // Increased action timeout
    navigationTimeout: 30000, // Increased navigation timeout
    launchOptions: {
      channel: 'chrome',
      args: [
        '--start-maximized',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      ],
    },
    viewport: { width: 1920, height: 1080 },
    isMobile: false,
    trace: 'on-first-retry', // Enable trace on first retry for debugging
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});