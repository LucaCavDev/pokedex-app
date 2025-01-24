# Pokedex Web App

## Project Description

This is a **Pokedex** web app built with **Gatsby.js**, **React**, and **PokeAPI**. It allows users to search for and view information about over 150 Pokémon, including their names, images, descriptions, and genus. The app supports multiple languages, including English, Italian, French, and Spanish, allowing users to view Pokémon data in their preferred language. The app also features pagination and a search bar for easier navigation.

## Dependencies Used

### **Core Dependencies**
- **gatsby**: A static site generator based on React, used to build fast websites and apps.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: A package that provides DOM-specific methods for React.
- **axios**: A promise-based HTTP client for making requests to the PokeAPI.
- **gatsby-plugin-image**: A Gatsby plugin for optimized image loading.
- **gatsby-plugin-sharp**: A plugin for image processing, used with Gatsby.
- **gatsby-source-filesystem**: A Gatsby source plugin to pull data from the local filesystem.
- **gatsby-transformer-sharp**: A plugin that helps Gatsby work with images (works alongside `gatsby-plugin-sharp`).
- **react-intl**: A library to handle internationalization (i18n) for multi-language support.
- **react-paginate**: A component for handling pagination of large lists, used for displaying Pokémon.

### **Dev Dependencies**
- **@testing-library/jest-dom**: Provides custom jest matchers for testing DOM nodes.
- **@testing-library/react**: A library for testing React components by simulating user interactions.
- **babel-jest**: Babel plugin for Jest, used to compile code before testing.
- **cypress**: End-to-end testing framework used for testing the app's behavior in a browser.
- **gatsby-plugin-sass**: A Gatsby plugin to support SCSS/SASS styling in the project.
- **jest**: A testing framework used for running unit tests in the project.
- **prettier**: Code formatter that ensures consistent code style across the project.
- **sass**: A CSS preprocessor to make writing CSS more powerful and flexible (used with Gatsby and `gatsby-plugin-sass`).


## Run Locally

To run the **Pokedex Web App** locally, follow these steps:

### 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/LucaCavDev/pokedex-app.git
cd pokedex-app
```

### 2. Install dependencies
Run the following command to install the project dependencies:

```bash
npm install
```

### 3. Start the development server
Once the dependencies are installed, start the development server by running:

```bash
npm run develop
```

### 4. View the site
Open your browser and navigate to http://localhost:8000 to see the Pokedex Web App running locally.



## Deployed Website
```bash
https://pokedex-app-five-drab.vercel.app/
```
