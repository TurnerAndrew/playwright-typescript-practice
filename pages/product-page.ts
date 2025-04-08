import { expect, type Locator, type Page } from '@playwright/test'

export class ProductPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly addBackpack: Locator;
    readonly removeBackpack: Locator;
    readonly cartIcon: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByTestId('title');
        this.addBackpack = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.removeBackpack = page.getByTestId('remove-sauce-labs-backpack');
        this.cartIcon = page.getByTestId('shopping-cart-badge');
    }

    async addItemToCart(item: Locator) {
        await item.click();
    }

}