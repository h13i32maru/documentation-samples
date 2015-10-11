# JSDoc
- http://usejsdoc.org/
- https://github.com/jsdoc3/jsdoc
- first commit
  - https://github.com/jsdoc3/jsdoc/commit/bf9c65d03d5c347900422dba5876c087ae38d3fc
  - 2010/03/13
- owner
  - https://github.com/hegemonic
- バージョン 2015/10/11
  - npm: 3.3.3
  - github: https://github.com/jsdoc3/jsdoc/commit/bd1cb9d1663bdccc68f1ba242a7882f020e78a03

# ES対応状況
## ES5サポート
- メインでサポートしている

## ES6サポート
- まだサポートしていない
  - https://github.com/jsdoc3/jsdoc/issues/555 で進行中
  - 3.3.4で対応予定
  - 今のところ``npm install jsdoc3/jsdoc``で直接githubからインストールする

## ES7サポート
- サポートしてない

# 特徴
## タグ
- ES5をターゲットにしているということもあってタグがめっちゃ豊富
  - 60種類以上のタグ
- タグの辞書を持ってる
  - jsdoc標準とclosure compilerの二種類

## チュートリアル機能
- 任意のmarkdown/htmlファイルをチュートリアルとしてドキュメントに含められる
- チュートリアルへのリンクは``@tutorial tutorial-name`` or ``@{tutorial tutorial-name}``を使う

## テンプレート機能
- ``config.opts.template: path/to/template``を使うことで別のテンプレートを使うことができる
- プロトコルとしては``publish``という名前の関数をエクスポートしてるファイル
- その関数のなかで受け取ったデータを元にHTMLを生成する

```javascript
exports.publish = function(taffyData, opts, tutorials){};
```

## プラグイン
- タグを見つけたり、パースしたり、コメント開始時などのイベントをフックしてプラグインを作れる
- http://usejsdoc.org/about-plugins.html
- でもこれだけだと独自のタグを追加してもドキュメント上にいい感じに表示できないのでは？
  - テンプレート部分も自分で作る必要がありそう

