import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xburzelx.github.io',
  base: '/xBurzelx---FM27-webseite',
  integrations: [tailwind()],
});