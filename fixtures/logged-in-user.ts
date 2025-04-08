import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

type LoginFixtures = {
    loggedInPage: LoginPage;
}

export const test = base.extend<LoginFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();

        await use(loginPage);
    }
});

export { expect } from '@playwright/test';