### 概要

React開発の3手法それぞれにおけるパフォーマンス・保守性などの比較

- 設計指針に基づいてコンポーネント化した場合
- 指針を設けずにコンポーネント化した場合
- コンポーネント化をしていない場合(現状のコード)

### 研究目的
コンポーネント化が推奨されているものの、設計手法の選択が実際に与える影響を十分に把握できていないため、比較実験によりそれぞれのメリット・デメリットを理解する

### 手法
本研究では、UIを基準にした設計手法である、AtomicDesignを使用する

### システム構成
- フロントエンド　JavaScript,React
- バックエンド Golang,ngnix
- DB SQlite

### 画像イメージ
![RecipeSelection](https://github.com/user-attachments/assets/48ad22b4-d769-4e78-bb33-a9bfac7ddf46)
![CookProcess](https://github.com/user-attachments/assets/00a3bb99-f4fc-4317-a2e7-ec5b8efa5f84)

### 実行方法
```bash
git clone https://github.com/ruirui14/makeck_front_atomic.git
```
```bash
npm install
```
```bash
npm run dev
```

### 評価・結果
## AtomicDesignのメリット
ATOMSを全て完成させたあとはそれぞれを組み合わせてUIを作れる
## AtomicDesignのデメリット
設計段階でUIの再利用を意識しないとコンポーネントが増えすぎてしまう

### まとめ
- AtomicDesignの使用有無は関係なくコンポーネント化することで変更箇所は減少する
- AtomicDesignに沿って開発しても描画は速くなるとは限らない
- AtomicDesignに沿って開発しても再利用率は上がるとは限らない

### 今後の課題
現在の設計では、AtomicDesignの過剰なレンダリングを招くため、設計を修正した上でパフォーマンスを再計測を行う

### 参考文献

