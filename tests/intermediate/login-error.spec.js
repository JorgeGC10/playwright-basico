import { test, expect } from '@playwright/test'

test('login inválido', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/')

  await page.fill('#username', 'errado')
  await page.fill('#password', '123')

  await page.click('#submit')

  await expect(page.locator('#error')).toBeVisible()
})