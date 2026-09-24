// Page: ブラウザの1つのタブ（ページ）を表す型。コンストラクタの引数の型として使う
import { Page } from "@playwright/test";
// BasePageを継承することで、テストから渡されたpageを保持できるようになる
import { BasePage } from "../base/base-page";

// Python.orgの検索結果ページに関する処理
// ※BasePageを継承（extends）しているため、this.page で親クラスが保持しているpageを使える
export class SearchResultPage extends BasePage {
    // インスタンス生成時（new SearchResultPage(page)）にテストからpageを受け取る
    constructor(page: Page) {
        // 親クラス（BasePage）のコンストラクタを呼び出し、pageを保持してもらう
        super(page);
    }
    // 検索結果が1件以上あるかどうかを判定する
    // ページ全体のHTMLを取得し、「No results found.」という文言が含まれていなければ結果ありとみなす
    async isResultsFound(): Promise<boolean> {
        // content(): 現在表示しているページ全体のHTMLを文字列で取得する
        const content = await this.page.content();
        // includes()で「No results found.」が含まれているかを調べ、! で結果を反転する
        // （含まれていない → true = 検索結果あり / 含まれている → false = 検索結果なし）
        return !content.includes("No results found.");
    }
}
