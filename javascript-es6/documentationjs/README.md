# Documentation.js
- http://documentation.js.org/
- https://github.com/documentationjs/documentation
- 開始
  - https://github.com/documentationjs/documentation/commit/14e03d175f9ee59ed8b205261843b985fec8993f
  - 2015/03/10
- オーナー
  - https://github.com/tmcw

# ES対応
- ES5
  - 対応
- ES6
  - 対応してるけど、微妙
  - class構文やextendsなどに対応していない
  - 出力されるドキュメントも関数をメインターゲットにしてる感じで、構造化されていない
- ES7
  - 未対応

# 特徴
## コードベース
- ES5かつ関数ベース

## 出力
- HTML, Markdown, JSONにだせる
- うーん、出力全然よくない

## C++サポート
- Nodeのnative moduleにもドキュメントかける

## crawl require()
- requireをクロールして依存しているコードを自動的にみつけてドキュメント化する
- node_modules配下までみるのだろうか？

## Lint
- `` --lint         check output for common style and uniformity mistakes``

## テーマ
- ``-t, --theme    specify a theme: this must be a valid theme module``
  - https://github.com/documentationjs/documentation/blob/master/docs/THEME_HTML.md

## overload
- 同じメソッドでも引数のあるなしでドキュメントを書き分けられる
  - e.g. ``jQuery.fn.text``

## Build Server
- https://github.com/documentationjs/dev-documentation
- これを立ち上げながらドキュメントを書くとリアルタイムで更新されていく
- YUIDocのServer Modeみたいなかんじ

## カバレッジ
- https://github.com/documentationjs/documentation-coverage
- こんなのも見つけたけど、使い方わからない

# 結果
- ES6に対応してるって書いてあるけど、JSDocと同じ程度
  - パースエラーにならないだけみたいな感じ
- C++の方は試していない
- documentation.js自体の使い方のドキュメントがわかりにくい
