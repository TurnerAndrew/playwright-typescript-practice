import { expect, type Locator, type Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly error: Locator;
    readonly pageTitle: Locator;
    readonly validUsernames: Array<string>;
    readonly validPassword: string;
    readonly invalidUsername: string;
    readonly invalidPassword: string;
    readonly validUser: string;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByTestId('username');
        this.passwordField = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');     
        this.error = page.getByTestId('error');
        this.pageTitle = page.getByText('Swag Labs', { exact: true});
        this.validUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        this.validPassword = 'secret_sauce';
        this.invalidUsername = 'bad_user';
        this.invalidPassword = 'secret_source';
        this.validUser = this.getUsername(this.validUsernames);
    }

    getUsername(users: Array<string>) {
        return users[Math.floor(Math.random() * users.length)]
    }

    async enterUsername(username: string) {
        await this.usernameField.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async clickLogin() {
        await this.loginButton.click()
    }

    async attemptLogin(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
    
    async login(username: string = this.validUser, password: string = this.validPassword) {
        await this.page.goto('https://saucedemo.com');
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}