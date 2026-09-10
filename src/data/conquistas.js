/**
 * Conquistas do time e repercussão na imprensa.
 *
 * Aparece em destaque na home, logo abaixo do topo, porque é a credencial
 * mais forte do time e é o que faz um visitante decidir continuar lendo.
 *
 * Só entra aqui o que já aconteceu e é verificável. Projeção de resultado
 * não é conquista e mora em outro lugar (src/data/projetos.js).
 */

export const CONQUISTAS = [
  {
    ano: "2026",
    titulo: { pt: "Campeão da Liga Rookie", en: "Liga Rookie champion" },
    onde: {
      pt: "ENEB, Encontro Nacional Enactus Brasil · Campo Grande, MS",
      en: "ENEB, Enactus Brazil National Meeting · Campo Grande, Brazil",
    },
    texto: {
      pt: "A Liga Rookie reúne os times estreantes de todo o país. Vencemos no nosso primeiro ciclo de competição.",
      en: "The Liga Rookie brings together first-year teams from across Brazil. We won it in our very first competition cycle.",
    },
  },
  {
    ano: "2026",
    titulo: { pt: "Dois prêmios no Canteiro Lab", en: "Two awards at Canteiro Lab" },
    onde: {
      pt: "Edital da Cury para projetos de engenharia civil",
      en: "Cury open call for civil engineering projects",
    },
    // O Canteiro Lab é um edital SEPARADO e não tem relação com o Solo que
    // Gera. Os dois projetos premiados foram o Kit Track e o Canteiro Limpo.
    texto: {
      pt: "Dois projetos do time premiados no mesmo edital: Kit Track e Canteiro Limpo.",
      en: "Two of the team's projects awarded in the same call: Kit Track and Canteiro Limpo.",
    },
  },
];

/**
 * Matérias e reportagens sobre o time.
 * Para acrescentar outra, copie o bloco e troque os campos.
 */
export const IMPRENSA = [
  {
    veiculo: "G1 Maranhão · JMTV 1ª Edição",
    titulo: {
      pt: "Estudantes do IFMA de Imperatriz vencem prêmio nacional de sustentabilidade",
      en: "IFMA Imperatriz students win national sustainability award",
    },
    url: "https://g1.globo.com/ma/maranhao/videos-jmtv-1-edicao/video/estudantes-do-ifma-de-imperatriz-vencem-premio-nacional-de-sustentabilidade-14848937.ghtml",
  },
];

/** Foto que ilustra a faixa de conquistas, dentro de public/fotos/. */
export const FOTO_CONQUISTA = {
  arquivo: "conquista-canteiro-lab-2026.jpg",
  alt: {
    pt: "O time no palco do encontro nacional, de braços erguidos e segurando a bandeira do Enactus IFMA Campus Imperatriz, com o telão anunciando o título de campeão.",
    en: "The team on stage at the national meeting, arms raised, holding the Enactus IFMA Imperatriz Campus banner, with the screen announcing the championship title.",
  },
};
