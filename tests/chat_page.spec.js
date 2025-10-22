
import { test } from '@playwright/test';

test('Görsel Doğrulama - Sohbet Sayfası', async ({ page }) => {
  // Geliştirme sunucusunda çalışan sohbet sayfasına git
  await page.goto('http://localhost:3000/chat.html');

  // Sayfanın yüklenmesini beklemek için kısa bir gecikme ekle
  await page.waitForTimeout(1000);

  // Ekran görüntüsü al ve belirtilen yola kaydet
  await page.screenshot({ path: 'jules-scratch/verification/final_chat_page.png' });
});
