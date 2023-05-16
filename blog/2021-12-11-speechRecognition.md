---
title: "Reconnaissance vocale où comment rendre vos slides accessibles"
description: "Présentation d'un api web permettant de rendre vos slides accessibles"
date: 2021-12-11
tags: ["Tips", "Avent", "Accessibilité", "SpeechRecognition", "Api", "Slide"]
keywords: ["Tips", "Avent", "Accessibilité", "SpeechRecognition", "Api", "Slide"]
image: "/img/11.jpg"
slug: /reconnaissance-vocale
authors: [chue]
---

Savez vous qu'il existe des API web permettant de jouer avec le micro de votre ordinateur au traver du navigateur web ?
Le web posséde nativement plein d'outils très simples à utiliser et certains d'entre eux peuvent améliorer l'accessibilité de vos applications.
Dans l'exemple d'aujourd'hui je vous partage un peu de code qui vous permettra d'ajouter la transcription de votre talk directement là où vous voulez. Personnellement j'utilise [Reveal.js](https://revealjs.com) et je suis en train d'ajouter un petit bandeau en bas de slide qui retranscrira en direct ce que je dis : Parfait pour proposer un contenu pour le plus grand nombre.

<!--truncate-->

> Vous trouverez un exemple plus avancé réalisé par [Thibaud Courtoison](https://twitter.com/errorname_) sur son repo github [Lien vers le code source](https://github.com/Errorname/talk-sound-of-silence-accessibility/blob/master/src/services/speechRecognition.js).

Ensuite si vous voulez vous amuser de votre coté vous trouverez toutes les informations importantes sur [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
Dans la même veine que cette Api de reconnaissance vocale, il existe une Api de synthèse vocale idéale pour vous la jouer R2-D2 🤖.

```html
<div>
  <p class="output"></p>
</div>

<script>
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  recognition.lang = "fr-FR"; // en français
  recognition.continous = true; // écoute continue
  recognition.interimResults = true; // recupère les résultats intermédiaires - réécriture à la volée des mots

  var output = document.querySelector(".output");

  recognition.addEventListener("result", (evt) => {
    const text = [...evt.results].map((r) => r[0].transcript).join("");
    output.textContent = text;
  });

  // fallback pour une écoute en continu
  recognition.addEventListener("end", () => recognition.start());

  recognition.start();
</script>
```
