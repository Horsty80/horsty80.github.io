---
title: "Les standards du web"
description: "Conférence d'Hubert Sablonnière sur les standards du web"
date: 2021-12-20
tags: ["Tips", "Avent", "Standard", "Hubert Sablonnière"]
keywords: ["Tips", "Avent", "Standard", "Hubert Sablonnière"]
image: "/img/20.jpg"
slug: /standard-web
authors: [chue]
---

# Mon histoire de développeur

Actuellement je travaille beaucoup dans l'écosystème React / React Native. Mais ça n'a pas toujours été le cas.

Si je remonte à mes débuts, je faisais du Php, de l'Ajax et du JQuery.

Au cours de mes expériences j'ai été très bien accompagné, un de mes mentors m'a toujours poussé à comprendre les bases d'une techno avant d'utiliser pleinement la dite techno.
Je me souviens qu'une fois j'avais codé une fonctionnalité en JQuery. Il m'avait alors montré comment faire la même chose en javascript natif. Ce moment m'a énormement marqué, et encore aujourd'hui cela guide ma façon de développer. Donc un grand merci à lui pour tout cet apprentissage.

<!--truncate-->

Pourquoi vous parler de tout ça ?

Tout simplement car je pense, et j'en suis convaincu, que de revenir à des bases est quelque chose de primordial. Rien ne nous empêche d'utiliser les frameworks modernes et les technos tendances, mais il faut que ça soit justifié. Le faire juste parce que ça à l'air cool n'est pas un argument entendable.

Il faut s'en cesse se poser les questions : quel est mon problème ? comment le résoudre ? est-ce que j'ai réellement besoin de tel framework pour y parvenir ?

## Des standards aux frameworks modernes

Si on en revient aux frameworks modernes par exemple `Angular`, `Vue` et `React` ils implémentent tous le concept de `component`on y retrouve des `inputs` et des `outputs` chacun à leurs manières. Du coup ce qui est intéressant ce n'est pas de savoir comment faire un `component` en angular ou react, mais de comprendre le concept même de `component`et ce que cela implique.
Petit spoiler, on peut faire des `components` sans utiliser de framework, juste avec les standards html - coucou les `web component`.

Comprendre ça est ce qui permet de ne pas se retrouver enfermé dans un framework, et de pouvoir s'adapter aux besoins et problèmatiques rencontrées.

Cet exemple que je viens de vous raconter, c'est en partie ce qu'Hubert Sablonnière explique dans son talk :

[Le Web, ses frameworks et ses standards : déconstruire pour mieux (re?)construire - Avril 2019](https://www.youtube.com/watch?v=uFxVH5mFAKg)

Vous retrouverez cette approche pour tous les concepts du web moderne, allez la visionner sans hésiter 🎥 📺 !

## Des builds "Magiques"

Quand on fait un `npm build` on ne se pose pas de question, tout est déjà configuré, et si vous avez suivi les règles, votre projet va compiler.
Mais qu'en est t'il vraiment ?

On développe sur des machines puissantes, on tire des dépendances parfois gigantesques - coucou `node_modules` - et le site fonctionne.

Mais avez vous pensé à vos utilisateurs ? Ils n'ont pas spécialement 64Go de RAM ou des mobiles dernières générations et pourtant ça marche aussi chez eux (avec plus ou moins de succès parfois). Comment est-ce possible ?

Si vous creusez un peu plus, vous allez vite tomber face aux notions de `tree-shaking`, de `minification`, des `modules` et bien d'autres encore.

Si cela vous intéresse, je ne saurais que trop vous recommander cette seconde conférence d'Hubert.
J'aime beaucoup la manière qu'il a d'aborder ces thèmes.

Plutôt que de prendre pour acquis ces méthodes liées aux builds et à l'optimisation. Pourquoi ne pas revenir à l'époque de `JQuery` ou des `cdn`, quand un simple import dans notre `html` suffisait pour faire des choses complexes ? Il tente d'appliquer les concepts modernes avec la façon de faire du passé et c'est exellent !

Je n'en dis pas plus, je vous laisse découvrir par vous même 😇.

[Dans cette jungle de l’outillage JavaScript, un retour à la simplicité est-il encore possible ? - Sept 2021](https://www.youtube.com/watch?v=t52gxrBGAIQ)

> Comme toujours quand je vous parle de quelqu'un je vous laisse le lien vers son site : [Huber Sablonnière](https://www.hsablonniere.com)
