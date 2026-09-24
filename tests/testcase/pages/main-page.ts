// Locator: Playwrightでページ上の要素を指し示すためのオブジェクトの型
// Page: ブラウザの1つのタブ（ページ）を表す型。コンストラクタの引数の型として使う
import { Locator, Page } from "@playwright/test";
// トップページの要素のセレクタをまとめたクラス
import { MainPageLocators } from "../locators/main-page-locators";
// BasePageを継承することで、テストから渡されたpageを保持できるようになる
import { BasePage } from "../base/base-page";

// Python.orgのトップページに対する操作をまとめたクラス（Page Object）
// ※テスト(specs)からは「何をするか」だけを呼び出し、「どの要素をどう操作するか」はこのクラスに閉じ込める
export class MainPage extends BasePage {
    // インスタンス生成時（new MainPage(page)）にテストからpageを受け取る
    constructor(page: Page) {
        // super: 親クラス（BasePage）のコンストラクタを呼び出すキーワード
        // 受け取ったpageを親クラスに渡して保持してもらうことで、このクラスのメソッド内で this.page が使えるようになる
        super(page); // BasePageのコンストラクタを呼び出し、pageを保持する
    }

    // 検索ボックスに「unittest」と入力する
    async inputTextBox(): Promise<void> {
        // 検索ボックスの要素を取得する
        const locator : Locator = this.page.locator(MainPageLocators.TEXT_BOX);
        // ページの描画が完了するのを待つため5秒間待機する（動作確認用。通常のテストでは固定の待機は推奨されない）
        await this.page.waitForTimeout(5000)
        // 検索ボックスに検索ワードを入力する
        await locator.fill("unittest");
    }

    // 「GO」ボタンをクリックして検索を実行する
    async clickGoButton(): Promise<void> {
        // GOボタンの要素を取得する
        const locator : Locator = this.page.locator(MainPageLocators.GO_BUTTON);
        // 5秒間待機する（動作確認用）
        await this.page.waitForTimeout(5000)
        // GOボタンをクリックし、検索結果ページへ遷移する
        await locator.click();  
    }
}
