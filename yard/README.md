# YARD
- http://yardoc.org/index.html
- https://github.com/lsegal/yard
- 開始
  - https://github.com/lsegal/yard/commit/bd78614f138f758b62ac082d3b24e1a6ec7c9665
  - 2007/02/24

# 特徴
## RDoc
- 互換性あり

## Custom Constructs
- Rubyの動的なコードをドキュメント化するのは難しいけど、そのためにYARDはプラグインで拡張できるようになっている
- 例えばこういうコードがあったときに、``cattr_accessor``に対するドキュメントをどうするかを拡張できる
```ruby
# Sets the publisher name for the list.
cattr_accessor :publisher
```

## Custom Template
- これもプラグインの形で簡単に実現できるらしい

## ローカルサーバ
- ライブリロードあり
- インストールされているgemのドキュメントも配信できる

## Raw Data
- ドキュメントのオブジェクトをraw dataとして保存している(marshal?)
- これをつかって好きなフォーマットに出すことができる

## クエリ
- どのidentifierを対象にするかをクエリ(rubyのコード)という形で指定できる
- https://github.com/lsegal/yard#queries

## YRI
- コマンドラインでドキュメントを参照できる
- たしかPODにもあったきがする？
```
$ yri YARD::Handlers::Base#register
$ yri File.relative_path
```

## グラフ
- クラスの関係やメソッドをグラフにすることができる
```
$ brew install Graphviz
$ yard graph --full -f repo.dot
$ dot -Tpng repo.dot  -o repo.png
```

## diff
- ことなるバージョンのドキュメント間を比較してオブジェクトの追加や削除が行われたかどうかみることができる
- http://gnuu.org/2010/06/26/yard-object-oriented-diffing/

## カバレッジ
- https://github.com/dkubb/yardstick
```
gem install yardstick
yardstick repo/lib/
...
repo/lib/yard/verifier.rb:143: YARD::Verifier#parse_expression: The @api tag should be specified
repo/lib/yard/verifier.rb:143: YARD::Verifier#parse_expression: The @api tag must be either public, semipublic or private
repo/lib/yard/verifier.rb:143: YARD::Verifier#parse_expression: A method with private visibility must have an @api tag of private
repo/lib/yard/verifier.rb:143: YARD::Verifier#parse_expression: The public/semipublic method should have an example specified
repo/lib/yard/verifier.rb:143: YARD::Verifier#parse_expression: The method summary should not end in a period

YARD-Coverage: 54.1%  Success: 10199  Failed: 8641  Total: 18840
``

## doctest
- https://github.com/lsegal/yard-examples/blob/master/doctest/doctest.rb
- これは単なるサンプルなので、自分でつくればできるよという感じぽい

## for perl
- perlのドキュメントをyardで作成できるという謎機能
- https://github.com/pvande/yard-perl-plugin
- ものすごいベータ扱いぽい

## ホスティング
- http://www.rubydoc.info/
- git urlを入れることでホスティングされる

# 結果
- 機能的にはかなりいろいろあるし、拡張もRubyのコード書けばかなりできる感じぽい
- ただし、YARDの使い方自体のドキュメントがちょっとわかりにくい
