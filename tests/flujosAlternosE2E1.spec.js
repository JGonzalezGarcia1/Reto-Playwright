const { test, expect } = require('@playwright/test');
const { datosCheckout } = require('../fixtures/datosCheckoutFixture');

// Escenarios alternos E2E 1
test.describe('Escenarios alternos - Flujo de compra', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('Eliminar producto del carrito antes del checkout', async ({ page }) => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#remove-sauce-labs-bike-light').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill(datosCheckout.nombre);
    await page.locator('[data-test="lastName"]').fill(datosCheckout.apellido);
    await page.locator('[data-test="postalCode"]').fill(datosCheckout.codigoPostal);
    await page.locator('[data-test="continue"]').click();

    const total = await page.locator('.summary_total_label').textContent();
    expect(total).toContain('32.39'); // Total esperado por solo un producto
  });

  test('Acceder a checkout sin productos', async ({ page }) => {
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill(datosCheckout.nombre);
    await page.locator('[data-test="lastName"]').fill(datosCheckout.apellido);
    await page.locator('[data-test="postalCode"]').fill(datosCheckout.codigoPostal);
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('.summary_info')).toBeHidden();
  });
});