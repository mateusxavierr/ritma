// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config.ts';

// PLANO §1: output 100% estático — o mesmo dist/ sobe em qualquer host de arquivo.
// Produção: Cloudflare Pages, na raiz do domínio. Nenhuma função, nenhum redirect,
// nenhum header custom — e nenhum `base`: todo asset resolve a partir de `/`.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
