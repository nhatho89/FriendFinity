# Frontend

As a single-page application, FriendFinity utilizes the React.js framework and follows the Flux architecture to deliver the frontend.

## npm

Node package manager (npm) is used to install all of the frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete.

## Webpack

Webpack conveniently bundles all of the frontend components and Flux parts. The [bundle file](/app/assets/javascripts) is included in the main [application.js](/app/assets/javascripts/application.js) file.

## React & Flux

All of the React components, Flux action creators, API utilities, dispatcher, and stores are located in the [frontend](../frontend) directory.

## CSS

Site layout and styling are done entirely with custom CSS.

## Others

Other frontend dependencies are:

- React DOM
- React Router
- React History to manipulating the browser history
- React Linked State Mixin
- Keymirror for app constants (used among the action creators and the stores)
- Babel for transpiling JSX into JavaScript.
