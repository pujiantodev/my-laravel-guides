import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Pujianto's Laravel Guides",
      social: {
        github: "https://github.com/pujiantodev",
        twitter: "https://x.com/pujiantodev",
        instagram: "https://instagram.com/pujiantodev",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Introduction",
          link: "/intro",
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tips & Tricks",
          autogenerate: { directory: "tips" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
