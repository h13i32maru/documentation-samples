# YUIDoc
- http://yui.github.io/yuidoc/
- https://github.com/yui/yuidoc
- 開始
  - https://github.com/yui/yuidoc/commit/34e0cc1e1186489120b2b8826877f51fa179c1b1
  - 2006/10/5
- オーナー
  - https://github.com/okuryu
- バージョン 2015/10/11
  - npm: 0.9.0
  - github: https://github.com/yui/yuidoc/commit/05cdbf81542a4eb4a3acf19e9037f640691f5919

# ES対応状況
- YUIDocはシンタックスを参照していないので、ES5/6/7でも特に問題ない

# 特徴
## タグ
- 40種類ほど
- DOMを意識したタグが合ったりする
- JSDocとはちょっと語彙が違うものもある

## Server Mode
- ローカルに専用サーバを立ち上げて、コードが更新されるたびにドキュメントを更新する
- live reloadではないようなので、自分でリロードする感じ
- いわゆるwatch機能

## Parsed Data
- ``config.options.external``で外部のパース結果を取り込める

## Comment Driven
- コードのシンタックスを参照せずコメントだけでドキュメントを作っている
- なので、コードで表現できていることもドキュメントの書かないと行けないので二重管理で手間がある
- ただし、そのおかげでES6でもES7でも対応できる

## テーマ
- `` -T, --theme <simple|default> Choose one of the built in themes (default is default)``
  - 組み込みで2種類のテーマがある
- ``-t, --themedir <directory path> Path to a custom theme directory containing Handlebars templates``
  - handlebars形式のテンプレを使って好みのHTML作れる

## Coffee対応
- ``--syntaxtype <js|coffee> Choose comment syntax type (default is js)``

## Lint
- `` --lint Lint your docs, will print parser warnings and exit code 1 if there are any``
- これつけると全然動かなくなってしまう。よくわからない。

