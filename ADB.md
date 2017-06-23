
### Realm ファイルをアプリから取得する手順
1. adb を入れる
2. adb shell で中に入る
3. run-as com.sample.app(パッケージ名)
4. ls files | grep realm で .realm ファイルの確認
5. chmod 755 xxx.realm 権限付与
5. pwd で現在のディレクトリーを表示、コピー
6. ctl + d でrun-as した状態を抜け出す。
7. cd (コピーしたディレクトリー) 移動する
8. cat /xxx.realm > /sdcard/xxx.realm でSDカードにコピー
9. ctl + d でshell に入った状態を抜け出す。
10. adb pull /sdcard/xxx.realm /Users/username/Desktop でローカルPC のデスクトップに保存


### よく使う adb (メモ）
// uninstall 
```
adb uninstall com.sample.app
```
// データ削除
```
adb shell pm clear com.sample.app
```
// パッケージ一覧
```
adb shell pm list packages
```
// 起動
```
adb shell am start \ -n com.sample.app/com.sample.app.MainActivity
```

// アプリ内に入る
```
run-as com.sample.app(パッケージ名)
```
