/**
 * Canais de contato do time.
 *
 * O site só mostra o que estiver aqui com `url` preenchida. Enquanto um canal
 * estiver com a url vazia (""), ele simplesmente não aparece no site. Isso é
 * proposital: link quebrado ou e-mail de mentira em site institucional é pior
 * do que canal ausente.
 *
 * Para ativar um canal, cole o endereço entre as aspas e salve.
 */

export const REDES = [
  {
    id: "instagram",
    rotulo: "Instagram",
    handle: "@enactus.ifma",
    url: "https://www.instagram.com/enactus.ifma",
  },
  {
    id: "email",
    rotulo: "E-mail",
    handle: "enactus.ifmaimperatriz@gmail.com",
    url: "mailto:enactus.ifmaimperatriz@gmail.com",
  },
];

/** Só os canais que já têm endereço preenchido. */
export const REDES_ATIVAS = REDES.filter((r) => r.url.trim() !== "");

/** Atalho para o Instagram, usado no cabeçalho e no bloco da home. */
export const INSTAGRAM = REDES.find((r) => r.id === "instagram");
