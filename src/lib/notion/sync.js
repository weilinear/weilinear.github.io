import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import { sanitizeUrl } from '../../helpers/sanitize.mjs';
import { downloadImage } from '../../helpers/images.mjs';
import { delay } from '../../helpers/delay.mjs';
import { notion, DATABASE_ID } from './client.js';
import { n2m } from './transformers.js';

const POSTS_PATH = 'src/pages/posts';
const THROTTLE_DURATION = 334; // ms

export async function syncNotionContent({ isPublishedOnly = false } = {}) {
  console.log(`Syncing Notion Content (Published Only: ${isPublishedOnly})...`);

  // 1. Query Notion Database
  const queryParams = {
    database_id: DATABASE_ID,
  };

  if (isPublishedOnly) {
    queryParams.filter = {
      "and": [
        {
          "property": "status",
          "select": {
            equals: 'published'
          }
        },
      ]
    };
  }

  const databaseResponse = await notion.databases.query(queryParams);
  const { results } = databaseResponse;

  console.info(`Found ${results.length} pages.`);

  // 2. Map Results to Page Objects
  const pages = results.map((page) => {
    const { properties, cover, created_time, last_edited_time, icon, archived } = page;
    
    // Safety check for title
    const titleObj = properties.title?.title?.[0];
    const title = titleObj ? titleObj.plain_text : "Untitled";
    
    // Safety check for slug
    const slugObj = properties.slug?.rich_text?.[0];
    const slug = slugObj ? slugObj.plain_text : sanitizeUrl(title);

    return {
      id: page.id,
      title,
      type: page.object,
      cover: cover?.external?.url || cover?.file?.url,
      tags: properties.tags?.multi_select || [],
      created_time,
      last_edited_time,
      icon,
      archived,
      status: properties?.status?.select?.name,
      publish_date: properties?.publish_date?.date?.start,
      description: properties?.description?.rich_text?.[0]?.plain_text,
      slug,
    };
  });

  // 3. Process Each Page
  for (let page of pages) {
    console.info(`Processing: ${page.title} [${page.id}]`);

    // Fetch Markdown Blocks
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const { parent: mdString } = n2m.toMarkdownString(mdblocks);

    const estimatedReadingTime = readingTime(mdString || '').text;

    // Download Cover Image
    let coverFileName = '';
    if (page.cover) {
        try {
            coverFileName = await downloadImage(page.cover, { isCover: true });
            console.info("  Cover image downloaded:", coverFileName);
        } catch (e) {
            console.error("  Failed to download cover image:", e.message);
        }
    }

    // Generate MDX Content
    const pageContents = `---
layout: "../../layouts/PostLayout.astro"
id: "${page.id}"
slug: "${page.slug}"
title: "${page.title}"
cover: "${coverFileName}"
tags: ${JSON.stringify(page.tags)}
created_time: ${page.created_time}
last_edited_time: ${page.last_edited_time}
icon: ${JSON.stringify(page.icon)}
archived: ${page.archived}
status: "${page.status}"
publish_date: ${page.publish_date ? page.publish_date : false}
description: "${page.description === 'undefined' ? '' : (page.description || '')}"
reading_time: "${estimatedReadingTime}"
---
import Image from '../../components/Image.astro';

${mdString}
`;

    // Write File
    if (mdString) {
      const outputDir = path.join(process.cwd(), POSTS_PATH);
      if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(path.join(outputDir, `${page.slug}.mdx`), pageContents);
    } else {
      console.log(`  Skipping empty page: ${page.title}`);
    }

    // Rate Limiting
    await delay(THROTTLE_DURATION); 
  }

  console.info("Sync complete!");
}
