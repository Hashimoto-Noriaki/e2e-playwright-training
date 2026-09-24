export class SearchResultPage {
    async isResultsFound(): Promise<boolean> {
        const locator = await this.page.content();
        return! content.includes("No results found.");
    }
}
