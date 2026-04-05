#!/bin/bash
# docs/README.md 編集時に自動でlint実行

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [[ "$FILE_PATH" == */docs/README.md ]]; then
  echo "lint: docs/README.md の変更を検出、lint実行中..." >&2
  cd "$(dirname "$0")/../.." || exit 0
  npm run lint 2>&1 | tail -20 >&2
fi

exit 0
