import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import purgecss from "astro-purgecss";
import tailwind from "@astrojs/tailwind";
import criticalCss from "astro-critical-css";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), purgecss(), tailwind(), criticalCss(), sitemap()],
  experimental: {
    viewTransitions: true
   }
});