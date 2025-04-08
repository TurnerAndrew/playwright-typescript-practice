import { test, expect } from '../fixtures/logged-in-user'
import { ProductPage } from '../pages/product-page';

test.describe('product page tests', () => {

    test.beforeEach(async ({ loggedInPage }) => {
        await loggedInPage.login();
    });

    test('can add item to cart', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.addItemToCart(productPage.addBackpack);
        await expect(productPage.removeBackpack).toBeVisible();
        await expect(productPage.cartIcon).toHaveText('1');
    });

});

