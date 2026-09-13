# Publishing Workflow

## Sources of truth

- Website repository: `/Users/lw/Work/weilinear.github.io`
- Repository remote: `git@github.com:weilinear/weilinear.github.io.git`
- Public site: `https://blog.weili.me`
- Notion database: `BLOG`
- BLOG database ID: `622b3e61-cde0-4df5-8887-bff7fe4aeed2`
- BLOG data source: `collection://119ec67a-f674-81ed-bfed-000bc39242ba`

These identifiers are workspace-specific conveniences. Fetch the database before every write and use its returned schema rather than assuming it is unchanged.

## Notion

The BLOG database currently uses `title`, `description`, `tags`, `status`, and `publish_date`. Use only options present in the fetched schema. Keep a new page as `draft` unless the user explicitly asks to publish it.

Before replacing content, fetch the current page and make a targeted update that preserves unrelated properties. After any create or update, fetch it again and verify the requested state.

## Covers and other media

Blog assets belong with the blog, not with the project being described.

- Put durable assets under `public/images/blog/<post-slug>/` in the website repository.
- Use lowercase descriptive filenames such as `cover.png` or `worktree-flow.png`.
- Generate wide covers with the important composition in the center so Notion and the website can crop them safely. A width greater than 1500 pixels is preferred.
- Use `https://blog.weili.me/images/blog/<post-slug>/<filename>` once the asset is deployed.
- Do not use an application repository, temporary signed URL, or private Notion upload URL as durable public hosting.
- A native Notion upload is acceptable when the cover only needs to live in Notion; the site sync downloads Notion-hosted images during its build.

Adding or pushing an asset is an external repository mutation. Do it only when the user has authorized that action. Verify the deployed URL before changing Notion to depend on it.

## Site build

The Astro site treats Notion as its CMS. `npm run generate` syncs published Notion pages and downloads their images before building. Generated post files and downloaded Notion images are build products; do not hand-edit them as the source article.

Changes deployed from the website repository's `main` branch trigger the GitHub Pages workflow. Work on a clean checkout, preserve unrelated branches and edits, and do not switch, commit, merge, or push without the user's authorization.

## Publication check

Verify all of the following that apply:

- title and description match the final draft
- `status` reflects `draft` versus `published` intent
- publish date and tags use valid database values
- cover is either Notion-hosted or points to the blog site's asset path
- article links work
- repository asset exists on the intended branch
- the site build or deployment completed when the user requested publication
