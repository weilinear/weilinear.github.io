# Astronot 🚀

A high-performance blog engine built with [Astro](https://astro.build) using [Notion](https://notion.so) as a headless CMS.

## Features

- **Notion as CMS:** Write your posts in Notion, and they are automatically synced to your site.
- **Static Generation:** Fast, SEO-friendly static site generation.
- **Modern Stack:** Built with Astro, Svelte, Tailwind CSS, and TypeScript.
- **Rich Content:** Supports images, video embeds, and code blocks from Notion.
- **Dark Mode:** Built-in dark mode support.

## Prerequisites

- Node.js (v18+ recommended)
- A Notion account and an Integration Token.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd astronot
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory (you can copy `.env.example`):
    ```bash
    cp .env.example .env
    ```
    Fill in your Notion credentials:
    ```env
    NOTION_KEY=secret_your_integration_token
    DATABASE_ID=your_database_id
    ```

4.  **Notion Database Setup:**
    Ensure your Notion database has the following properties:
    - `Name` (Title)
    - `slug` (Text)
    - `tags` (Multi-select)
    - `status` (Select: "published", "draft")
    - `publish_date` (Date)
    - `description` (Text)
    - `cover` (Files & Media or URL)

## Development

To start the local development server:

```bash
npm run dev
```

To sync content from Notion:

```bash
npm run sync
```
*Note: This downloads your posts and images to `src/pages/posts` and `public/images`.*

## Build & Deployment

To build the project for production (including a full content sync):

```bash
npm run generate
```

This will output the static site to the `dist/` directory.

## Project Structure

- `scripts/sync.js`: The entry point script that fetches data from Notion.
- `src/lib/notion/`: Modular Notion sync logic (client, transformers, sync).
- `src/pages/`: Astro pages and routes.
    - `posts/`: Generated MDX files from Notion (do not edit manually).
- `src/components/`: Reusable UI components (Svelte & Astro).
- `src/layouts/`: Page layouts.

## Troubleshooting

If the sync fails, ensure:
1. Your `.env` variables are correct.
2. The Notion integration has access to the specific database (click "..." on the database page -> "Add connections").