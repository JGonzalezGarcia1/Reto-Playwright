const { test, expect } = require('@playwright/test');
  const { LoginPage } = require('../pages/loginPage');
  const { InventoryPage } = require('../pages/inventoryPage');
  const { CartPage } = require('../pages/cartPage');
  const { CheckoutPage } = require('../pages/checkoutPage');
  const { FinishPage } = require('../pages/finishPage');
  const { usuarioValido } = require('../fixtures/usuariosFixture');
  const { datosValidos } = require('../fixtures/datosCheckoutFixture');
  
  test.describe('Flujo E2E 1 Compra Exitosa', () => {
    test('Compra completa con validaciones', async ({ page }) => {
      const login = new LoginPage(page);
      const inventario = new InventoryPage(page);
      const carrito = new CartPage(page);
      const checkout = new CheckoutPage(page);
      const finish = new FinishPage(page);
  
      await test.step('login con credenciales validas', async () => {
        await login.goto();
        await login.login(usuarioValido.username, usuarioValido.password);
        await expect(page).toHaveURL(/inventory/);
      });
  
      await test.step('Agregar 2 productos al carrito', async () => {
        await inventario.addProductByName('Sauce Labs Backpack');
        await inventario.addProductByName('Sauce Labs Bike Light');
        await expect(inventario.cartBadge).toHaveText('2');
      });
  
      await test.step('Validar productos en carrito', async () => {
        await carrito.goto();
        await expect(carrito.items).toHaveCount(2);
      });
  
      await test.step('Proceso de Checkout', async () => {
        await carrito.checkoutButton.click();
        await checkout.fillCheckoutInfo(datosValidos.nombre, datosValidos.apellido, datosValidos.zip);
        await expect(checkout.totalLabel).toBeVisible();
      });
  
      await test.step('Confirmar compra y validar mensaje de exito', async () => {
        await checkout.finishButton.click();
        await expect(finish.confirmation).toHaveText('Thank you for your order!');
      });
    });
  });
  