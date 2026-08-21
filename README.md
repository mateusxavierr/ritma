# Ritma Registros — landing

Landing page de conversão da Ritma (registro de marcas). Site estático em
Astro 5 + Tailwind 4, sem back-end: o CTA é um link `wa.me`.

## Rodar

```bash
cd site
npm install
npm run dev      # localhost:4321
npm run build    # gera site/dist
npm run preview  # serve o dist gerado
```

## Deploy — Cloudflare Pages

Conectado a este repositório, branch `main`. Configuração no painel:

| Campo | Valor |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `site` |

O site é servido na **raiz** do domínio. Não existe `base` no
`astro.config.mjs`, e nenhum `url()` de CSS deve trazer prefixo de caminho:
o `base` do Astro reescreve atributo HTML, mas não reescreve CSS — foi assim
que o deploy de revisão no GitHub Pages deixou seis caminhos cravados em
`/ritma/`, incluindo o `@font-face` da Catamaran.

## Ponto único de configuração

`site/src/config.ts` — número de WhatsApp, mensagens por origem do clique,
label do CTA e `SITE_URL` (alimenta canonical e `og:url`). Trocar ali
atualiza todas as instâncias.

## Fora deste repositório

O kit de marca, o brief e os documentos de planejamento são material da
cliente e **não** entram aqui: o build não depende deles.
