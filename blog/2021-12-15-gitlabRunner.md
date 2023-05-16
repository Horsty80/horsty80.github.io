---
title: "Tester ses pipelines en local"
description: "Configurer un gitlab runner local pour pouvoir tester ses jobs"
date: 2021-12-15
tags: ["Tips", "Avent", "Gitlab", "CI/CD", "pipeline"]
keywords: ["Tips", "Avent", "Gitlab", "CI/CD", "pipeline"]
image: "/img/15.jpeg"
slug: /gitlab-runner
authors: [chue]
---

# Gitlab-runner

Sur mes projets persos j’aime utiliser la CI/CD proposée par Gitlab. Si vous avez déjà travaillé avec `.gitlab-ci.yml` vous savez la peine que c’est de configurer votre pipeline. On modifie, on push, on voit le pipeline se lancer, et on espère que tout soit au vert, sinon on recommence. C’est assez fastidieux, ça monopolise les runners, enfin, rien de bon.

<!--truncate-->

J’ai eu envie de ramener tout ça en local, premier avantage c’est que je ne sature pas mon repo de commit du style `test ci configuration`. (avouez tout le monde l'a fait !)
Second avantage, depuis que gitlab impose la saisie d’une CB pour utiliser les `shared runner` il etait important pour moi de savoir m'en passer.

Ni une ni deux, je me suis lancé dans l’apprentissage des Runners gitlab !

Pour commencer sur MacOs :

```bash
brew install gitlab-runner
```

Activer le service à chaque démarrage

```bash
brew services start gitlab-runner
```

Placez-vous ensuite dans le répertoire de votre projet qui possède le fichier `.gitlab-ci.yml` et vous pouvez lancer votre `runner`

> Pour ma part, j'ai docker installé sur ma machine, mais c'est également possible sans : il suffit de changer l'`executor`.

```bash
cd path/to/myAwesomeProject
gitlab-runner exec docker test
#              ^     ^      ^
#              |     |      |
#             (a)   (b)    (c)

(a) Execute la commande "gitlab-runner" dans le répertoire
(b) lance gitlab-runner avec l\'"executor docker" [Gitlab - executors](https://docs.gitlab.com/runner/executors/docker.html)
(c) lance le job "test"
```

Voici le lien pour la doc d’`exec` [GitLab Runner commands | GitLab](https://docs.gitlab.com/runner/commands/#gitlab-runner-exec)

:::caution
Attention il y a des limitations : On ne peut lancer qu’un job et pas un pipeline complet.
:::

## Pour aller plus loin

Vous pourriez avoir envie d’utiliser votre runner directement sur gitlab et à terme avoir vos propres runners. Dans ce cas, il faut l’enregistrer auprès de gitlab avec la commande suivante :

```bash
gitlab-runner register
```

Le prompt vous demandera ensuite un token, vous retrouverez celui-ci dans la partie `settings/ci_cc/runners`

Pour ne pas vous embêtez vous trouverez la commande clé en main :
`sudo gitlab-runner register --url https://gitlab.com/ --registration-token $REGISTRATION_TOKEN`

Actualisez votre page des Settings et vous verrez apparaitre votre runner. Success !!

Next step, la même chose mais pour Jenkins !
