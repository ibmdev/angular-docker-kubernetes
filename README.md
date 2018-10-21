# InIhmPrototype1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

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

## Projet Infrastructure / Containerisation

Pre-requis

Installation de l'outil Angular CLI (dernière version)

> npm install -g @angular/cli

# Installer et démarrer l'application localement

> npm install

> ng serve -o

# Installer et démarrer l'application dans un container Docker

> npm install

> ng build

> docker-compose build

> docker-compose up

# Promotheus

https://prometheus.io/docs/guides/cadvisor/



# Guide installation

## Pré requis

# Installation Angular CLI

> npm install -g @angular/cli

# Build de l'application

> npm install 
> ng build

# Démarrage de l'application en local

> ng serve -o

# Build de l'image Docker 

> docker-compose build

> docker-compose up

# Accès à l'application

> http://localhost/index.html 

# Accès API Corporations

> http://localhost:3000/api/corporations

# List of images

> docker images / docker image ls

# List of containers running

> docker ps

# Start and stop Containers

> docker start CONTAINER_NAME
> docker stop CONTAINER_NAME

# Delete Containers

> docker rm CONTAINER_NAME

# List of 3 networks containers 

> docker network ls

