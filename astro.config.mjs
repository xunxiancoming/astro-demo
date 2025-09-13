// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kblog2.netlify.app",
  integrations: [
    preact({ include: "**/preact/*" }),
    react({ include: "**/react/*" }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
