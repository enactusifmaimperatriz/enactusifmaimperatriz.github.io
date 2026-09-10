// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Endereço publicado do site.
  //
  // O repositório se chama enactusifmaimperatriz.github.io, igual ao nome de
  // usuário, e por isso o site fica na RAIZ do endereço, e não dentro de uma
  // subpasta. Isso é o que torna simples migrar para um domínio próprio.
  //
  // Para migrar depois para um .com.br:
  //   1. troque a linha abaixo pelo novo endereço;
  //   2. crie o arquivo public/CNAME com o domínio dentro, em uma linha só;
  //   3. aponte o DNS do domínio para o GitHub Pages.
  // Nenhum outro arquivo do projeto precisa mudar.
  site: 'https://enactusifmaimperatriz.github.io',

  integrations: [sitemap()],
  build: { format: 'directory' },
});
