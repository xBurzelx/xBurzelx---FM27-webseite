import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xburzelx.github.io',
  base: '/football-manager-27',
  integrations: [tailwind()],
});