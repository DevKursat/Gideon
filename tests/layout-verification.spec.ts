import { test, expect, devices } from '@playwright/test';

test.describe('Welcome Screen Layout Verification', () => {

  // Masaüstü Testi
  test('should center the welcome message on desktop', async ({ page }) => {
    await page.goto('/Gideon/public/chat.html');

    // "walkthrough" katmanını kontrol et ve kapat
    const walkthroughOverlay = page.locator('#walkthrough-overlay');
    if (await walkthroughOverlay.isVisible()) {
      await page.locator('#walkthrough-close-btn').click();
    }

    await page.waitForSelector('#welcome-screen');

    // Ekran görüntüsü al
    await page.screenshot({ path: 'tests/screenshots/desktop-layout.png' });

    // CSS özelliğini kontrol et (opsiyonel ama iyi bir pratik)
    const welcomeScreen = page.locator('#welcome-screen');
    await expect(welcomeScreen).toHaveCSS('justify-content', 'center');
  });

  // Mobil Testi
  test('should align the welcome message to the top on mobile', async ({ page }) => {
    // Mobil cihazı simüle et
    await page.setViewportSize(devices['iPhone 11'].viewport);

    await page.goto('/Gideon/public/chat.html');

    // "walkthrough" katmanını kontrol et ve kapat
    const walkthroughOverlay = page.locator('#walkthrough-overlay');
    if (await walkthroughOverlay.isVisible()) {
      await page.locator('#walkthrough-close-btn').click();
    }

    await page.waitForSelector('#welcome-screen');

    // Ekran görüntüsü al
    await page.screenshot({ path: 'tests/screenshots/mobile-layout.png' });

    // Mobil için `justify-content` 'normal' olmalı veya 'flex-start' gibi başka bir başlangıç değeri
    const welcomeScreen = page.locator('#welcome-screen');
    const justifyContent = await welcomeScreen.evaluate(el => getComputedStyle(el).justifyContent);
    expect(justifyContent).not.toBe('center');
  });

});
