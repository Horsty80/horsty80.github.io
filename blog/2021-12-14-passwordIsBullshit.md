---
title: "Password rules are bullshit"
description: "Où comment des règles pensées sécurités peuvent devenir contre productif"
date: 2021-12-14
tags: ["Tips", "Avent", "Securité", "Mot de passe"]
keywords: ["Tips", "Avent", "Securité", "Mot de passe"]
image: "/img/14.png"
slug: /password-is-bullshit
authors: [chue]
---

Qui ne s'est jamais retrouvé devant un formulaire d'inscription à saisir un mot de passe ou utiliser un générateur de mot de passe et voir le champ indiquer une erreur.

![Barack obama se demandant ce qui se passe](/img/wtf.gif)

<!--truncate-->

La frustration à ce moment là est énorme et les questions émergent :

- Pourquoi le mot de passe que j'utilise régulièrement ne marche pas ?
- Pourquoi le mot de passe généré par le trousseau apple ne fonctionne pas ?
- Comment ça je ne peux pas mettre 24 caractères ?
- Je t'ai déjà donné une majuscule, un chiffre, un caractére spécial qu'est ce que tu veux de plus ?

> Petit tips, faites attention aux messages d'erreurs que vous affichez à vos utilisateurs pour prévenir cette frustration.

Une fois le moment de l'étonnement passé et le problème trouvé, je me rends compte que c'est une règle stupide qui m'empêche de finaliser mon inscription.

`Ne doit pas contenir plus de 2 fois un même caractère par exemple : 111 ou AAA`

À ce moment là dans ma tête c'est à peu près ça !

![Femme detruisant un ordinateur avec un fusil à pompe](/img/explode.gif)

Aujourd'hui je ne vous propose pas une solution miracle mais je partage cet article qui explore le sujet des règles des mots de passe.

[password-rules-are-bullshit en anglais](https://blog.codinghorror.com/password-rules-are-bullshit/)

> L'article date du 10 Mars 2017 mais je le trouve toujours d'actualité : à l'époque de la double authentification, le questionnement autour de la sécurité n'aura jamais été aussi présent dans notre quotidien.

Ce que j'aime dans cet article c'est la façon dont l'auteur prend une règle et en montre les limites.
Il explique par exemple comment à partir d'un ensemble de règles respectées on peut malgré tout arriver à un mot de passe non sécurisé. Il présente également des statistiques sur les mots de passe les plus utilisés.

Si vous ne l'avez pas déjà vu, `XKCD` a réalisé un petit comic sur les mots de passe, je vous le recommande.
[XKCD - Password Strength](https://xkcd.com/936/)

En conclusion, ce n'est pas une multitude de règles compliquées qui assurent un mot de passe sécurisé : une simple règle comme le nombre de caractères minimum augmente déjà fortement la résistance des mots de passes de vos utilisateurs. Il ne faut pas l'oublier mais le formulaire de login/inscription est une pièce des plus complexes dans une application : vous devez y apporter du soin et ne pas la négliger 😉.
