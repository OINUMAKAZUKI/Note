## 参考

- [cookpad](https://github.com/cookpad/styleguide/blob/master/java.ja.md#imports)<br>
- [google.github.io](https://google.github.io/styleguide/javaguide.html#s2.1-file-name)<br>
- [google.code.style](http://source.android.com/source/code-style.html)<br>
- [Android開発のマイベストプラクティス](http://qiita.com/k-yamada@github/items/08fee683b372def7e769)<br>

## 目次

* [命名規則](link)

## Java コーディング規約
### Java 全般ルール
#### インポートについて
* 不要なimport文は削除すること。
* 可能な限り * での import 文は書かないこと。

#### インデントについて
* ブロックのインデントにはスペース4つを使うこと。
* 関数呼び出しと引数を含んだ行の折り返しは、スペース8つでインデントすること。

#### 空白について
* 行末に空白を置いてはならない。
* カンマ、セミコロン、キャスト演算子の直後には空白を置くこと。

#### 空行について
* ファイルの末尾に空行を置いてはならない。

#### 改行について
* ファイルの末尾は空白を置いてはならない。
* 行の途中で改行するときには演算子の直前で改行すること。

#### 中括弧について
* 直前にトークンがある場合は中括弧で行を始めてならない。中括弧はそのトークンと同じ行に置くようにすること。

```java
// ○ Good
class MyClass {
    int func() {
        if (something) {
            // ...
        } else if (somethingElse) {
            // ...
        } else {
            // ...
        }
    }
}

// × Bad
class MyClass
{
    int func()
    {
        if (something)
        {
            // ...
        }
        else if (somethingElse)
        {
            // ...
        }
        else
        {
            // ...
        }
    }
}
```

```java
// ○ Good
if (condition) {
    body();
}

// × Bad
if (condition)
    body();
```

#### フィールド（メンバ変数）の命名規則
```java
//非パブリック・非スタティックは頭にmを
private int mPrivate

//スタティックは頭にsを
private static MyClass sSingleton;

//定数は大文字と_のみ使用
public static final int SOME_CONSTANT = 42;
```

#### 名前における頭字語 (アクロニム)
* 頭字語や略語は単語として扱うこと。

```java
// ○ Good
XmlHttpRequest
getCustomerId
class Html
String url
long Id

// × Bad
XMLHTTPRequest
getCustomerID
class HTML
String URL
long ID
```


### Android 開発上のルール
##### 括弧は行の最後につける（空白も開ける）
```java
　for (int i = 0; i < 10; i++) {
　　　　Log.d("TAG", "count = " + i);
　}
```


##### クラスの変数（メンバ）には、prefix（先頭）に 'm' をつける。
`※ ただし、boolean の場合は「is + 形容詞」「can + 動詞」「has + 過去分詞」「三単現（三人称単数現在）動詞」「三単現動詞 + 名詞 の形で名前をつける`
```java
　/* クラス変数 */
　private int mCount;

　/* Boolean の場合 基本的には is をよく使っている */
　// true → 中身が空、false → 中身が空じゃない
　private boolean isEmpty = false;
　// true → 飛べる、false → 飛べない
　private boolean canFly = false;
　// true → 変更してる、false → 変更してない
　private boolean hasChanged = false;
　// true → 存在する、false → 存在しない
　private boolean exists = false;
　// true → 子を持ってる、false → 子を持っていない
　private boolean hasChild = false;
```

##### 基本的に変数にはprivate をつける
`※ private をつける理由として、他人が見たときに、「この変数はこのクラス（ファイル）でしか使えないんだ！」というのをわかりやすくするため。 他のクラスに変数の値を渡したい場合は、関数をpublic 化してあげて、渡してあげる`
```java 
　private int mCount = 0;

　public int getCount() {
　　　　return mCount;
　}
```


##### View を定義するときはクラスの内の最上位に定義する。
```java
import android.*
/* ~以下省略~ */

public class MainActivity extend Activity {
    
    /* ~View の定義~ */
    Button mButton;
    TextView mTextView;
    ListView mListView;
    
    @Override
    public void onCreate(bundle b) {
        super.onCreate(b);
        setContentView(R.layout.activity_main);
    }
}
```


### GitHub のルール
##### branch について
 - master 本番用 
 - develop 実装用 

`※ 基本的にはdevelop ブランチを利用して実装を行う`

##### コミットルールについて
実装する機能を分解して、小さなまとまりをコミットしていく

分解例: コメント機能を実装する場合
 - Layout の実装
 - 入力部分の実装 (Event の実装）
 - 出力部分の実装

`※ もっと細かくできればベスト！`
