# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

職務経歴書をMarkdownで管理し、GitHub Pages（Jekyll）でWeb公開、PDF生成するリポジトリ。

## コマンド

```bash
# 依存関係インストール
npm install

# Lint実行（textlint + markdownlint）
npm run lint

# PDF生成（md-to-pdf使用、puppeteerでA4レンダリング）
npm run build:pdf

# Jekyllローカルプレビュー（要: cd docs && bundle install を事前実行）
task serve

# Jekyllビルド（docs/配下で実行）
task build
```

## ファイル構成

- `docs/README.md` - 経歴書の本体（編集対象）
- `.textlintrc.json` - 日本語の文章校正ルール
- `.markdownlint.jsonc` - Markdownフォーマットルール
- `pdf/config.js` - PDF出力設定

## Lint設定の特徴

### textlint

- 日本語校正に特化（句読点、助詞重複、冗長表現など）
- `max-kanji-continuous-len: 6`（漢字連続6文字まで、`allow: ["普通自動車第一種運転免許"]`）
- `sentence-length: 150`（1文150文字まで）
- `textlint-filter-rule-comments` 有効: `<!-- textlint-disable -->` / `<!-- textlint-enable -->` でインライン無効化可能

### markdownlint

- `MD013`: 行長250文字（テーブル対応）
- `MD025`, `MD033`, `MD036`, `MD041`: 無効化（柔軟な見出し・テーブル記法のため）

## CI/CD

- PR時に `docs/README.md` 変更でLint実行、Jekyllビルドチェック
- mainマージ時に `docs/README.md` 変更でタグ自動作成 → Jekyll HTML → Puppeteer PDF生成 → リリース公開
- mainマージでGitHub Pagesに自動デプロイ

## 筆者の傾向・思考スタイル

ref: [book_reading/CLAUDE.md](https://github.com/under-the-bridge-hq/book_reading/blob/main/CLAUDE.md)

### 立場・経験

- 日本のミドル〜シニアクラス以上のエンジニア（リードエンジニアまたはマネージャー層）
- **SRE・プラットフォームエンジニア**としての業務が中心
  - CI/CD、ツール整備、信頼性、コンプライアンス等のプラットフォーム寄りのトピックに関心が高い
  - 開発者チームを「顧客」として捉え、彼らの生産性向上・障害削減を自チームの価値として可視化する視点
  - オンコール、ポストモーテム、ランブック整備など信頼性エンジニアリングの実務経験
- マネージャー・リーダー視点から「逆算した行動」を考える思考法

### 核となる概念

#### 情報の非対称性

マネージャーとIC間、評価者と被評価者間、チーム間の認識ギャップ。日本企業では縦割り文化（サイロ）により深刻化しやすい。

- 対策: 戦略会議への参加依頼、PRDを読む時間の確保、他部門との直接対話で**能動的に情報を取りに行く**

#### 信頼資本（Trust Capital）

コミュニケーションと関係構築の土台。影響力の源泉。

- 構成要素: 肩書き・権限、在籍期間、専門知識、実績、**仕事の可視化**
- 「やっても知られなければ蓄積されない」ため、成果の可視化は意識的に行う

#### T字型人材

専門領域の深さだけでなく、周辺技術・オペレーション・隣接領域への**厚み**がアウトプットに寄与する。

### 意思決定・アプローチ

- **課題起点**:「どのプロセス/ツールを導入すべきか」ではなく「最大の課題は何か」から逆算
- **「完璧」より「十分良い」**: 完璧なアーキテクチャーより、現在のビジネスニーズを満たす「十分良い」を選ぶ
- **ワンウェイドア vs ツーウェイドア**: 可逆な決定は素早く、不可逆な決定は慎重に

### リーダー/アーキテクトとしての振る舞い

- **自身がボトルネックにならない**: 他者が自律的に判断できる仕組み・組織をつくる
- **メンターとしての振る舞い**: 答えを与えるのではなく、質問を投げかけ、トレードオフを提示し、相手が自ら決定できるよう導く
- **ビジネス理解**: 技術的判断は常にビジネス目標との整合性を意識。決算の説明会資料や中期経営計画を読み、経営層の投資方針を把握
- **現場感覚の維持**:「象牙の塔のアーキテクト」にならない。コードや技術の現場に留まりつつ戦略的議論にも参加
