# DoRéMi Lingo ! 

## The concept

## Figma design
### How did we use figma
We used Figma to organise our ideas, make a moodboard and a graphic chart. 
We also used it to first create a wireframe and then a mockup
It was really helpful for the coding part because figma offers the posibility to have de dev mode to help coding

### The different pages
In that figma we organised the app so that it was easier to code it. 
Here are the pages for our app : 
- A login
- An account creation
- A homepage
- The pages of the course
- The pages of the games
- The presentation of the app

### The link to our figma 
https://www.figma.com/file/ey7hkcauYj0NqeN2khOD6w/Projet-App-design?type=design&node-id=41%3A2010&mode=design&t=OKALkSITcQM9PYL5-1

## Courses organisation

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