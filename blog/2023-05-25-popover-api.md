---
title: Popover API
authors: [chue]
tags: [Chrome, Safari, popover, Html]
keywords: [Chrome, Safari, popover, Html]
---

## Popover avant

Vous avez surement déjà vu des popovers sur des sites web. Ce sont des petites fenêtres qui s'affichent au survol d'un élément. On les retrouve souvent au survol d'un bouton d'action pour expliquer ce que fait ce bouton.

Si vous avez déjà essayé de faire un popover, vous avez surement galéré à le positionner correctement. Il faut prendre en compte la taille de la fenêtre, la position de l'élément, la taille de l'élément, la taille du popover, etc.
En général, on utilise des librairies pour faire ça, mais saviez vous qu'il existe une API native pour faire des popovers ?

## Popover API

Cette API est disponible sur Chrome et Safari. Elle permet de créer des popovers sans se soucier de la position de l'élément, de la taille de la fenêtre, c'est le navigateur qui s'occupe de tout.

C'est encore expérimentale mais un récent article annonce son arrivée sur Chrome 114. 

> [introducing-popover-api](https://developer.chrome.com/blog/introducing-popover-api/)

En bref le navigateur va gérer les points suivants :
    - La position du popover (z-index)
    - La fermeture du popover (click en dehors du popover)
    - La gestion du focus
    - La gestion du clavier

Et surtout, pas besoin de Javascript pour gérer tout ça, c'est natif ! 🙌🥳

## Comment ça marche ?

Ce n'est pas très compliqué, il vous faut :
 - un attribut `popover` sur l'élèment contenant le popover
 - un `id` sur ce même élément
 - un attribut `popovertarget` avec la valeur de l'id du popover sur l'élément qui déclenche le popover

```html
<div id="popover" popover>
    <p>Popover content with a close button inside it</p>
</div>

<button popovertarget="popover">Popover</button>
```

## Personnalisation

Par défaut le composant qui déclenche l'apparition du popover permet aussi de le fermer. Mais vous pouvez explicitement définir un élément qui permet de fermer le popover avec l'attribut `popovertargetaction`.

```html
<button popovertarget="my-popover" popovertargetaction="hide">
    <span aria-hidden=”true”>❌</span>
    <span class="sr-only">Close</span>
</button>
```

Et intégrer ça à l'exemple précédent :

```html
<div id="popover" popover>
    <button popovertarget="my-popover" popovertargetaction="hide">
        <span aria-hidden=”true”>❌</span>
        <span class="sr-only">Close</span>
    </button>
    <p>Popover content with a close button inside it</p>
</div>

<button popovertarget="popover">Popover</button>
```

Vous avez accez à d'autre personnalisation comme :
  - `popover=auto` ou `popover=manual` pour définir le comportement du popover (close on outside click)
  - le style de l'overlay du popover avec `::backdrop`

## Pour la suite

Elle est encore expérimentale et propose peu de fonctionnalité. À terme il sera possible de personnaliser les animations d'entrée et de sortie du popover par exemple.

Si vous voulez en savoir plus, ou voir d'autre exemple, je vous invite à lire l'article de google sur le sujet.

Vous retrouverez aussi toute la documentation sur l'API sur le site de Mozilla

> [MDN - popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)