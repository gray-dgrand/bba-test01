import { test, expect } from '@playwright/test';

const ECOMMERCE_URL = 'https://e-commerce-dev.betterbytesvn.com/';

test('has title', async ({ page }) => {
  await page.goto(ECOMMERCE_URL);

  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto(ECOMMERCE_URL);

  await page.getByRole('link', { name: 'My account' }).click();

  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
