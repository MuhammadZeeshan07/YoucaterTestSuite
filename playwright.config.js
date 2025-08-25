const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 6000,
  },
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
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
  isMobile: false,
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome'
      },
    },
  ],
});
