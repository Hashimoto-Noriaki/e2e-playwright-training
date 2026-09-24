import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { SearchResultPage } from '../pages/search-result-page';

test('search document', async ({ page }) => {
    await page.goto('https://www.python.org/');

    const mainPage = new MainPage(page);
    await mainPage.inputTextBox();
    await mainPage.clickGoButton();

    const searchResultPage = new SearchResultPage(page);
    const result = await searchResultPage.isResultsFound();

    expect(result).toBe(true);
})
