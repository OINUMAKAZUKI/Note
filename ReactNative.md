## 環境構築手順
### 1. homebrew をインストール
**Xcode をインストール**

コマンドラインで以下実行
```
$ xcode-select --install
```

Admin ユーザーに切り替える必要があるため、システム担当の方に連絡する 以下を実行して、homebrew をインストール
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
https://qiita.com/pypypyo14/items/4bf3b8bd511b6e93c9f9
```

### 2. nodebrew 設定

nodebrew をインストール
```
$ brew install nodebrew
```

nodebrew がインストールされたか確認
```
$ nodebrew -v
```

環境変数にnodebrew 関連を追加
```
$ echo "export PATH=$HOME/.nodebrew/current/bin:$PATH" >> ~/.bash_profile
$ source ~/.bash_profile
```

Node.js インストールできるように setup
```
$ nodebrew setup
```

### 3. Node をインストール

Node のインストールできるバージョンを確認
```
$ nodebrew ls-all
```

Node の安定板をインストール
```
$ nodebrew install-binary stable
```

使用するNode を指定
```
$ nodebrew use stable
```

*参考: https://qiita.com/33yuki/items/bae442fa6314bd8f9d7a

### 4. react-native をインストール

react-native をインストール
```
$ npm install -g react-native-cli
```

*参考: https://facebook.github.io/react-native/docs/getting-started
