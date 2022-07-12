import { defineConfig } from "windicss/helpers";
import Typography from "windicss/plugin/typography";

export default defineConfig({
  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
    exclude: ['node_modules', '.git'],
  },
  preflight: true,
  corePlugins: {
    container: false,
  },
  plugins: [Typography],
  shortcuts: {}
});