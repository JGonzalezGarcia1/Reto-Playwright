
# Reto Final: Automatización de una mini aplicación E-commerce - E2E con Playwright

Este proyecto automatiza flujos End-to-End (E2E) de la aplicación SauceDemo usando Playwright.

## #️⃣  Requisitos Previos

*Node.js instalado

*Clonar este repositorio o descargarlo en formato ZIP

*Instalar Playwright: 

```bash
  npm install -D @playwright/test
```
```bash
  npx playwright install
```

## ▶️ Ejecución del Proyecto

1. Para ejecutar todas las pruebas en múltiples navegadores (Chromium y Firefox):

```bash
  npx playwright test
```
2. Para ejecutar una prueba específica

```bash
  npx playwright test tests/flujoE2E1.spec.js
```
2. Para ejecutar en modo UI

```bash
  npx playwright test --ui
```

## 🖋️ Generar Reporte HTML

`npx playwright show-report`
## ➡️ Flujos Automatizados

✔️ Flujo E2E 1: Compra Exitosa

-Login

-Agregar productos

-Validar carrito

-Checkout

-Confirmar compra

✔️ Flujo E2E 2: Validación de Restricciones de Login

-Validar campos vacíos

-Usuario bloqueado

-Usuario correcto y logout

✔️ Escenarios Alternos

-Eliminar producto antes del checkout

-Acceder al checkout sin productos

-Validar visibilidad de precios e impuestos


## Sitio oficial SauceDemo

[Base URL](https://www.saucedemo.com/)

