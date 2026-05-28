import { Page } from '@playwright/test';

export class BasePage {

  constructor(public page: Page) {}

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async type(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }

  async getText(locator: string) {
    return await this.page.locator(locator).textContent();
  }
}