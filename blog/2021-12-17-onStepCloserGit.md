---
title: "Comment gérer ses hotfix avec git-worktree ?"
description: "Découverte d'une commande git bien pratique"
date: 2021-12-17
tags: ["Tips", "Avent", "Git", "Worktree"]
keywords: ["Tips", "Avent", "Git", "Worktree"]
image: "/img/17.jpg"
slug: /git-worktree
authors: [chue]
---

Comment gérez-vous vos hotfix lorsque vous travaillez sur une branche pour une toute nouvelle feature ?

Plusieurs scénarios sont possibles :

- Vous faites un `git stash` pour isoler votre développement en cours. Vous basculez sur une nouvelle branche `hotfix` pour pouvoir travailler dessus. Une fois terminé, vous revenez sur votre branche de feature et faites votre `git apply`.
- Vous faites un `git push` de tout votre dev avec un bon message `WIP - switch branch for comit`, ou quelque chose dans le genre, pour pouvoir sauvegarder votre travail en cours. Et vous partez ensuite sur la résolution du bug.

<!--truncate-->

Dans les deux cas on voit que la sauvegarde de votre travail en cours est le point problématique. Comment travailler sur un autre sujet, sans perdre le dev en cours ? Si possible, comment le faire proprement ?

C'est dans ce contexte qu'intervient la commande `git worktree`.

L'idée va être toute simple, la commande vous permet de créer un répertoire qui correspond à une branche : comme ça plus besoin de jongler entre vos branches et de gérer la sauvegarde de vos devs en cours.

```shell
$ git worktree add -b hotfix ~/Workspace/hotfix main
#                       ^             ^           ^
#                       |             |           |
#                      (a)           (b)         (c)

(a) Nom de la branche qui va être créée
(b) Chemin d'accès au répertoire où se trouvera la branche
(c) Origin sur laquelle se base la branche
```

Je vais donc créer une branche `hotfix` qui va se situer dans `~/Workspace/hotfix` et qui se basera sur la branche `main`.
Je peux ensuite naviguer entre mes différents répertoires et laisser mon code sur celui qui représente `develop` tout en travaillant sur `hotfix` sans que cela ne rentre en conflit.

:::tip
Mon conseil est d'utiliser cette commande pour les hotfix et de supprimer le repertoire une fois le hotfix déployé. Cela permettra d'éviter de conserver des branches trop longtemps et ainsi risquer des conflits lors du rebase.
:::

Vous trouverez toute la doc nécessaire ici : [Doc - git-worktree](https://git-scm.com/docs/git-worktree)
