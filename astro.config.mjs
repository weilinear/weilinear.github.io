import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import preact from "@astrojs/preact";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  integrations: [preact({ compat: true, include: ['src/pages/blog.astro', 'src/layouts/PostLayout.astro'] }), react(), tailwind(), mdx(), svelte()],
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.unsplash.com'
    }]
  },
  vite: {
    assetsInclude: ['**/*.bmp'], // Allow importing image types not allowed by default
    build: {
      rollupOptions: {
        external: ['@nanostores/preact']
      }
    }
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],    
  }
});