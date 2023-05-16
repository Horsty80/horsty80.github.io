---
title: "Bien commencer dans l'écosysteme React"
description: "Je vous donne quelques concepts clés qui me semble essentiels pour bien débuter dans l'écosysteme React"
date: 2021-12-22
tags: ["Tips", "Avent", "React", "React Native", "Destructing", "Immutabilité"]
keywords: ["Tips", "Avent", "React", "React Native", "Destructing", "Immutabilité"]
image: "/img/22.png"
slug: /react-init
authors: [chue]
---

## Ecmascript avant React

Je vois souvent des devs partir bille en tête sur React pensant peut-être que cela suffit mais il n'en est rien. Il ne faut pas oublier que l'apprentissage c'est comme un escalier.

![jeune enfant passant de la première marche à la cinquiéme marche, sur chaque marche il y à écrit dans l'ordre HTML / CSS / Javascript / Git / Github / React](/img/escalier.png)

Pour travailler efficacement sur un projet dans l'écosysteme ReactJs ou ReactNative, il est primordial de maitriser des concepts de base du javascript modern.

Je vais vous en lister deux qui, pour moi, sont indispensables avant de se lancer dans du developpement React.

<!--truncate-->

## Le Destructuring

Devant ce nom compliqué, se cache un concept très simple.
On se base sur la structure d'un objet ou tableau pour assigner des variables.
Cela permet d'avoir un code moins verbeux, et de gagner en lisibilité.
Améliorer la relecture de son code est important. Cela se traduit sous plusieurs formes :

- destructurer un objet

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

const { lastName, firstName } = user;

console.log(lastName); // print 'Hue'
console.log(firstName); // print 'Cyril'
```

- destructurer un tableau

```js
const users = ["Hue Cyril", "John Doe", "Jane Doe"];

// j'omets d'écrire une variable pour ne pas prendre le 3ème élement du tableau.
const [firstUser, , secondUser] = users;

console.log(firstUser); // print 'Hue Cyril'
console.log(secondUser); // print 'Jane Doe'
```

- destructurer le retour d'une fonction

```js
const getUser = () => {
  return {
    lastName: "Hue",
    firstName: "Cyril",
  };
};
const { lastName, firstName } = getUser();

console.log(lastName); // print 'Hue'
console.log(firstName); // print 'Cyril'
```

- destructurer les paramètres d'une fonction

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

// Plutôt que d'avoir un objet 'user' et de retourner `${user.lastName} ${user.firstName}`;
// Je peux destructurer les paramètres.
const getDisplayName = ({ lastName, firstName }) => {
  return `${lastName} ${firstName}`;
};

const displayName = getDisplayName(user);

console.log(displayName); // print 'Hue Cyril'
```

- Renommer une variable destructurée

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

// Ici je rennome 'lastName' en 'playerName'
// Attention à ne pas confondre avec la notation Typescript.
const { lastName: playerName, firstName } = user;

console.log(playerName); // print 'Hue'
console.log(firstName); // print 'Cyril'
```

> Dans React on retrouve ce principe dans ce qu'on appelle les `hooks` ou tout simplement dans les props.

```js
// exemple de props
const MyComponent = ({ title, name }) => {
  //...utilisation de title et name dans le component
};

// exemple de hook
const [maVariable, setMaVariable] = useState(null);
// ici on destructure le retour de useState en une variable et un setter
```

## Spread opérateur au secours de l'immutabilité

Si vous voulez aller plus loin dans l'écosysteme `React` il va falloir être à l'aise avec la notion d'immutabilité.

> Ce n'est pas le but de l'article, mais sachez qu'un type primitif (string, number, boolean, etc.) est immutable alors que les types de référence (object, array, function) sont eux mutables.

L'immutabilité, c'est s'assurer qu'on ne va pas modifier la valeur d'origine lors de la création de nouveaux objets.
Cela fait entre autres partie de la programmation fonctionnelle.

Concrètement avec un objet on pourrait faire ça :

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

user.firstName = "John";
```

Mais attention ce n'est pas une bonne façon de faire ! Car nous avons modifié notre objet d'origine.
Si l'on souhaite respecter le principe d'immutabilité nous devrions créer une copie avec la propriété modifiée de celui-ci.

`Object.assign()` pourrait nous aider.

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

// J'assigne à ma variable `newUser` un objet
const newUser = Object.assign({}, user, { firstName: "John", age: 30 });
//                            ^     ^           ^
//                            |     |           |
//                           (a)   (b)         (c)
// a : le type que je créé au retour de la fonction (ici un objet)
// b : les valeurs de l'objet que je souhaite copier
// c : propriété suppémentaire, si c'est une propriété déjà existante alors on la surcharge

console.log(newUser); // Print { lastName: 'Hue', firstName: 'John', age: '30' }
console.log(user); // Print { lastName: 'Hue', firstName: 'Cyril' }
```

On voit qu'un nouvel objet a été créé, avec une propriété supplémentaire - `age` - tout en modifiant une propriété de base - `firstName`.
Cependant, à aucun moment l'objet d'origine n'a été modifié : il reste le même.
Utiliser la méthode `Object.assign()` reste un peu trop verbeux et `ES6` a apporté le `spread operateur`. 
Ce qu'on a écrit au dessus peut se simplifier comme ça :

```js
const user = {
  lastName: "Hue",
  firstName: "Cyril",
};

// J'assigne à ma variable `newUser` un objet
const newUser = {
  ...user,
  { firstName: "John", age: 30 }
};

console.log(newUser); // Print { lastName: 'Hue', firstName: 'John', age: '30' }
console.log(user); // Print { lastName: 'Hue', firstName: 'Cyril' }
```

L'immutabilité prend tout son sens avec `Redux` ou `RTK` (redux tools kit) ou encore avec la programmation fonctionnelle.

Redux est une bibliothèque de gestion d'état, elle posséde un état initial stocké dans le `store`, et modifie celui-ci en fonction d'actions qu'on lui passe - `dispatch`
La bibliothèque Redux utilise pleinement le principe d'immutabilité et a d'ailleurs participé à la démocratiser dans nos frameworks front comme React.

On retrouve dans redux le `spread opérateur` pour gérer le principe d'immutabilité.

Notre exemple plus haut pourrait donner quelque chose comme ça :

```js
 const initialState = {
  lastName: "Hue",
  firstName: "Cyril",
}

const reducer = (state = initialState, action) => {

reducer(action.type) {
  case 'CHANGE_AGE':
    return {
      ...state,
      age: action.payload
    }
  default:
    return state;
  }
}

dispatch('CHANGE_AGE', {age: 30});

```

Si je souhaite mettre à jour l'âge de mon utilisateur, je `dispatch` l'action correspondante, mon `store` se met à jour mais je ne touche pas à l'objet d'origine cela me permet de conserver ses valeurs.

> Quand on parle ici d'`origine`, c'est uniquement l'objet avant sa modification et non pas l'objet à sa création initiale.

En procédant ainsi, cela permet de faire plein de choses comme pouvoir revenir à un état antérieur facilement - coucou `react dev tools`. Utiliser l'immutabilité au quotidien améliorera votre façon de penser le code et rendra celui-ci plus propre et plus facile à comprendre.

## N'oubliez pas

Rien n'est immédiat et l'apprentissage est soumis à cette même règle. Ne cherchez pas à vous précipiter sur la dernière techno tendance, mais intéressez vous aux principes et concepts de base.
Si React est ce qui vous tente alors ce petit article est une bonne mise en bouche.
