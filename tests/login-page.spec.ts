import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test.describe('login tests', () => {

    test.beforeEach(async ( { page }) => {
        await page.goto('https://saucedemo.com');
    })
    
    test('can login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(loginPage.validUser, loginPage.validPassword);
        await expect(page.getByTestId('title')).toHaveText('Products');
    },)
    
    test('valid username with invalid password fails login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(loginPage.invalidUsername, loginPage.validPassword);
        await expect(loginPage.error).toBeVisible();
    })

    }
)