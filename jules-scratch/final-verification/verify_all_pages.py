
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            # --- 1. Login Page ---
            await page.goto("http://localhost:3000/login", timeout=60000)
            await page.screenshot(path="jules-scratch/final-verification/01_login_page.png")

            # --- 2. Register Page ---
            await page.goto("http://localhost:3000/register", timeout=60000)
            await page.screenshot(path="jules-scratch/final-verification/02_register_page.png")

            # --- Simulate Login to access protected routes ---
            await page.evaluate("""
                localStorage.setItem(
                    'sb-nmxzdfkfgdpsfomuvfsw-auth-token',
                    JSON.stringify({
                        "access_token":"fake-token",
                        "expires_in":3600,
                        "refresh_token":"fake-refresh-token",
                        "token_type":"bearer",
                        "user":{
                            "id":"fake-user-id",
                            "aud":"authenticated",
                            "role":"authenticated",
                            "email":"test@example.com"
                        }
                    })
                );
            """)

            # --- Reload the page to ensure the app recognizes the new auth state ---
            await page.reload(wait_until="domcontentloaded")

            # --- 3. Prices Page (as a logged-in user) ---
            await page.goto("http://localhost:3000/prices", timeout=60000)
            await page.wait_for_selector('.prices-container', timeout=15000)
            await page.screenshot(path="jules-scratch/final-verification/03_prices_page.png")

            # --- 4. Dashboard Page (as a logged-in user) ---
            await page.goto("http://localhost:3000/dashboard", timeout=60000)
            await page.wait_for_selector('.dashboard-container', timeout=15000)
            await page.screenshot(path="jules-scratch/final-verification/04_dashboard_page.png")

        except Exception as e:
            print(f"An error occurred during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
