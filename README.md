# DoRéMi Lingo ! 

## The concept

## Figma design
### How did we use figma
Figma served as an essential tool in our app development journey.
We used Figma to organise our ideas, make a moodboard and establish a graphic chart. This initial step allowed us to conceptualize the app's look and feel before diving into the design and development phase.
We began with wireframing our app's layout and functionality, gradually refining it into detailed mockups.
By toggling to developer mode, we could inspect design components, access CSS attributes, and obtain valuable insights to expedite the implementation process.

### The different pages
In our Figma design, we organized the app's layout to streamline the development process. 
Here's an overview of the key pages within our app:
- A login
- An account creation
- A homepage
- The pages of the course
- The pages of the games
- The presentation of the app

### The link to our figma 
https://www.figma.com/file/ey7hkcauYj0NqeN2khOD6w/Projet-App-design?type=design&node-id=41%3A2010&mode=design&t=OKALkSITcQM9PYL5-1

## The pictures of our app 

<table>
  <tr>
    <td align="center"><img src="/Readme_pictures/Chargement.jpeg" alt="Loading" width="300"/></td>
    <td align="center"><img src="/Readme_pictures/Création compte.jpeg" alt="Account creation" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><img src="/Readme_pictures/log.jpeg" alt="Login" width="300"/></td>
    <td align="center"><img src="/Readme_pictures/Menu.jpeg" alt="Description de l'image 4" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><img src="/Readme_pictures/Complète la phrase.jpeg" alt="Sentense" width="300"/></td>
    <td align="center"><img src="/Readme_pictures/Drag and drop.jpeg" alt="Drag and drop" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><img src="/Readme_pictures/Réussite quizz.jpeg" alt="Success" width="300"/></td>
    <td></td>
  </tr>
</table>

## Courses organisation

### Chapitre 1 : Les bases du solfège
#### Unité 1 : Introduction au solfège

| Numéro de leçon | Type de leçon | Contenu de la leçon |
|:--------------:|:--------------:|:--------------:|
| Leçon 1 | Théorie de la musique| Qu'est ce qu'une portée|
| | | Qu'est ce qu'une clef |
| | | Qu'est ce qu'une note |
| | | Mini jeu : compléter une phrase|
| Leçon 2 | Lecture de notes| Lire Do Ré Mi|
| | | Mini jeu : associer les bonnes figures de notes avec Do Ré Mi |
| Leçon 3 | Lecture de notes| Lire Do Ré Mi Fa Sol |
| | | Mini jeu : associer les bonnes figures de notes avec Do Ré Mi Fa Sol |
| Leçon 4 | Lecture de notes| Lire Do Ré Mi Fa Sol La Si|
| | | Mini jeu : associer les bonnes figures de notes avec Do Ré Mi Fa Sol La Si|
| Leçon 5 | Lecture de notes| Lire Do Ré Mi Fa Sol La Si|
| | | Mini jeu : lire des suites de notes |

#### Unité 2 : Comprendre le rythme

| Numéro de leçon | Type de leçon | Contenu de la leçon |
|:--------------:|:--------------:|:--------------:|
| Leçon 1 | Théorie de la musique| Qu'est ce que le rythme|
| | | Qu'est ce qu'un temps |
| | | Comment compter les temps |
| | | Mini jeu : compléter une phrase|
| Leçon 2 | Théorie de la musique | Introduction de la noire et la blanche|
| | | Introduction de la croche |
| | | Introduction de la ronde |
| | | Mini jeu : compléter une phrase|
| Leçon 3 | Lecture de rythme| Rappel sur la noire et la blanche |
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |
| Leçon 4 | Lecture de rythme| Rappel sur la croche |
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |
| Leçon 5 | Lecture de rythme| Rappel sur la ronde |
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |

### Chapitre 2 : La notation rythmique
#### Unité 1 : Notation des durées

| Numéro de leçon | Type de leçon | Contenu de la leçon |
|:--------------:|:--------------:|:--------------:|
| Leçon 1 | Lecture de rythme| Ajout d'autres figures de rythme (double croche) |
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |
| Leçon 2 | Lecture de rythme | Figures de rythme composées de croches et doubles croches|
| | | Croche deux doubles |
| | | Deux doubles croche |
| | | Syncopette|
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |
| Leçon 3 | Lecture de rythme| Révision de tous les rythmes vus |
| | | Mini jeu : associer les bonnes figures de notes avec les noms de rythmes |

#### Unité 2 : Mesure et pulsation

| Numéro de leçon | Type de leçon | Contenu de la leçon |
|:--------------:|:--------------:|:--------------:|
| Leçon 1 | Théorie de la musique| Qu'est ce qu'une mesure |
| | | Qu'est ce qu'une pulsation|
| | | Qu'est ce q'un chiffre de mesure|
| | | Mini jeu : compléter des phrases|
| Leçon 2 | Théorie de la musique | Explication du binaire|
| | | Explication du ternaire|
| | | Les chiffres de mesure associés |
| | | Mini jeu : Dire si une mesure est ternaire ou binaire|
| Leçon 3 | Lecture de note et rythme| Petit rappel sur les notes |
| | | Mini jeu : Lire les notes et les rythmes, de plus en plus difficile |

The other courses are in preparation !

## How to run the app 
```
- npx expo start

```
## Project Structure :

```
my-music-app/
|-- android/          # Android project files
|-- ios/              # iOS project files
|-- assets/           # Images, fonts, and other static assets
|-- |-- images/
|-- |-- fonts/
|-- src/              # Source code for the app
|   |-- components/   # Reusable components
|   |   |-- Button/
|   |   |-- ...
|   |-- screens/      # Screens of the app
|   |   |-- Home/
|   |   |-- First_Course/
|   |   |-- ...
|   |-- navigation/   # Navigation configuration
|   |   |-- AppNavigator.js
|   |   |-- ...
|   |-- styles/       # Global styles and theme
|   |   |-- colors.js
|   |   |-- fonts.js
|   |   |-- styles.js
|   |-- utils/        # Utility functions and helpers
|   |   |-- sound.js
|   |   |-- ...
|   |-- App.js        # Main entry point of the app
|-- node_modules/     # Node.js modules
|-- .gitignore        # Git ignore file
|-- package.json      # Node.js dependencies and scripts
|-- README.md         # Project documentation
```

## Login information :

You can create an account or use :

    - username : Doremi
    - password : Doremi

Usernames and Passwords are stored in the AsyncStorage API.