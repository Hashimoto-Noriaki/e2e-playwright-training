// Python.orgの検索結果ページに関する処理
export class SearchResultPage {
    // 検索結果が1件以上あるかどうかを判定する
    // ページ全体のHTMLを取得し、「No results found.」という文言が含まれていなければ結果ありとみなす
    async isResultsFound(): Promise<boolean> {
        const locator = await this.page.content();
        return! content.includes("No results found.");
    }
}
