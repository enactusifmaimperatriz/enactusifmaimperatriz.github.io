import pt from "./pt.js";
import en from "./en.js";

export const dict = { pt, en };

/** Retorna o dicionário de textos do idioma pedido. */
export function t(lang) {
  return dict[lang] ?? dict.pt;
}

export * from "./routes.js";
