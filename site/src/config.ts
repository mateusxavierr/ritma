/**
 * Ponto único de configuração da página (PLANO §3, §4.1, §9).
 * Trocar número/mensagens/label AQUI atualiza todas as instâncias do CTA.
 */

/** Número do WhatsApp — confirmado pelo Mateus 2026-07-23 (papelaria: (81) 99746-9578).
 *  Formato: DDI+DDD+número, só dígitos. */
export const WHATSAPP_NUMBER = '5581997469578';

/**
 * Mensagens pré-preenchidas do wa.me, personalizadas por origem do clique (pedido do Mateus
 * 2026-07-23). Modo diagnóstico, sem dado pessoal e OAB-safe (sem gratuidade/valores/promessa).
 */
export const WA_MESSAGES: Record<string, string> = {
  default: 'Olá! Vim pelo site da Ritma sobre registro de marcas. Tenho interesse em mais informações.',
  hero: 'Olá! Vim pelo site da Ritma e quero saber se a minha marca ainda pode ser registrada.',
  video: 'Olá! Vim pelo site da Ritma e quero proteger a marca do meu negócio.',
  comofunciona: 'Olá! Vim pelo site da Ritma e quero entender como funciona o registro da minha marca.',
  oferta: 'Olá! Vim pelo site da Ritma e quero saber mais sobre o registro da minha marca.',
  final: 'Olá! Vim pelo site da Ritma e quero verificar se a minha marca ainda está livre.',
  fab: 'Olá! Vim pelo site da Ritma sobre registro de marcas. Tenho interesse em mais informações.',
};

/** Compat: mensagem padrão como const única (usada por metadados/legado). */
export const WHATSAPP_MESSAGE = WA_MESSAGES.default;

/**
 * Label único do CTA (mesmo intent, mesmo label em TODAS as instâncias — PLANO §10.9).
 * Default OAB-safe ATIVO (PLANO §10.23): sem referência a gratuidade ou valores
 * (Provimento 205/2021 OAB, art. 4º, §2º), até a pergunta 12 confirmar a estrutura.
 */
export const CTA_LABEL = 'Verificar a disponibilidade da minha marca';

/*
 * Variante pós-liberação — ativar SÓ se a pergunta 12 (PERGUNTAS-ABERTAS) confirmar
 * EMPRESA (não sociedade de advogados). Swap de 1 linha: comentar a const acima e
 * descomentar a de baixo. As demais superfícies com gratuidade/honorários (§10.23)
 * trocam nos comentários dos próprios componentes.
 *
 * export const CTA_LABEL = 'Fazer minha consulta gratuita';
 *
 * Alternativa B (guardar pro A/B futuro, PLANO §4.1):
 * export const CTA_LABEL = 'Descobrir se minha marca está livre';
 */

/** Micro-reassurance sob o botão (hero/oferta/CTA final — PLANO §4.1). */
export const CTA_REASSURANCE = 'Pelo WhatsApp, sem compromisso.';

/** aria-label acessível dos links de WhatsApp (PLANO §8): acompanha o swap do label sem edição manual. */
export const CTA_ARIA_LABEL = `${CTA_LABEL} pelo WhatsApp`;

/** Origem do site. Deploy de revisão no GitHub Pages (path /ritma/ vem do base do Astro).
 *  Pra produção em domínio próprio, trocar por ex. 'https://ritmaregistros.com.br' + base '/'. */
export const SITE_URL = 'https://mateusxavierr.github.io';

/** href único de conversão (PLANO §3), com mensagem por origem do clique. */
export function waHref(origin: string = 'default'): string {
  const msg = WA_MESSAGES[origin] ?? WA_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
