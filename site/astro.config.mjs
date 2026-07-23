// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config.ts';

// PLANO §1: output 100% estático — o mesmo dist/ serve por FTP na Hostinger
// e como estático na Vercel. Nenhuma função, nenhum redirect, nenhum header custom.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
