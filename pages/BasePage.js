const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    try {
      if (this.page.isClosed()) {
        throw new Error(`Page was closed while trying to click selector: ${selector}`);
      }
      
      // Wait for element to be visible and enabled before clicking
      await this.page.locator(selector).waitFor({ state: 'visible' });
      await this.page.locator(selector).click();
    } catch (error) {
      if (this.page.isClosed()) {
        throw new Error(`Page was closed while trying to click selector: ${selector}`);
      }
      throw error;
    }
  }

  async fill(selector, value) {
    try {
      if (this.page.isClosed()) {
        throw new Error(`Page was closed while trying to fill selector: ${selector}`);
      }
      
      // Wait for element to be visible and enabled before filling
      await this.page.locator(selector).waitFor({ state: 'visible' });
      await this.page.locator(selector).fill(value);
    } catch (error) {
      if (this.page.isClosed()) {
        throw new Error(`Page was closed while trying to fill selector: ${selector}`);
      }
      throw error;
    }
  }

  async waitForVisible(selector, options = {}) {
    const maxRetries = 3;
    const retryDelay = 1000;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Check if page is still open before attempting to wait
        if (this.page.isClosed()) {
          throw new Error(`Page was closed while waiting for selector: ${selector}`);
        }
        
        // Wait for selector to be visible
        await this.page.locator(selector).waitFor({ 
          state: 'visible', 
          ...options 
        });
        
        // If successful, break out of retry loop
        return;
        
      } catch (error) {
        // Check if page was closed during operation
        if (this.page.isClosed()) {
          throw new Error(`Page was closed while waiting for selector: ${selector}`);
        }
        
        // If this is the last attempt, throw the error
        if (attempt === maxRetries) {
          console.error(`Failed to find selector "${selector}" after ${maxRetries} attempts:`, error.message);
          throw error;
        }
        
        // Log retry attempt and wait before retrying
        console.warn(`Attempt ${attempt}/${maxRetries} failed for selector "${selector}". Retrying in ${retryDelay}ms...`);
        await this.page.waitForTimeout(retryDelay);
      }
    }
  }

  async assertText(selector, expected) {
    await expect(this.page.locator(selector)).toHaveText(expected);
  }
}

module.exports = BasePage;
