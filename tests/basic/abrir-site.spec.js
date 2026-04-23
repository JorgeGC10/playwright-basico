import { test } from '@playwright/test'

test('abrir site', async ({ page }) => {
  await page.goto('https://example.com')
})