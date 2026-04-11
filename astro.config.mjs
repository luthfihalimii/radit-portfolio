import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.radityazcky.my.id",
  integrations: [icon(), compress()],
  vite: {
    plugins: [tailwindcss()],
  },
});
