import { test, expect } from '../fixtures/test-fixtures';

test.describe('Checkout Flow', () => {
    test('should add item to cart and verify checkout button', async ({ authenticatedInventoryPage, authenticatedCartPage }) => {
        const itemName:string = 'Sauce Labs Backpack';

        await test.step('Find and add item to cart', async () => {
            await authenticatedInventoryPage.add_inventory_item_to_cart(itemName);
        });

        await test.step('Navigate to cart and verify item', async () => {
            const cartItem = await authenticatedCartPage.fetch_item_by_name(itemName);
            expect(cartItem, `Item "${itemName}" should be in cart`).not.toBeNull();
        });

        await test.step('Verify checkout button is visible', async () => {
            await authenticatedCartPage.goto();
            const isCheckoutButtonVisible = await authenticatedCartPage.is_checkout_button_visible();
            expect(isCheckoutButtonVisible, 'Checkout button should be visible').toBe(true);
        });
    });
});
