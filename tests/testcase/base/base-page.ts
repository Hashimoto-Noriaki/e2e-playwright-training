// Page: Playwrightでブラウザの1つのタブ（ページ）を表す型。要素の取得・画面遷移・待機などの操作はこのオブジェクト経由で行う
import { Page } from "@playwright/test";

// すべてのPage Object（MainPage、SearchResultPageなど）の共通の親クラス
// ※各ページクラスがこのクラスを継承（extends BasePage）することで、pageの受け取りと保持を毎回書かずに済む
export class BasePage {
    // テストから渡されたページ（タブ）を保持する
    // ※protectedにすることで、このクラスと継承した子クラスの中からだけ this.page として使える（外部からは触れない）
    protected page: Page;

    // インスタンス生成時（new MainPage(page) など）にテストのpageを受け取り、プロパティに保存する
    constructor(page: Page) {
        this.page = page;
    }
}
