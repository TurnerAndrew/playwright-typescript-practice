import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductPage } from '../pages/product-page';

test.describe('login tests', () => {

    test.beforeEach(async ( { page }) => {
        await page.goto('https://saucedemo.com');
    })
    
    test('can login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        await loginPage.attemptLogin(loginPage.validUser, loginPage.validPassword);
        await expect(productPage.pageTitle).toBeVisible();
    });
    
    test('valid username with invalid password fails login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.attemptLogin(loginPage.invalidUsername, loginPage.validPassword);
        await expect(loginPage.error).toBeVisible();
        await expect(loginPage.error).toContainText('Username and password do not match any user in this service');
    });

    test('invalid username fails login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.attemptLogin(loginPage.invalidUsername, loginPage.validPassword);
        await expect(loginPage.error).toBeVisible();
        await expect(loginPage.error).toContainText('Username and password do not match any user in this service');
    });

    test('empty username field displays error and login button is disabled', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.clickLogin();
        await expect(loginPage.error).toContainText('Username is required');
        await expect(loginPage.pageTitle).toBeVisible();
    })

    }
)