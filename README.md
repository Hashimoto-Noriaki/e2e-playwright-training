# playWright-training

Playwright を使った E2E テストのトレーニング用リポジトリです。

## セットアップ

依存パッケージをインストールします。

```bash
npm install
```

Playwright が使用するブラウザ（Chromium / Firefox / WebKit）をインストールします。

```bash
npx playwright install
```

## テストの実行

すべてのテストを実行します。

```bash
npx playwright test
```

ブラウザを表示しながら実行します（ヘッドありモード）。

```bash
npx playwright test --headed
```

特定のファイルのみ実行します。

```bash
npx playwright test tests/github-search.ts
```

特定のブラウザ（プロジェクト）のみで実行します。

```bash
npx playwright test --project=chromium
```

UI モードでテストを実行・デバッグします。

```bash
npx playwright test --ui
```

デバッグモードで実行します。

```bash
npx playwright test --debug
```

## レポートの確認

直近の実行結果の HTML レポートを表示します。

```bash
npx playwright show-report
```

## コード生成

操作を記録してテストコードを自動生成します。

```bash
npx playwright codegen
```

## その他

Playwright のインストール内容やバージョンを確認します。

```bash
npx playwright --version
```
