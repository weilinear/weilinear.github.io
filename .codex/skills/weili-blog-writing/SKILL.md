---
name: weili-blog-writing
description: Draft, revise, or publish technical posts for Wei Li's Notion-backed personal blog. Use when turning project work, experiments, or technical notes into a candid first-person article; do not use for generic marketing copy or unrelated documentation.
---

# Wei Li Blog Writing

Turn real technical work into a readable first-person build log. Preserve the author's judgment, uncertainty, and concrete experience instead of polishing the piece into generic AI prose.

Before drafting, read [references/voice.md](references/voice.md). When the task includes Notion publishing, covers, or the website repository, also read [references/publishing.md](references/publishing.md).

## Working method

1. Establish the factual spine from the conversation, repository, test output, and measured results. Do not invent motivations, failures, metrics, or lessons.
2. If Notion is available, sample two or three relevant published BLOG posts before drafting. Use them to calibrate voice, not to copy wording or assume every old post is complete.
3. Draft around the actual question or friction that started the work. Explain how the design changed as evidence arrived.
4. Keep enough implementation detail for a technical reader to understand the boundary, reproduce the setup, or evaluate the tradeoff.
5. Revise once specifically for human voice. Remove generic framing, repetitive summaries, excessive lists, inflated claims, and sentences that merely announce importance.
6. Treat drafting, publishing, generating a cover, committing assets, and pushing Git as separate actions. Never infer authorization for an external mutation from permission to write a draft.

## Deliverable

Return or publish a complete article with a specific title and a short description. Prefer a modest number of descriptive headings, short paragraphs, and code only where it gives the reader something reusable. Keep links close to the claims or resources they support.

When publishing, verify the page properties, body, status, and cover after the write. Report the final page URL and any repository commit created for its assets.
