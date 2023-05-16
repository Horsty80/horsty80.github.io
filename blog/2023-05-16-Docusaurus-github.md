---
title: Docusaurus 🖤 GitHub pages
authors: [chue]
tags: [Docusaurus, GitHub, CI/CD, Pnpm]
keywords: [Docusaurus, GitHub, CI/CD, Pnpm]
---

**Disclaimer** : L'idée de cette article vient de mon ami [Clainchoupi](https://github.com/clainchoupi) qui a fait un article sur le même sujet. Je vous invite à aller le lire, il est très bien écrit et très complet et ça se passe ici : [Clainchoupi - Docusaurus 🖤 GitHub pages](https://clainchoupi.github.io/blog/2023/05/13/Docusaurus_github).

Tout comme lui je vais vous expliquer comment j'ai mis en place mon blog avec Docusaurus et GitHub pages. À l'instar de Clainchoupi, j'utilise [pnpm](https://pnpm.io/) pour gérer mes dépendances.

:::info
**Spoiler** : Je vous propose à la fin un template qui gére le cache de pnpm et qui déploie votre site sur GitHub pages.
:::

<!--truncate-->

## GitHub pages - Vous saviez ?

Si vous utilisez Github Page régulièrement vous savez surement que les sites herbergés sur GitHub pages sont générés à partir de la branche `gh-pages`. Le site sera accessible à l'adresse `https://<username>.github.io/<repository>`.
Mais saviez vous qu'un nom de domaine racourci est disponible ? Il s'agit de `https://<username>.github.io` qui pointe vers la branche `gh-pages` du repository `<username>/<username>.github.io`. 

:::tip
Merci à [tgrall](https://tgrall.github.io/) pour l'info je ne le savais pas.
:::

## Gestion des permissions

Pour déployer un site sur GitHub pages, il faut que votre GitHub Action pousse l'artefact de build sur la branche `gh-pages`. Vous avez deux solutions pour le faire :
- Soit vous creez et utilisez un token personnel (PAT) avec les permissions `read` et `write` dans **/settings/actions > General**
- Soit vous utilisez le token par défaut fourni par GitHub Actions (GITHUB_TOKEN) qui a les permissions `pages` et `contents` que vous configurez directement dans la github action.

J'utilise cette deuxième option car je trouve ça plus simple et plus sécurisé. En effet, le token par défaut est automatiquement généré par GitHub Actions et il est valable uniquement pour la durée de l'exécution de votre workflow. Il n'est donc pas stocké dans votre repository et il n'est pas possible de le réutiliser.

Voici comment faire :

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

:::info
Toute la documentation nécessaire se trouve ici : [GitHub Actions - Permissions for the GITHUB_TOKEN](https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs)
:::

## Matrix strategy

Pour gérer les différentes versions de node, j'utilise habituellement la stratégie `matrix` de GitHub Actions. Cela me permet de tester mon site avec plusieurs versions de node et de ne pas avoir de mauvaise surprise lors du déploiement. Ici je n'ai qu'une seule version de node mais vous pouvez en ajouter autant que vous voulez.
La matrix vous permet aussi de tester votre site sur plusieurs OS. Ici je n'ai pas besoin de le faire car je n'utilise pas de dépendances natives spécifique à un OS.

Voici le genre de déclaration que vous pouvez faire :

```yaml
strategy:
  matrix:
    version: [10, 12, 14]
    os: [ubuntu-latest, windows-latest]
```

:::info
Toute la documentation nécessaire se trouve ici : [GitHub Actions - Matrix strategy](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
:::

## Cache

Pour éviter de télécharger les dépendances à chaque fois que vous lancez votre workflow, je vous conseille d'utiliser le cache de GitHub Actions. Cela vous permettra de gagner du temps et de l'argent 🤑.
Il se trouve que l'action `setup-node` que j'utilise pour installer pnpm gère le cache. Il suffit de lui passer le paramètre `cache` avec la valeur `pnpm` pour que les dépendances soient automatiquement cachées. (⚠️ ça ne cache pas les `node_modules`).

Je ne vais pas rentrer dans les détails, mais sachez que ça utilise `actions/cache` pour faire ça [GitHub Actions - Cache action](https://github.com/actions/cache).

Voici comment faire :

```yaml
steps:
  - name: Cache pnpm modules
    uses: actions/setup-node@v3
    with:
        node-version: 18
        cache: 'pnpm'
```

:::info
Toute la documentation nécessaire se trouve ici : [GitHub Actions - Cache action](https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows)
Vous trouverez aussi la documentation de l'action ici : [Setup node - Caching global packages data](https://github.com/actions/setup-node#caching-global-packages-data)
:::

## Template

Voici le template que j'utilise pour déployer mon site sur GitHub pages. Il est disponible sur mon repository [chue/docusaurus-github-pages](https://horsty80.github.io/blog/2023/05/16/Docusaurus-github)

:::tip
* J'utilise `workflows_dispatch` pour pouvoir lancer le workflow manuellement depuis l'onglet **Actions** de mon repository.
* J'ai désactivé la concurrence pour éviter que deux déploiements se fassent en même temps. Cela évite d'avoir des conflits de merge sur la branche `gh-pages`.
:::

```yaml
name: Deploy static content to GitHub Pages

on:
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

  # Runs on pushes targeting the default branch
  push:
    branches:
      - main

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    name: Deploy to GitHub Pages
    runs-on: ubuntu-20.04
    strategy:
      matrix:
        node-version: [18]
    steps:
      - uses: actions/checkout@v3
      - name: Use Pnpm v8
        uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build website
        run: pnpm build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload entire repository
          path: './build'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

Voilà, j'espère que cet article vous aura plu et qu'il vous aura été utile. N'hésitez pas à me faire un retour sur Twitter ou sur GitHub.