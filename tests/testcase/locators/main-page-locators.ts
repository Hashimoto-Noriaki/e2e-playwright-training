// Python.orgのトップページで使う要素のセレクタ（CSSセレクタ文字列）をまとめたクラス
// ※セレクタをページ操作のクラス(pages)から分離しておくことで、画面の変更時はこのファイルだけ直せばよくなる
export class MainPageLocators {
    // ヘッダーにある検索ボックス（<input id="id-search-field">）
    // ※CSSのIDセレクタは大文字・小文字を区別するため、"id-search-field"と正確に書く必要がある
    static readonly TEXT_BOX = "#id-search-field";
    // 検索ボックスの横にある「GO」ボタン（<button id="submit">）
    static readonly GO_BUTTON = "#submit";
}
