import { test, expect } from '@playwright/test'

test('adicionar elemento', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')

  await page.click('button')

  await expect(page.locator('.added-manually')).toBeVisible()
})