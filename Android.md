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


##### 定数には final を書き、定数名は大文字にする
```java
　public final int COUNT_MAX = "10"
```


##### 基本的に変数にはprivate をつける
`※ private をつける理由として、他人が見たときに、「この変数はこのクラス（ファイル）でしか使えないんだ！」というのをわかりやすくするため。 他のクラスに変数の値を渡したい場合は、関数をpublick 化してあげて、渡してあげる`
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
