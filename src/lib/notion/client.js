import { Client } from "@notionhq/client";
import { config } from 'dotenv';

// Load ENV Variables
config();

if (!process.env.NOTION_KEY) {
  throw new Error("Missing NOTION_KEY in environment variables");
}

export const notion = new Client({
  auth: process.env.NOTION_KEY,
  config: {
    parseChildPages: false,
  }
});

export const DATABASE_ID = process.env.DATABASE_ID;

if (!DATABASE_ID) {
  throw new Error("Missing DATABASE_ID in environment variables");
}
