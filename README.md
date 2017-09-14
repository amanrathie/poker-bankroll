# Poker Bankroll

A project to manage your poker bankroll

## Development server

This is a configuration found in this post: https://stackoverflow.com/questions/42895585/hooking-up-express-js-with-angular-cli-in-dev-environment to make Angular CLI work with Express with both having live reloading.

* Install nodemon: `npm install -g nodemon` and open two terminals in the project folder 
* In the first one, run `ng serve --proxy-config proxy.config.json`. This will run the app in http://localhost:4200
* In the second one, run `nodemon server.js --watch server`. This will start the express server in http://localhost:3000 and the API will be available in the /api path.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
