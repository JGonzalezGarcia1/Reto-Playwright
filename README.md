
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

✔️ Flujo E2E 2: Login y Validación de Restricciones de usuario

✔️ Escenarios Alternos para ambos flujos( E2E 1 Y E2E 2)

## 📌 Datos de prueba

### 1️⃣ Usuario estándar 

   Usuario: standard_user 

   Contraseña: secret_sauce

### 2️⃣ Usuario bloqueado

   Usuario: locked_out_user 

   Contraseña: secret_sauce


## Sitio oficial SauceDemo

[Base URL](https://www.saucedemo.com/)

