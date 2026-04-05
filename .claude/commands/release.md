---
description: ドラフトリリースにタグを付与して公開します。
model: haiku
allowed-tools:
  - Bash(~/.local/bin/gh-wrapper.sh:*)
  - Bash(~/.local/bin/git-wrapper.sh:*)
---
# ドラフトリリースをタグ付きで公開する

## Instruction
1. ドラフトリリースを確認してください。
   !~/.local/bin/gh-wrapper.sh release list

2. ドラフトリリースが存在しない場合は、「ドラフトリリースが見つかりません」と表示して終了してください。

3. 最新のタグを取得してください。
   !~/.local/bin/git-wrapper.sh tag --sort=-v:refname | head -1

4. 最新タグのパッチバージョンをインクリメントした新しいタグ名を決定してください（例: v1.1.8 → v1.1.9）。

5. ドラフトリリースを、新しいタグを付与して公開してください。`--tag`でタグを設定し、`--draft=false`でドラフトを解除し、`--title`でリリース名を更新します。
   !~/.local/bin/gh-wrapper.sh --raw release edit <ドラフトリリースのタグまたはタイトル> --tag <新しいタグ> --title "Release <新しいタグ>" --draft=false

6. 公開したリリースの情報を表示してください。
   !~/.local/bin/gh-wrapper.sh release view <新しいタグ>
