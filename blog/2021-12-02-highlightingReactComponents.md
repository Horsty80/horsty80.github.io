---
title: "React devtools - Lutter contre les rendus superflus"
description: "Mettre en évidence le rendu des composants avec les devtools pour prévenir du superflu"
date: 2021-12-02
tags: ["Tips", "Avent", "React", "Render", "Devtools"]
keywords: ["Tips", "Avent", "React", "Render", "Devtools"]
slug: /highlighting-react-components
image: "/img/2.jpg"
authors: [chue]
---

## Etat des lieux

Tous les composants React ont et maintiennent leur `state` et leurs `props`.
Dès qu'un changement intervient sur ce `state` ou ces `props` il est normal de penser que le composant doit être de nouveau rendu pour appliquer ces changements au `DOM`.
À l'inverse, s'il n'y a aucun changement, on se dit naturellement que le composant ne va pas être rendu.
Mais parfois, sans comprendre pourquoi, un composant va rendre un nouveau `DOM`.
Cela peut entrainer des ralentissements sur l'application.

<!--truncate-->

Quand cela se produit, comment faire pour déceler ces rendus intempestifs ?
Utiliser les `hooks` de lifecycle, utiliser `useEffect` et remplir votre composant de `console.log`.
C'est un peu "archaïque" comme moyen de debug.

## La solution [React-Developer-Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

> Si vous bossez déjà avec React, vous devez déjà l'avoir installée, si ce n'est pas déjà fait qu'attendez-vous 😱.

Cette extension propose une fonctionnalité bien pratique pour mettre en évidence le rendu de chaque composant de votre application. Le `Highlight`.

![Devtools chrome ouvert dans l'onglet "components" dans général présence de la checkbox highliht updates when components render](/img/react-dev-tools.png)

- Ouvrez votre console navigateur
- onglet `Components`
- cliquez sur l'icone de roue ⚙️
- dans la modal qui apparait restez dans l'onglet `General`
- Cochez la case `Highlight updates when components render.`

Maintenant vous pouvez intéragir avec votre composant et vous verrez un entourage de couleur qui va tendre du vert au orange foncé en fonction du rendu des composants.
Si votre application entière s'illumine comme un sapin de noël 🎄 c'est signe qu'il est temps de vous poser la question de la refacto !

![gif montrant les composants en actions qui sont encadré par la fonctionnalité de mise en surbrillance](/img/react-dev-tools.gif)

## Et après ?

Si vous avez des problèmes de rendu superflu, je vous invite à aller parcourir la doc de React et à regarder la section [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) cela vous donnera quelques idées d'optimisation possible.
