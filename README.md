# To run the app :
```
- git clone https://github.com/ThibSara/music-theory-app.git
- cd music-theory-app
- npm install
- npm start 
- expo start
```
# Organisation :

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
|   |-- pages/      # Screens of the app
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


# Firebase database

- Create local sqlite database on device
- Prepopulate with default text for content (in case of offline first-use)
- Connect app content to the local databasee
- If online, sync local database with firebase database

