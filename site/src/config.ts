/**
 * Ponto único de configuração da página (PLANO §3, §4.1, §9).
 * Trocar número/mensagem/label AQUI atualiza todas as instâncias do CTA.
 */

/** Número do WhatsApp — PLACEHOLDER (PERGUNTAS-ABERTAS 8). Formato: DDI+DDD+número, só dígitos. */
export const WHATSAPP_NUMBER = '5500000000000';

/** Mensagem pré-preenchida do wa.me (PLANO §4.1). Modo diagnóstico, sem dado pessoal. */
export const WHATSAPP_MESSAGE =
  'Olá, vim pelo site da Ritma e quero saber se a minha marca ainda pode ser registrada.';

/**
 * Label único do CTA (mesmo intent, mesmo label, mesmo href em TODAS as instâncias — PLANO §10.9).
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

/** URL canônica do site. Default: domínio da Vercel até a pergunta 13 ser respondida. */
export const SITE_URL = 'https://ritma-registros.vercel.app';

/** href único de conversão (PLANO §3). */
export function waHref(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
