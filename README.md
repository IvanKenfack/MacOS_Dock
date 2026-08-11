# 🖥️ MacOS Dock

Reproduction en **JavaScript pur** de l'effet *"fish eye"* du dock de macOS : les icônes s'agrandissent de façon fluide selon la proximité du curseur, comme sur le vrai dock d'Apple.

![Aperçu du dock macOS](images/demo.gif)

🔗 **Démo en ligne :** [ivankenfack.github.io/MacOS_Dock](https://ivankenfack.github.io/MacOS_Dock/)

## ✨ Étapes

- [x] Mise en place du CSS de base du dock
- [x] Suivi en temps réel de la position de la souris
- [x] Calcul d'un indice de scaling en fonction de la distance curseur ↔ icône
- [x] Application de l'échelle aux éléments pour l'effet fish eye
- [x] Déplacement / réordonnancement du dock

## 🛠️ Technologies/Outils

- HTML5
- CSS3
- JavaScript (vanilla)
- OBS studio + FFmpeg pour le gif de la demo

## 🚀 Installation et utilisation

```bash
git clone https://github.com/IvanKenfack/MacOS_Dock.git
cd MacOS_Dock
```

Ouvrez simplement `index.html` dans votre navigateur, ou lancez un petit serveur local :

```bash
npx serve .
```

Puis rendez-vous sur `http://localhost:3000` (ou le port indiqué).

## 📁 Structure du projet

```
MacOS_Dock/
├── index.html      # Skelette de la page
├── app.css         # Styles du dock et des icônes
├── app.js          # Logique de l'effet fish eye
├── images/         # Icônes et assets visuels
└── package.json
```

## 🎯 Objectif

Ce projet a été réalisé pour approfondir mes connaissances en programmation évenementiel avec du javascript pur..

## Remerciements

#### Grafikart : [Projet original](https://grafikart.fr/tutoriels/dock-macos-javascript-1966)
#### [Mac icons gallery](https://www.macosicongallery.com/icons/weather-2025-11-14/) et wikipedia pour les icones.
#### Claude AI : Pour la génération du readMe.

## 📄 Licence

Ce projet est distribué sous licence libre — sentez-vous libre de l'utiliser et de l'adapter à des fins d'apprentissage.