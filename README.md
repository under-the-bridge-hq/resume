# 職務経歴書

[![markdown lint](https://github.com/under-the-bridge-hq/resume/actions/workflows/lint.yaml/badge.svg)](https://github.com/under-the-bridge-hq/resume/actions/workflows/lint.yaml)
[![PDF](https://github.com/under-the-bridge-hq/resume/actions/workflows/release.yaml/badge.svg)](https://github.com/under-the-bridge-hq/resume/actions/workflows/release.yaml)
[![pages-build-deploymen](https://github.com/under-the-bridge-hq/resume/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/under-the-bridge-hq/resume/actions/workflows/pages/pages-build-deployment)

## ファイル

- [経歴書 Markdown](https://github.com/under-the-bridge-hq/resume/blob/main/docs/README.md)
- [GitHub Pages](https://github.com/under-the-bridge-hq/resume#:~:text=kaz%2Dunder%2Dthe%2Dbridge.github.io/resume/)
- [PDF](https://github.com/under-the-bridge-hq/resume/releases)

## セットアップ

- go task(task runner)のinstall
[参照](https://taskfile.dev/installation/)

- 周辺ツールのインストール

```bash
cd /$project_root
task install_tools
```

## ローカルプレビュー

### Dev Container を使う場合（推奨）

1. Visual Studio Code で "Reopen in Container" を実行
2. コンテナが起動したら自動で `bundle install` が実行される
3. サーバーを起動:

```bash
task serve
```

1. <http://localhost:4000> にアクセス

### 直接実行する場合

```bash
bundle install
task serve
```

## 編集したら

```bash
task # defaultはlinterのlocal実行と、tag versionを生成してremoteへコードとtagをpushする
```
