<p align="center">
    <img src="https://i.imgur.com/bF1WkFW.png" width="300">
</p>

<p align="center">
    <a href="https://travis-ci.org/laravel/framework">
        <img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status">
    </a>
    <a href="https://packagist.org/packages/laravel/framework">
        <img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License">
    </a>
</p>

# Site
https://jonanv.github.io/portafolio-angularjs/

![Imgur](https://i.imgur.com/6BOG9Q9.png)

# Install dependences
in ```portafolio-angularjs/```

```javascript
npm install
```
or
```javascript
yarn install
```

# PortafolioAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

# Create project
```javascript
ng new NameProject
```

# Start project with browser
```javascript
ng serve -o
```

# Create component without spec.ts
```javascript
ng g c shared/header --spec=false
```
or

```javascript
ng generate component shared/header --spec=false
```

# Create service
```javascript
ng g s services/infoPagina --spec=false
```
or
```javascript
ng generate service services/infoPagina --spec=false
```
# Create project build to production
```javascript
ng build --prod
```

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/portafolio-angularjs/dist/portafolio-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```
