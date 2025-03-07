import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import { siteConfig } from "./src/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://github.com/BrianPhiri/my-blog",
  base: "/my-blog",
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
});
