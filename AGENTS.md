<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 日本語コピーの品質基準

サイトに載る日本語(src/data/ontology.ts の ja テキスト、UI文言)には優先順位がある:

1. **本人の既存文章を最優先で流用する**(portfolio-2025 の src/i18n/dictionaries、note.com)。AI臭対策として最も効くのは本人の声そのもの。
2. 新規に書く場合のみ、`.claude/skills/stop-ai-slop-jp/SKILL.md` の基準でレビューしてから確定する。特に:

- 体言止めを連発しない(リズムのムラを作る)
- 全角ダッシュ、普通語の「」囲み、3項並列を使わない
- 主体を明示する(false agency を作らない)
- 中間温度の表現を混ぜ、全文をキメ台詞で終わらせない

E2E が日本語文言に依存しているため(「プロフィール全文」「プロダクトエンジニア」「経歴」など)、該当文字列を変える場合は e2e/smoke.spec.ts も更新する。
