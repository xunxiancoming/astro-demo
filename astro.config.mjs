// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://xuanxiancoming.github.io",
  base: "/astro-demo",
  integrations: [
    preact({ include: "**/preact/*" }),
    react({ include: "**/react/*" }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
