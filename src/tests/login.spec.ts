import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { analyzeFailure } from '../ai/reporting/FailureAnalyzer';

test('Login Test', async ({ page }) => {

  const login = new LoginPage(page);

  try {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

  } catch (error: any) {

    const aiAnalysis = await analyzeFailure(error.message);

    console.log('AI ANALYSIS');
    console.log(aiAnalysis);

    throw error;
  }
});