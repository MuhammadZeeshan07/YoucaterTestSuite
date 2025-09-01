const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  timeout: 180 * 1000,
  expect: {
    timeout: 15000,
  },
  //retries: process.env.CI ? 2 : 0, // More retries in CI
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'on',
    baseURL: 'https://dev.youcater.me/en/',
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
    //viewport: null,
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