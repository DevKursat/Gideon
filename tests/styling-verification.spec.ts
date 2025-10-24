import { test, expect } from '@playwright/test';

test.describe('UI Styling Verification', () => {

  test('should capture screenshot of the Dashboard page', async ({ page }) => {
    await page.goto('/Gideon/#/dashboard');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'tests/screenshots/dashboard-styled.png' });
  });

  test('should capture screenshot of the Prices page', async ({ page }) => {
    await page.goto('/Gideon/#/prices');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'tests/screenshots/prices-styled.png' });
  });

});
