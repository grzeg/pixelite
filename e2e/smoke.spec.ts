import { expect, test } from "@playwright/test";

test("root redirects to a locale and renders the homepage", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveURL(/\/(pl|en)\/?$/);
});

test("portfolio link is reachable from the homepage", async ({ page }) => {
  await page.goto("/en");
  const portfolioLink = page.getByRole("link", { name: /portfolio/i }).first();
  await expect(portfolioLink).toBeVisible();
  await portfolioLink.click();
  await expect(page).toHaveURL(/\/en\/portfolio/);
});
