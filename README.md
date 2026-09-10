# Site do Enactus IFMA Imperatriz

Manual de quem cuida do site. Escrito para quem **não** programa.

---

## 1. Como o site funciona, em três frases

O site é feito de arquivos de texto guardados numa pasta. Quando alguém edita
um desses arquivos, um serviço automático reconstrói o site e publica a versão
nova em cerca de dois minutos. Ninguém precisa instalar programa nenhum: dá
para editar tudo pelo navegador.

---

## 2. Onde fica cada coisa

| Quero mudar... | Abra este arquivo |
|---|---|
| Qualquer texto do site em português | `src/i18n/pt.js` |
| Qualquer texto do site em inglês | `src/i18n/en.js` |
| Os números da rede Enactus e do time | `src/data/rede-enactus.js` |
| As cores do site | `src/styles/tokens.css` |
| Instagram e e-mail do time | `src/data/redes.js` |
| As conquistas e as matérias na imprensa | `src/data/conquistas.js` |
| Os projetos e as fotos de projeto | `src/data/projetos.js` |
| As fotos do time em campo | `src/data/fotos-campo.js` |
| Os arquivos de imagem em si | `public/fotos/` |
| O endereço final do site | `astro.config.mjs` |
| A logo do time | `public/brand/logo-time.png` |

**Regra de ouro dos idiomas:** `pt.js` e `en.js` são gêmeos. Se você acrescentar
uma frase nova em um, acrescente no outro. Se esquecer, a versão em inglês fica
com um espaço em branco no lugar.

---

## 3. Como editar um texto (passo a passo)

1. Entre em `github.com` e abra o repositório do site.
2. Clique na pasta `src`, depois em `i18n`, depois em `pt.js`.
3. Clique no ícone de lápis (canto superior direito).
4. Encontre a frase que quer mudar. Ela vai estar entre aspas, assim:
   `titulo: "Transformamos ideias em negócios que mudam a nossa região.",`
5. Mude **apenas o que está entre as aspas**. Não apague as aspas, nem a
   vírgula do final, nem o nome que vem antes dos dois pontos.
6. Role até o fim da página, escreva em uma linha o que você mudou e clique em
   **Commit changes**.
7. Espere dois minutos e recarregue o site.

Se algo der errado, o site anterior continua no ar. Nada quebra de forma
definitiva: dá sempre para voltar à versão anterior pelo histórico do GitHub.

### Cuidado com acentos e aspas

Dentro das aspas você pode usar acento normalmente. O que **não** pode é usar
aspas duplas dentro de aspas duplas. Se precisar de aspas no texto, use as
tipográficas: `"assim"`.

---

## 4. Como publicar os números do time

Abra `src/data/rede-enactus.js` e procure a lista `TIME`. Troque cada `"—"`
pelo número real:

```js
export const TIME = [
  { valor: "4", chave: "projetos_ativos" },
  { valor: "23", chave: "membros" },
  { valor: "310", chave: "pessoas_impactadas" },
  { valor: "2023", chave: "ano_fundacao" },
];
```

Enquanto os valores forem `"—"`, a seção inteira de números não aparece na
home. Assim que você preencher pelo menos um valor real, ela volta sozinha.
Isso é proposital: é melhor não mostrar número nenhum do que mostrar número
inventado, e quadro vazio enfraquece a página.

---

## 4b. Como publicar fotos

Duas galerias existem no site, e as duas funcionam do mesmo jeito.

**Fotos de um projeto** ficam em `public/fotos/` e são registradas dentro do
projeto correspondente em `src/data/projetos.js`.

**Fotos do time em campo** (visitas, extensão, eventos) ficam em
`public/fotos/campo/` e são registradas em `src/data/fotos-campo.js`.

Em ambos os casos, colocar o arquivo na pasta não basta: é preciso escrever o
nome do arquivo na lista, senão a foto não aparece. Isso é proposital, para que
nenhuma imagem entre no site sem legenda e sem texto alternativo.

Enquanto uma galeria estiver vazia, a seção inteira não é exibida. O site nunca
mostra moldura cinza de "foto faltando".

Antes de publicar qualquer imagem com rosto de pessoa da comunidade, confirme a
autorização de uso de imagem.

---

## 5. Pendências antes do site ir ao ar

Estas são obrigatórias. Nenhuma delas é opcional.

- [ ] **Confirmar com a Enactus Brasil** o número de países da rede. O deck
      oficial diz "34" em uma página e "+33" em outra. O site está usando
      "mais de 30" por segurança.
- [ ] **Confirmar com a Enactus Brasil** se a rede usa "17" ou "18" Objetivos
      de Desenvolvimento Sustentável. A ONU tem oficialmente 17. O site hoje
      não cita número nenhum, justamente para não errar.
- [ ] **Confirmar a data** a que se referem os números globais (13,1 mi de
      vidas, 42.450 estudantes, 1.064 universidades, 1.626 projetos).
- [x] ~~Trocar o endereço do site~~ Configurado como
      https://enactusifmaimperatriz.github.io em `astro.config.mjs`.
- [x] ~~Nomear os projetos premiados no Canteiro Lab~~ Resolvido em
      09/09/2026: o Canteiro Lab é um edital da Cury para projetos de
      engenharia civil e NÃO tem relação com o Solo que Gera. Os dois
      projetos premiados foram o **Kit Track** e o **Canteiro Limpo**, e
      estão nomeados na faixa da home.
- [ ] **Reativar "Nosso time" no menu** quando houver conteúdo. O time está
      em reformulação, então a chave "team" foi retirada de NAV, em
      `src/i18n/routes.js`. A página continua existindo; é só recolocar
      "team" na lista.
- [ ] **Publicar os professores conselheiros** quando a lista chegar.
- [ ] **Trocar as projeções por resultados medidos** assim que a cooperativa
      entrar em operação. Os números atuais estão publicados com a ressalva
      de que são planejamento; quando houver medição, mova-os de `projecoes`
      para `resultados` em `src/data/projetos.js`.
- [ ] **Definir a comunidade de implantação**, que hoje aparece no site como
      "ainda sendo definida".
- [x] ~~Decidir sobre o LinkedIn~~ Resolvido: o time não tem LinkedIn por
      enquanto, e o canal foi removido de `src/data/redes.js`.
- [x] ~~Validar o enquadramento nos ODS~~ Confirmado pelo time em 09/09/2026.
- [ ] **Substituir a logo** por uma versão em alta ou vetor. A que está no site
      foi recuperada do PDF de artes e tem 640 pixels de largura, o suficiente
      para o tamanho em que aparece hoje, mas não para uso maior.
- [ ] **Ler o rodapé em voz alta.** Ele diz que o site representa somente o
      time do IFMA Imperatriz e não fala em nome da Enactus Brasil ou da
      Enactus Worldwide. Esse aviso não é formalidade: o Manual de Marca
      Enactus Brasil 26-27 exige essa distinção, e descumprir pode custar ao
      time a autorização de uso da marca.

---

## 6. Regras de marca que o site precisa respeitar

Do Manual de Marca Enactus Brasil 26-27, capítulo de diretrizes:

- A logo oficial da Enactus **não pode** ter cor, tipografia ou forma alteradas.
- É proibido "humanizar" a logo oficial em qualquer material.
- Nenhum time está autorizado a falar em nome da Enactus Brasil ou da Enactus
  Worldwide sem autorização expressa.
- Ao se comunicar com público externo, o time precisa deixar claro que
  representa apenas o time da sua instituição.
- Referir-se ao grupo como **time**, nunca como "clube" ou "grupo".
- Tipografia oficial: Source Sans Pro. O site usa a Source Sans 3, que é a
  versão atual e mantida da mesma família, distribuída gratuitamente pelo
  Google Fonts.

No arquivo `src/styles/tokens.css` existem duas variáveis chamadas
`--gold-enactus` e `--gray-enactus`. Elas guardam as cores oficiais da Enactus
e existem **apenas** para reproduzir a logo oficial sem alteração. Não use
essas duas em botões, títulos ou fundos.

---

## 7. Para quem for mexer no código

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

- Framework: [Astro](https://astro.build) (site estático, sem servidor).
- Quase nada de JavaScript no cliente: o menu do celular e o seletor de idioma
  funcionam só com CSS. O único script são ~1 KB embutidos no HTML, que fazem
  os números da rede subirem de zero quando entram na tela.
- Idiomas: páginas separadas em `src/pages/pt/` e `src/pages/en/`, com o mapa
  de rotas em `src/i18n/routes.js`. O botão PT | EN usa esse mapa para levar a
  pessoa à mesma página no outro idioma.
- Acessibilidade: navegação por teclado, link "pular para o conteúdo",
  contraste conferido e respeito a `prefers-reduced-motion`.

### Adicionar uma seção nova

1. Acrescente a chave em `ROUTES` e em `NAV` no arquivo `src/i18n/routes.js`.
2. Crie o arquivo da página em `src/pages/pt/` e o equivalente em `src/pages/en/`.
3. Acrescente o rótulo do menu em `nav` nos dois arquivos de idioma.
