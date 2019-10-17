## bazel インストール手順 
### バイナリインストーラーを使用したインストール

1. xcode コマンドラインツールインストール
```
sudo xcodebuild -license accept
```

2. bazel インストーラーをダウンロード
```
https://github.com/bazelbuild/bazel/releases
> bazel-1.0.0-installer-darwin-x86_64.sh
```

3. インストーラーを実行
```
> chmod +x bazel-<version>-installer-darwin-x86_64.sh
> ./bazel-<version>-installer-darwin-x86_64.sh --user
```

4. 環境をセットアップ
```
> export PATH="$PATH:$HOME/bin"
// 確認
> bazel --version
```

### Homebrew を使用したインストール
1. Homebrew インストール
```
> /usr/bin/ruby -e "$(curl -fsSL \
https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. bazelパッケージをインストール
```
> brew tap bazelbuild/tap
> brew install bazelbuild/tap/bazel
```

3. 環境を確認
```
> bazel --version
```

アップグレード方法
```
> brew upgrade bazelbuild/tap/bazel
```
