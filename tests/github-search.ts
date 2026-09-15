// ブラウザエンジンとは、HTML/CSS/JavaScriptを解釈してページを描画・動作させる中核ソフトウェア
// （例: Chromium系はChrome/Edge、WebKitはSafari、GeckoはFirefoxが採用）
// chromium: Playwrightが自動操作できるブラウザエンジンの一つ（Google ChromeやMicrosoft Edgeのベースになっているエンジン）
// これをインポートすることで、Chromiumブラウザを起動・操作できるようになる
import { chromium } from "playwright"

// GitHubのトップページで検索ボタンをクリックするまでの一連の処理を行う関数
async function githubSearch(){
    // ヘッドレスモードを無効にしてブラウザを起動する（画面を表示して動作を確認するため）
    const browser = await chromium.launch({ headless: false});
    // 新しいページ（タブ）を開く
    const page = await browser.newPage();
    // GitHubのトップページへ遷移する
    await page.goto("https://github.com");

    // ヘッダーにある検索ボタン（「Search or jump to」というaria-labelを持つボタン）の要素を取得する
    // ※GitHubのCSSクラス名はビルドごとに変わるハッシュ付きの値のため、aria-labelで要素を特定する
    const searchButton = page.getByRole('button', { name: /search or jump to/i });
    // ページの描画が完了するのを待つため5秒間待機する
    await page.waitForTimeout(5000);
    // 検索ボタンをクリックして検索用の入力ダイアログを開く
    await searchButton.click();

    // 検索ダイアログ内の入力欄（placeholderで特定する）を取得する
    const searchBox = page.getByPlaceholder('Search or jump to...');
    await page.waitForTimeout(5000);
    await searchBox.fill('playwright');
    await page.waitForTimeout(5000);
    await searchBox.press('Enter');

    //10秒間の待機時間(通常のテストでは固定のテストの待機は推奨されないが、今回は動作確認のために使用)
    await page.waitForTimeout(1000);
    await page.close();
    await browser.close();
}

githubSearch();