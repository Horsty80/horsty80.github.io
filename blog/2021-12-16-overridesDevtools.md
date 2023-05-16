---
title: "Modifier un site avec les devtools de chrome"
description: 'Utilisation de la fonctionnalité "Overrides" des devtools chromes pour tester repidement'
date: 2021-12-16
tags: ["Tips", "Avent", "Devtools", "Overrides"]
keywords: ["Tips", "Avent", "Devtools", "Overrides"]
image: "/img/16.jpg"
slug: /overrides-devtools
authors: [chue]
---

> Cet article s'inspire de celui de [Drew Conley - chrome-overrides](https://drewconley.dev/blog/2021-05-29-chrome-overrides/) qui est bien plus complet en anglais.

## La fonctionnalité "Overrides"

Cette fonctionnalité je ne la connnaissais pas il y a peu. Vous la trouverez dans le panel `Source`.

<!--truncate-->

![onglet source dans les devtools chrome et la sous tab overrides](/img/override-feature.png)

Grâce à elle vous allez pouvoir stocker dans un répertoire local les contenus statics (html, css, png, etc.) d'un site.
Pour ça allez dans la partie `network` des devtools, cliquez droit sur le fichier qui vous intéresse et sélectionnez `Save for overrides`.

![menu du clic droit affichant l'option save for overrides](/img/save-locally.png)

Le fichier se retrouve dans ce repertoire local. Petit tips : vous pouvez l'ouvrir dans votre IDE et accéder à toutes vos fonctionnalités préférées pour développer.
À partir de là vous pouvez apporter n'importe quel changement, sauvegarder, et recharger la page. Vous verrez alors le site prendre vos changements en compte.
Par exemple, ici, je vais modifier ma balise `<h2>`.

![dom html du avec le message modifié "salut à toi je vais modifier le titre" à la place de "salut à toi"](/img/h2-modif.png)

### Avant

![Titre h2 avec Salut à toi sur la page](/img/before.png)

### Après

![la même page mais avec le titre modifié "salut à toi je vais modifier le titre"](/img/after.png)

## Quand l'utiliser

Cette fonctionnalité d'overrides n'est pas exceptionnnelle, ou indispensable. C'est plutôt un outil qui est disponible rapidement, pour faire des modifications à la volée. Je trouve ça intéressant de savoir ça, pour faire des tests graphiques par exemple, ou des ajustements lors d'une présentation.

L'overrides n'a d'intérêt que si vous êtes dans le cas où :

- le build du projet est assez long
- le template est compilé par le serveur

Deux points importants à retenir :

- les changements sont en local, donc il ne faut pas oublier de les rappatrier sur le code source
- n'oubliez pas de décocher la case `Enable Local Overrides` sinon vont changements resteront actifs.
