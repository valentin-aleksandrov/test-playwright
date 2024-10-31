import { test, expect } from '@playwright/test';

test('add a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('my first item');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByTestId('todo-title')).toBeVisible()
});