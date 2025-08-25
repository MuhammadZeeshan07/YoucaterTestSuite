const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 180 * 1000, // Increased timeout for CI/CD
  expect: {
    timeout: 10000, // Increased expect timeout for CI/CD
  },
  retries: process.env.CI ? 2 : 1, // More retries for CI/CD
  workers: process.env.CI ? 1 : 2, // Single worker in CI to avoid resource conflicts
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: process.env.CI ? 'retain-on-failure' : 'off',
    baseURL: 'https://dev.youcater.me/en/',
    actionTimeout: 30000, // Increased action timeout for CI/CD
    navigationTimeout: 60000, // Increased navigation timeout for CI/CD
    launchOptions: {
      channel: 'chrome',
      args: [
       '--start-maximized', 
       '--disable-dev-shm-usage',
       '--no-sandbox',
       '--disable-setuid-sandbox',
       '--disable-background-timer-throttling',
       '--disable-backgrounding-occluded-windows',
       '--disable-renderer-backgrounding',
       '--disable-web-security',
       '--disable-features=TranslateUI',
       '--disable-ipc-flooding-protection',
       '--memory-pressure-off'
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
