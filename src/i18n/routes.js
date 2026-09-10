/**
 * Mapa de rotas do site.
 *
 * Cada seção tem uma "chave" (home, enactus, team, projects, contact) e um
 * endereço diferente em cada idioma. O botão PT | EN do cabeçalho usa este
 * mapa para levar a pessoa exatamente para a mesma página no outro idioma.
 *
 * Para adicionar uma seção nova: acrescente uma chave aqui, crie o arquivo
 * da página em src/pages/pt/ e em src/pages/en/, e inclua a chave em NAV.
 */

export const LANGS = /** @type {const} */ (["pt", "en"]);
export const DEFAULT_LANG = "pt";

export const LANG_LABEL = {
  pt: "Português",
  en: "English",
};

export const ROUTES = {
  home: { pt: "/pt/", en: "/en/" },
  enactus: { pt: "/pt/a-enactus/", en: "/en/about-enactus/" },
  team: { pt: "/pt/nosso-time/", en: "/en/our-team/" },
  projects: { pt: "/pt/projetos/", en: "/en/projects/" },
  contact: { pt: "/pt/contato/", en: "/en/contact/" },
};

/** Ordem dos itens no menu principal. */
// "team" está fora do menu enquanto o time passa por reformulação.
// Para trazer de volta, basta reinserir "team" nesta lista.
export const NAV = ["enactus", "projects", "contact"];

/** Endereço desta mesma página no outro idioma. */
export function altHref(routeKey, lang) {
  const other = lang === "pt" ? "en" : "pt";
  return ROUTES[routeKey]?.[other] ?? ROUTES.home[other];
}

export function href(routeKey, lang) {
  return ROUTES[routeKey]?.[lang] ?? ROUTES.home[lang];
}
