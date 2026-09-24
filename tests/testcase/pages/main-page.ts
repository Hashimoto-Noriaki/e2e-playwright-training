import { Locator } from "@playwright/test";
import { MainPageLocators } from "../locators/main-page-locators";

export class MainPage {
    async inputTextBox(): Promise<void> {
        const locator : Locator = this.page.locator(MainPageLocators.TEXT_BOX);
        await this.page.waitForTimeout(5000)
        await locator.fill("unittest");
    }

    async clickGoButton(): Promise<void> {
        const locator : Locator = this.page.locator(MainPageLocators.GO_BUTTON);
        await this.page.waitForTimeout(5000)
        await locator.click();  
    }
}
