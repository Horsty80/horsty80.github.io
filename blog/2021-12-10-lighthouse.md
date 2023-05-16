---
title: "Automatiser l'audit de son site"
description: "Comment mettre en place un audit automatisé et ainsi garder un regard sur des indicateurs comme l'accessibilité"
date: 2021-12-10
tags: ["Tips", "Avent", "Accessibilité", "Lighthouse", "Pipeline", "Gitlab", "CI/CD"]
keywords: ["Tips", "Avent", "Accessibilité", "Lighthouse", "Pipeline", "Gitlab", "CI/CD"]
image: "/img/10.png"
slug: /lighthouse
authors: [chue]
---

Quels outils utiliser pour `mesurer` l'accessibilité de son site ?
Est-ce réellement possible ?
Il existe de nombreux outils et je vais essayer de vous en présenter quelques uns.
Je vais aujourd'hui vous parler de Lighthouse.

<!--truncate-->

## Lighthouse

Si vous ne connaissez pas encore Lighthouse, vous le trouverez installé dans les devtools de chrome dans l'onglet `lighthouse`.

![devtools sur l'onglet lighthouse montrant les catégories de test disponible et les devices possible](/img/onglet-lighthouse.png)

Vous pourrez choisir la catégorie à auditer qui vous interesse : dans notre cas l'accessibilité. Pour cela, choisir la plateforme `cible` desktop ou mobile et lancer la génération du report.
Après quelques minutes celui-ci apparait.

![fiche de resultat de l'audit accessibilité avec un score de 100](/img/resultat-lighthouse.png)

Le résultat de l'audit de mon blog est à 100% ce qui est excellent, mais pas parfait nuance : un 100% ne veut pas dire que votre site est totalement accessible mais qu'il respecte un ensemble de règles définies par chrome. On va dire que c'est mieux que rien. Si vous couplez ce résultat avec les régles Opquast par exemple, là vous aurez un site encore plus accessible.

> Bon c'est bien, mais je vais devoir lancer ça tout le temps depuis le site, c'est pas très pratique.

## Lighthouse CI

Il faut savoir que `lighthouse` est open-source et qu'il propose une CLI (Command line interface). Qui dit `CLI` dit script et donc automatisation. Donc oui on peut lancer des report lighthouse depuis un pipeline jenkins / gitlab CI/CD / github / etc.
Je vous mets le petit exemple que j'ai mis en place pour mon blog.

```yml
# Image with node and chrome
image: markhobson/node-chrome

stages:
  - audit
  - deploy

audit:
  stage: audit
  before_script:
    # Install Lighthouse
    - npm i -g lighthouse@8.6.0 # version 8.6.0 for Node compatibility
  script:
    # Run Lighthouse test
    - lighthouse --chrome-flags="--headless --no-sandbox" https://horsty.fr --output html --output-path ./report.html
  cache:
    paths:
      - ./report.html
  artifacts:
    paths:
      - ./report.html
    when: always

pages:
  stage: deploy
  dependencies:
    - audit
  script:
    # Script to generate gitlab pages static website
    - mkdir .public
    - cp -r ./report.html .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - develop
```

Lors de chaque commit sur develop je vais lancer un pipeline pour vérifier que les indicateurs d'accessibilité de mon site (et autres indicateurs) n'ont pas baissé. Bien-sûr il est possible de faire une tâche automatisée à date régulière, ou encore de faire la sortie en format `json` pour ensuite faire une alerte lorsque le résultat descend en dessous d'un certain seuil. Enfin, vous avez l'idée, libre à vous de mettre l'outil que vous souhaitez par dessus.

Lorsque le pipeline est terminé, mon report lighthouse sera dispo à cette adresse [Lien vers le report](https://horsty.gitlab.io/blog/report.html).
Et voilà, j'ai un suivi régulier de l'accessibilité de mon blog.
