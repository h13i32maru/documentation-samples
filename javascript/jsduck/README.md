# JSDuck
- https://github.com/senchalabs/jsduck

# ES対応
- そもそもExtJSをターゲットにしているので良くわからない

# 特徴
## タグ
- 50個程度

## ExtJS
- ExtJSに特化しているので、``Ext.define()``とかから必要な情報を読み取って、タグをなるべく書かなくても良くなってる
- https://github.com/senchalabs/jsduck/wiki/Guide#classes

## Ruby
- Rubyで書かれている
- JSのパーサは[RKelly](https://github.com/tenderlove/rkelly)

## SCSS
- SCSSにもコメントかける
- https://github.com/senchalabs/jsduck/wiki/Guide#scss-variables-and-mixins

## リソース
- 画像や動画を埋め込める
- https://github.com/senchalabs/jsduck/wiki/Guide#images
- https://github.com/senchalabs/jsduck/wiki/Guide#videos

## Guide
- 任意のMarkdownファイルを埋め込める
- JSDocのtutorial, ESDocのmanualみたいなの
- https://github.com/senchalabs/jsduck/wiki/Guides

## Custom Tag
- Rubyのコードを書いてタグを追加できる
- https://github.com/senchalabs/jsduck/wiki/Custom-tags

# 結果
- jsduck入れられなかったので良くわからん

```
(gh-pages)h13i32maru@local[16:06:32]:~/work/documentation-samples/javascript-es6/jsduck
$ sudo gem install jsduck
Password:
ERROR:  Could not find a valid gem 'jsduck' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - Errno::ETIMEDOUT: Operation timed out - SSL_connect (https://rubygems.org/latest_specs.4.8.gz)
ERROR:  Possible alternatives: jsduck
```
