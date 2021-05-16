# TRAIN ME - Backend

## Purpose

The purpose of this application is to allow users to create their own individual workout plans and keep track of their workout through the application.

## Architecture

We have a very simple architecture with one MySQL database, an Angular frontend, and this SpringBoot backend

You can find the frontend application here: [TrainMe Frontend](https://github.com/goetzrobin/train-me/tree/maintrain-me-fe)

## Quick Start

This backend is a Maven based Spring Boot application, which means all you need is Java 8 and Maven to be able to run this application

### Prerequisites

-   [Java 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
-   [Maven](https://maven.apache.org/install.html)

### Using IntelliJ (recommended)

IntelliJ will recognize the Spring Boot application
And mark the following as the main class

```java
com.uscs.trainmebe.TrainMeBeApplication
```

### Using Command Line

Spring boot has its own command line runner, which can be found in the root directory of this project.
This makes starting the application as easy as running the following command

```shell
./mvnw spring-boot:run
```

## Internal Architecture

### Folder Structure

-   **user**: Folder with all functionality to handle user interactions
-   **shared**: Commonly used utilities and configurations shared by all modules in the project
  -   **config**: Shared Configuration
  -   **exception**: Custom Exception Handlers for all REST Endpoints
  -   **helper**: _Static_ helper classes used throughout all of the procet should be added here
  -   **model**: Models used whole application, such as application wide defined API requests,responses and pagination results
-   **TrainMeBeApplication**: Spring Boot entry point into our application. Has the main method that spins up our app.

### Single Module Structure

We split code vertically, by the feature instead of technical concern, which means that every module has the same structure.

-   **controller**: REST Controllers, which take and validate requests and build responses based on service calls and their exceptions
-   **dao**: Data Access Objects, which handle database calls and expose JPA repository "magic" methods
-   **model**: Models used specifically for this module. If you find yourself creating a model that is reused by other documents, please move it to the shared model folder
-   **service**: Services that execute business logic and database calls based on the parameters they are called with from controllers or other services

## Properties

The following file should match the application.properties and make it easy for
new developers to just copy and paste them right from the README.

Please note the comments about which datasource url to pick based on local development or building for use with the docker-compose.

```
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.dialect.storage_engine=innodb
# USE THIS FOR LOCAL DEVELOPMENT
  spring.datasource.url=jdbc:mysql://localhost:33061/train_me
# USE THIS FOR DOCKER COMPOSE
#spring.datasource.url=jdbc:mysql://database:3306/train_me
spring.datasource.username=springuser
spring.datasource.password=ThePassword
```
