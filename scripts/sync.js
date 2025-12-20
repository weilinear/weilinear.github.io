import { parseArgs } from 'node:util';
import { syncNotionContent } from '../src/lib/notion/sync.js';

// Input Arguments
const ARGUMENT_OPTIONS = {
  published: { // Only sync published posts
    type: 'boolean',
    short: 'p'
  },
};

const { values: { published } } = parseArgs({ options: ARGUMENT_OPTIONS });
const isPublished = !!published;

syncNotionContent({ isPublishedOnly: isPublished })
  .catch((err) => {
    console.error("Sync Failed:", err);
    process.exit(1);
  });
