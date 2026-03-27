import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type PageFixtures = {
    loginPage: LoginPage;
    authenticatedInventoryPage: InventoryPage;
    authenticatedCartPage: CheckoutPage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        const username = process.env.TEST_USERNAME!;
        const password = process.env.TEST_PASSWORD!;
        await loginPage.login(username, password);
        await use(loginPage);
    },

    authenticatedInventoryPage: async ({ loginPage }, use) => {
        const inventoryPage = new InventoryPage(loginPage.page);
        await use(inventoryPage);
    },

    authenticatedCartPage: async ({ authenticatedInventoryPage }, use) => {
        const checkoutPage = new CheckoutPage(authenticatedInventoryPage.page);
        await use(checkoutPage);
    },
});

export { expect } from '@playwright/test';
