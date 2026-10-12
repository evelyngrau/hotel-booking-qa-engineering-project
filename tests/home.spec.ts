import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
test('should load the hotel booking homepage', async ({ page }) => {
    await page.goto('https://automationintesting.online/');

    await expect(page).toHaveTitle(/Restful-booker-platform demo/);
    await expect(page.getByText('Welcome to Shady Meadows B&B')).toBeVisible();
});
});