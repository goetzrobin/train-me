# TRAIN.ME

This is a fullstack application build with the following technologies:

- Frontend: Angular SPA written in TypeScript and hosted on an NGINX machine
- Backend: Spring Boot Application in Java and hosted on OpenJDK
- Database: MySQL Database
- Infrastructure as Code: Dockerfiles for the single applications, docker-compose to bring up a **production** environment

## Prerequisites

In order to compile and run this application you will need the following installed:

- NodeJs: Needed for Angular development and building the static assets
- npm: Needed to install dependencies for Angular application
- Java 8: Needed for Spring Boot development
- Maven: Needed to install dependencies for Spring Boot application [this is actually included with Spring Boot]
- Docker: Needed to spin up our production environment with docker-compose

## Installing Dependencies

### Frontend

First we change into our backend directory **train-me-fe**

```
cd train-me-fe
```

Then we just issue install our dependencies that are described in the package.json file

```
npm i
```

### Backend

```
cd train-me-be
```

Then we just issue install our dependencies that are described in the pom.xml file

```
mvn clean install
```

## Starting Up Development

### Database

First Start Up Your Development Database. Use the .dev.yml docker-compose file in order to only start up the MySQL database without
our frontend or backend.

```
docker-compose -f docker-compose.dev.yml up
```

### Backend

First we change into our backend directory **train-me-be**

```
cd train-me-be
```

Then we start the spring boot application. Either with the IDE of your joice or the following command:

```
./mvnw spring-boot:run
```

### Frontend

First we change into our frontend directory **train-me-fe**

```
cd train-me-fe
```

Then we start up the Angular development server (which is basically a NodeJs machine with hot reload as you hit save) on its default port of 4200

```
ng serve
```

##### Now you should be up and running with your application locally

## Build Process

### Frontend

Since we have a multi stage Dockerfile with its own build step included, all the magic is done by docker and we do not need to manually build our Angular application

```
WE BUILD AUTOMATICALLY WITH DOCKER. NO MANUAL BUILD NEEDED
```

However, if you want to trigger the transpilation of your TypeScript source files into JS here is how to do it:

First we change into our backend directory **train-me-fe**

```
cd train-me-fe
```

Then we just issue the common build command to build our static files

```
npm run build
```

### Backend

First we change into our backend directory **train-me-be**

```
cd train-me-be
```

Then we just issue the common build command to build our jar

```
./mvnw clean package && java -jar target/gs-spring-boot-docker-0.1.0.jar
```

## Starting Up Production

Since all the hard work is done and we have compiled our Angular frontend in a static index.html and all necessary js and css chunks, and built our jar for our Spring Boot application, all we need to do is use Dockerfiles to copy/mount them in the respective containers and spin up our applications, as well as our MySQL database.

```
docker-compose up
```

If you need to rebuild an image, e.g. after making changes to the source code, run

```
docker-compose up --build
```

## Internal Architecture

Please refer to the README's in the project folders for more specific information such as internal architecture, etc.
