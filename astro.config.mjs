import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio-ecru-rho-94.vercel.app',
  integrations: [react(), sitemap()],
});
