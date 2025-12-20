import { NotionToMarkdown } from "notion-to-md";
import { sanitizeImageString } from '../../helpers/sanitize.mjs';
import { downloadImage } from '../../helpers/images.mjs';
import { notion } from './client.js';

export const n2m = new NotionToMarkdown({ notionClient: notion });

// Transformer for Embeds
n2m.setCustomTransformer("embed", async (block) => {
  const { embed } = block;
  if (!embed?.url) return "";
  return `<figure>
  <iframe src="${embed?.url}"></iframe>
  <figcaption>${await n2m.blockToMarkdown(embed?.caption)}</figcaption>
</figure>`;
});

// Transformer for Images
n2m.setCustomTransformer("image", async (block) => {
  const { image } = block;
  const imageUrl = image?.file?.url || image?.external?.url;
  
  if (!imageUrl) return "";

  const imageFileName = sanitizeImageString(imageUrl.split('/').pop());
  const filePath = await downloadImage(imageUrl, {});
  const fileName = filePath.split('/').pop();

  return `<Image src="/images/posts/${fileName}" />`;
});

// Transformer for Videos
n2m.setCustomTransformer("video", async (block) => {
  const { video } = block;
  const { external: { url: videoUrl } } = video;

  let url = videoUrl;

  if (url.includes('youtube.com')) {
    if (url.includes('/watch')) {
      // Youtube URLs with the /watch format don't work, need to be replaced with /embed
      const videoId = url.split('&')[0].split('?v=')[1];
      url = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return `<iframe width="100%" height="480" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
});

// Transformer for Link Previews
n2m.setCustomTransformer('link_preview', async (block) => {
  // TODO: Implement link preview support. 
  // Requires 'domino' library or similar DOM parser which is currently missing.
  // Original code:
  /*
  const { link_preview } = block;
  const { url } = link_preview;

  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document; // Error: domino is not defined
  const metadata = getMetadata(doc, url);

  console.log({ metadata });

  const preview = metadata.image
    ? `<img src="${metadata.image}" alt="${metadata.title}" />`
    : `<div style="display: flex; align-items: center; padding: 10px 10px">
        <img style="margin-right: 10px;" src="${metadata.icon}" />
        <span>${metadata.title}</span>
      </div>`;

  return `
  <div class="not-prose">
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      <div style="border-radius: 5px; border-width: 1px; overflow: hidden;">
        ${preview}
      </div>
    </a>
  </div>`;
  */
  
  const { link_preview } = block;
  const { url } = link_preview;
  return `[Link Preview: ${url}](${url})`;
});
