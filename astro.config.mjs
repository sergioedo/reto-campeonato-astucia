import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',  // Aquí especificamos que el output es server-side
  adapter: vercel(),
});
