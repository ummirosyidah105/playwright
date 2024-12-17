import { test, expect } from '@playwright/test';

test('week1-playwright', async ({ page }) => {
  //navigate to url
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-credentials-container"] div').first().click();

  //login
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  //await page.pause();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //validasi homepage
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toContainText('Add to cart');
  await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});