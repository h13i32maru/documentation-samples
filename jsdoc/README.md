# JSDoc
- http://usejsdoc.org/
- https://github.com/jsdoc3/jsdoc
- 開始
  - https://github.com/jsdoc3/jsdoc/commit/bf9c65d03d5c347900422dba5876c087ae38d3fc
  - 2010/03/13
  - [JSDoc SourceForge](http://sourceforge.net/projects/jsdoc/) によると 2001-07-06 にはあったらしい
  - その次はJSDoc Toolkitとしてgoogle codeでホストされていて
  - いまはv3としてgithubでホストされている
- オーナー
  - https://github.com/hegemonic
- バージョン 2015/10/11
  - npm: 3.3.3
  - github: https://github.com/jsdoc3/jsdoc/commit/bd1cb9d1663bdccc68f1ba242a7882f020e78a03

# 特徴
## ES対応
- ES5
  -対応
- ES6
  - まだサポートしていない
  - https://github.com/jsdoc3/jsdoc/issues/555 で進行中
  - 3.3.4で対応予定
  - 今のところ``npm install jsdoc3/jsdoc``で直接githubからインストールする
- ES7
  - 未対応

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

## 結果
- 歴史があるだけあって、いろいろ揃ってる
- ES6対応が正式に入れば良さそう
- でもコードベースがES5のままだし、rihnoも入ってるし、メンテが厳しそう
- 出力されるHTMLはあまり見やすくない
