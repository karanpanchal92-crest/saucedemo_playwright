import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly checkout_button: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.checkout_button = this.get_checkout_button();
    }

    async goto(): Promise<void> {
        const cart_page = this.page.getByTestId("shopping-cart-link");
        await cart_page.click();
        await this.page.waitForLoadState("domcontentloaded");
    }

    async get_all_items_in_cart(): Promise<Locator> {
        let cart_items:Locator = this.page.getByTestId("inventory-item");
        return cart_items;
    }

    async fetch_item_by_name(name: string): Promise<Locator | null> {
        let cart_items = await this.get_all_items_in_cart();
        for (let i = 0; i < await cart_items.count(); i++) {
            let item = cart_items.nth(i);
            let item_name = item.getByTestId("inventory-item-name");
            if (await item_name.textContent() === name) {
                return item;
            }
        }
        return null;
    }

    get_checkout_button(): Locator {
        let cart_checkout_button:Locator = this.page.getByRole("button", { name: "Checkout" });
        return cart_checkout_button;
    }
    
    async click_checkout_button(): Promise<void> {
        await this.checkout_button.click();
    }

    async is_checkout_button_visible(): Promise<boolean> {
        await this.checkout_button.waitFor({ state: 'visible' });
        return await this.checkout_button.isVisible();
    }
}
