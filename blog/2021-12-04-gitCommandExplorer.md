---
title: "Quelle commande Git lancer"
description: "Partage d'un explorateur de commande git en ligne"
date: 2021-12-04
tags: ["Tips", "Avent", "Git", "Explorateur"]
keywords: ["Tips", "Avent", "Git", "Explorateur"]
image: "/img/4.jpg"
slug: /git-command-explorer
authors: [chue]
---

## Mise en situation

Vous venez de faire un `git stash` de votre code. Vous récuperez les dernières modifications sur la branche avec un `git pull`. Et là un collègue vient vous proposer un café ☕️ , ça ne se refuse pas.

<!--truncate-->

Vous parlez de vos décorations de noël 🎄 et vous retournez à votre poste.
Devant votre IDE, plus moyen de vous souvenir du code que vous avez stash mais vous ne voulez pas l'`apply` sans savoir.

Alors vous commencez à taper, de mémoire, `git stash show`, `git stash view`, `git show stash`, plus moyen de vous rappeler de la commande exacte, et on ne va pas se mentir, `git stash --help` c'est pas très intuitif.

## Le sauveur - [gitexplorer](https://gitexplorer.com)

Une fois sur le site de [gitexplorer](https://gitexplorer.com), vous sélectionnez l'action que vous voulez exécuter et les détails / options que vous souhaitez

![Interface principal avec I want to: puis deux selects ici sur l'exemple d'un git stash](/img/git-explorer.png)

Ensuite vous verrez la commande apparaitre sur la gauche dans un encart qui explique ce qui va s'exécuter.
Voila avec ça fini les trous de mémoire

![Resultat une fois le formulaire rempli avec l'usage et une note explicative](/img/git-command.png)
