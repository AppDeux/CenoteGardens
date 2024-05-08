import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), tailwind()],
  output: "static",
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});
