# React Recipes!

![LOVE REACT](./assets/love-react.jpg)

To get started with this homework:

- cd into `recipes`
- run `npm install`
- run `npm start`

In the `/recipes` directory, you will find:

- A mostly empty React application
- An `index.html` (in `/recipes/public/index.html`) that has a recipe page written in HTML
- A JSON array of recipes in `/recipes/src/data/recipes.json`

Your task is to:

- Take the `index.html` and **separate it out into components**
- Use the data in the recipes to populate those components

Here are guided steps:

## 1. Move hardcoded HTML into App.js

Take the HTML in the `public/index.html` file into the App.js component as JSX. Keep in mind you'll have to modify the JSX a little bit...because HTML and JSX are not the same!

## 2. Consider your components

Take a look at the recipe page, and consider how you might want to break up one huge component into separate components.

You might have components for the `Recipe`, the `RecipeHeader`, `RecipeInstructions`, and `Footer`. If you want to add more, that's ok! React encourages modularity and reusability.

## 3. Separate JSX into components

Separate the single component into the separate components. Keep the hardcoded data about the Chicken Tikka Masala in the JSX for now.

## 4. Pass the data into components using props

Instead of hard-coding all the data, try passing it in as props.

Pass the data in the `recipe` object in the App.js component into the child components by setting prop values.

## ⚡️ Your homework submission should include:

- A pull request created on _this repo_.
- Completion, comfort, wins, losses, questions... you know the drill.
