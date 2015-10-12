# PyDoc
- http://docs.python.jp/3.4/library/pydoc.html
- http://www.ibm.com/developerworks/jp/linux/library/l-cpmod/

# 特徴
## スタイル
- フリースタイル

## pythonコマンドとの統合
- pythonコマンドのreplでhlep()と連携している
- http://symfoware.blog68.fc2.com/blog-entry-884.html
- ``pydoc sys``とかでmanとよく似た形式でターミナル上で見れる
  - yriと同じ

## ローカルサーバ
- ローカルサーバでドキュメントを見られる

## doctest
- pydocで書かれたコメントの中から特定のフォーマットにあうものはテストコードとして実行することができる

# 感想
- doctestでちゃんとドキュメントが生きていることを確認できるのはよい
- replとも連携してるし、言語組み込みの良さをいかしてる
