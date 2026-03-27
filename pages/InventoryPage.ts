import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
        this.page.waitForTimeout(2000);
    }
    
    async all_inventory_items(): Promise<Locator> {
        return this.page.getByTestId("inventory-item-description");
    }

    async get_inventory_item_by_name(name: string): Promise<Locator | null> {
        let inventory_items = await this.all_inventory_items();
        await this.page.waitForTimeout(4000);
        for (let i = 0; i < await inventory_items.count(); i++) {
            let item = inventory_items.nth(i);
            let item_name = item.getByTestId("inventory-item-name");
            if (await item_name.textContent() === name) {
                return item;
            }
        }
        return null;
    }

    async add_inventory_item_to_cart(itemName: string): Promise<void> {
        const inventoryItem = await this.get_inventory_item_by_name(itemName);
        if (inventoryItem === null) {
            throw new Error(`Item "${itemName}" does not exist on inventory page`);
        }

        const add_to_cart_button = inventoryItem.getByRole("button", { name: "Add to cart" });
        await add_to_cart_button.click();
        await inventoryItem.getByRole("button", { name: "Remove" }).waitFor({ state: 'visible' });
    }

}