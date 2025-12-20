# Astronot - Project Analysis for AI Agents

## Project Overview
**Astronot** is a blog engine built with [Astro](https://astro.build/) that leverages [Notion](https://www.notion.so/) as a headless CMS. The project emphasizes a high-performance, static site generation (SSG) workflow where content is fetched from Notion at build time.

## Architecture & Data Flow

### 1. Content Pipeline (`src/lib/notion/` & `scripts/sync.js`)
The core content synchronization logic has been refactored into modular components:
- **`scripts/sync.js`:** The CLI entry point.
- **`src/lib/notion/client.js`:** Notion API client initialization.
- **`src/lib/notion/transformers.js`:** Custom `notion-to-md` transformers (handling `embed`, `image`, `video`).
- **`src/lib/notion/sync.js`:** The main orchestration logic that fetches data and writes files.

- **Trigger:** Executed via `npm run sync` or as part of `npm run generate`.
- **Source:** Fetches data from a Notion Database using `@notionhq/client`.
- **Transformation:**
    - Uses `notion-to-md` to convert Notion blocks to Markdown.
    - **Image Handling:** Notion-hosted images are downloaded locally to `public/images/posts` during the sync.
- **Output:** Generates MDX files in `src/pages/posts/*.mdx`.

### 2. Frontend Architecture
- **Framework:** Astro is the primary framework handling routing and static generation.
- **Interactivity:** Svelte is the preferred UI library for interactive components (e.g., `Newsletter.svelte`, `ParallaxImageHeader.svelte`). React is configured but less utilized.
- **Styling:** Tailwind CSS is used for utility-first styling.
- **State Management:** `nanostores` is used for sharing state (e.g., UI preferences) between Astro and Svelte islands.

### 3. Key Configuration Files
- **`astro.config.mjs`:** Configures integrations (React, Svelte, Tailwind, MDX) and `image` handling.
- **`tailwind.config.cjs`:** Tailwind setup.
- **`.env`:** Requires `NOTION_KEY` and `DATABASE_ID` for the sync script to function.

## Known Issues & "Gotchas"
- **Missing Dependency:** The project originally tried to use `domino` for link previews. This code has been commented out in `src/lib/notion/transformers.js` to prevent crashes, as `domino` is not installed.
- **Hardcoded Paths:** Several paths (e.g., for image downloads) are hardcoded or relative, which may be fragile if the folder structure changes.
- **Environment Variables:** The project strictly depends on `.env` variables. Ensure these are set in the environment or a `.env` file before running sync commands.

## Operational Commands
- `npm run dev`: Starts the local dev server.
- `npm run sync`: Clears `src/pages/posts` and re-fetches content from Notion.
- `npm run generate`: Full production build cycle (Clean -> Sync -> Build).
