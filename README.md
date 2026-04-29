# João Victor | Portfólio Web

Portfólio minimalista feito com React, Vite e CSS puro. A estrutura separa dados, componentes e estilos para facilitar personalização.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Cloudflare Pages

Use Git integration no painel da Cloudflare Pages e configure:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

Depois de conectar o repositório, cada push na branch principal publica uma nova versão.

## Personalização

Edite `src/data/portfolio.js` para atualizar nome, e-mail, links, projetos, stack e textos principais.
