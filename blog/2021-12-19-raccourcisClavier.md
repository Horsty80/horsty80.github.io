---
title: "Maitriser son IDE - les raccourcis"
description: "La dernière fois où j'ai appris quelque chose"
date: 2021-12-19
tags: ["Tips", "Avent", "VsCode", "Raccourcis"]
keywords: ["Tips", "Avent", "VsCode", "Raccourcis"]
image: "/img/19.png"
slug: /raccourcis-clavier
authors: [chue]
---

Je vais vous racconter une histoire.

Il y a pas si longtemps, pendant une séance de pair programming, alors que je voulais modifier le nom d'une variable utilisée dans le fichier, mon collègue me voyait utiliser la fonctionnalité de sélection du prochain match - raccourci cmd + d (`⌘ + d`) - pour ensuite faire ma modification.

> Mais tu fais quoi !!! Rename ta variable !!!

Il n'avait pas tord, qu'est ce que j'avais en tête tout ce temps. Pourquoi me compliquer la vie pour faire un truc alors qu'un raccourci, ici `F2` existe pour faire la même chose et en mieux !

<!--truncate-->

Avant, si j'avais 5 occurences de ma variable + des méthodes associées je devais :

- appuyer 5 fois sur `⌘ + d`
- m'assurer d'avoir bien sélectionné les variables et pas des méthodes, car `⌘ + d` n'est pas sensible à la casse. Donc `maVariable` et `setMaVariable` ça match...
- si la variable etait exportée, je devais aller la modifier dans les autres fichiers. Je vous raconte pas la galère à base de recherche globale dans le projet.

Tout ça !! Quand j'y repense, j'étais mauvais ! C'est pas possible, m'imposer tout ça alors qu'un simple `F2` et c'était réglé !!

Pourquoi vous raconter ça ?

Il n'y a pas de honte à avoir. On a le droit de se tromper, de ne pas savoir. Le plus important c'est d'avoir eu la bonne réaction lorsque mon collègue m'a fait la remarque. Je ne me suis pas caché derrière une fausse excuse du style `nan mais je prèfere faire comme ça`. J'ai pris en compte ce qu'il m'a dit, et j'ai appris.
L'apprentissage fait partie intégrante de notre métier. D'ailleurs le `pairing` (ou `Pair programming`) est un excellent moyen de s'améliorer je vous le conseille.
Partager c'est ce qui fait avancer, en écrivant mes articles j'apprends, et j'espère que vous aussi.

> Je vous laisse le blog de mon collègue [Blog - geowarin](https://geowarin.com), il utilise le même template que moi d'ailleurs, c'est un homme de goût !
