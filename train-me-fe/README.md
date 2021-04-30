# TRAIN ME - Frontend

This app is a Single Page Application. We also use Material Angular as a component library, which provides us with a
Material Design based look and feel for the whole application.

## Quick Start

##### What you will need

-   [nodejs](https://www.nodejs.org/download) - A JavaScript runtime for your computer that will run the Angular Development server
-   [Redux Dev Tools](<[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)>) - A browser extension that let's you see and debug the State of your Application (optional but recommended)
-   [Train Me Backend](https://www.github.com/goetzrobin/train-me/train-me-be) - The Spring Boot Backend that you will connect to locally through the URL specified in _/src/environments/environment_. It is right here in the same repo!

##### Commands

-   `npm i` - tells the node package manager to install all dependencies defined in the _package.json_ file of
-   `ng serve` - tells the Angular CLI to spin up a local development server that reloads when files are changed and can be access at _http://localhost:4200_

## Project Structure

### Overall Design With NGRX Store

![NGRX State Management](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

While Angular is often described to be an MVC framework for front end applications, there has recently been a paradigm shift in terms of architecture of user facing applications. Instead of thinking of a front end application as multiple small instances of MVC components that have their own button listeners, internal variables and specific APIs to share those with other parts of the application, the new approach is to have every change to the User Interface, aka the state of the application, flow through a single source of truth, the NGRX store. Let's take a look at the above diagram.

-   **Component:** This is the part of the Angular Application that is interacting with the User. It displays a graphical interface, binds internal functionality to the rendered buttons and fields. It validates user input and makes sure that the _emitted_ input is validDetails for it to be able to passed on into the NGRX State Management Life-cycle. Components are dumb. They only take in static inputs or Observables, reactive streams of parts of the state, if necessary for user interaction. They only emit outputs through event emitters. They do not call services or interact with the NGRX Store. This functionality is left to **Containers**.
-   **Container:** While not shown in the above diagram, in our application the **Container** is a special type of components. Containers are smart. They can interact with multiple Services in order to compose the necessary functionality needed to generate the desired **State**. It has also access to the **NGRX Store** and all its **Selectors** and **Actions**
-   **State:** A central store of all information that combined makes up the data of your application. State is immutable, which means that every action replaces the current state as a whole. Think of a global JSON Object that has all the variables that are currently important.
-   **NGRX Store:** Is what makes our State reactive. Reactive State means that when you subscribe to it through a **Selector**, which gives you access to a specific part of the state, you will get an observable stream. Think of push notifications to your components whenever the state changes. The **NGRX Store** is the reactive implementation of your **State**
-   **Action:** Want to change the state? Dispatch an Action! Actions are basically requests to change the State. They have a _type_ and can be associated with a _payload_, aka the information you want to pass to the Store upon which the state is updated. Actions are similar to POST requests. The URL is the type. The body is the payload. The NGRX Store is the back end application that takes the payload, does some computations (in our case this would be **Effects** and then stores the data in the database (updates the state through a **Reducer**)
-   **Reducer:** The reducer is actually only a function. It takes in an **Action** (with its type and payload) and the current State of the application and spits out the new state. Remember, **State** is immutable, which means that the old State is replaced with a new State object in the **Reducer**. However, since the old **State** is an argument to our reducer function we can carry over all old data that we leave untouched. Access to the new State is given through **Selectors**
-   **Selector:** As the name already implies, **Selectors** give other parts of the application access to specific parts of the State. Selectors slice and dice the current state so actionable information is exposed to **Containers** or **Services.** Selectors always return an Observable Stream of the selected part of the state, which means as the State changes, these changes are pushed to every subscriber of a given **Selector**.
-   **Effect:** So what if one action causes another Action? Glad you ask. Let's introduce Effects. Think of Actions like a stream of requests to change the state. However, what if we not only want to change the state but want to see that action as a trigger to execute additional code, which then again will push its own requests into the Actions stream? We write Effects. Effects listen to specific Action types, whenever the Action they are listening for is reaching the Store, the Effect executes its defined functionality. Often, this means that it uses a **Service** to fetch some data asynchronously from the back end and returns new data that then can be added to the State.
-   **Service:** Just like in the back end world services in Angular can be injected into **Containers** or **Effects** to provide them with additional functionality. Services are stateless, which means that they should not have any internal properties unless the specific purpose of a Service is to manage the State of a component internally, excluded from the Store. This should be used very carefully and one should make sure that the management of an internal state of a service is kept to the minimum.
-   **Modules:** In our App Modules are normally logical units of functionality. One normally is made up of **Components**, **Containers**, **Services** (sync and async), a **Store**, and a **Module-File** which defines its dependencies and routes of each module. Modules can be lazy loaded and are normally the entry point to a specific part of the application.

### Module Structure

The above architecture also reflects in our folder structure. Each **Module** internally consists out of the following folders (if some functionality is not needed, the respective folder can be omitted.) Also, internal folders often use an index.ts file to accumulate internals and expose them through a scalable array, etc.

-   **component** - this is home to all _dumb_ components, do not import any services or the store in this folder.
-   **container** - this is home to all _smart_ components, services, and the store are welcome here!
-   **model** - all models, types, interfaces unique to the module are found here.
-   **service** - home to services that provide functionality. Asynchronous Services that fetch data are put in the **async** folder.
-   **store** - here you find your **actions**, **effects**, **reducers**, **selectors** folders that are home to all necessary files that make up the NGRX store.
-   **YOURMODULE.module.ts** - the file that defines all dependencies and routes for the module.

### Project Structure

Within the **src** folder you will find the Angular typical file structure that was created by the CLI. Inside the **app** folder you will find the project specific folder structure.

-   **app** - Here is the entry point of the application. Here you find the app-root component, and the routes that lead to the login module, which handles everything up to the point where the user logs in.

# WIP - I am adding to the project and will update the README accordingly

## Additional Resources

-   [Official Angular Tutorial](https://angular.io/start) - A good place to get started with Angular and become familiar with its overall architecture, dependency injection system, routing, and more.
-   [Todd Motto's NGRX Store Tutorial](https://www.youtube.com/watch?v=N_UQx8dPPkc&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv) - Great tutorial to get started with actual NGRX Store code. However, it is a little outdated and you will have to consolidate his input with the newest version of NGRX.
-   [NGRX Documentation](https://ngrx.io/docs) - Official Documentation of the NGRX Store. However, I think that the examples used could often be better.
-   [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview) - Reactive Javascript, Observables, Marbles. Everything you need to make your Observables do what you want them to do.
-   [Angular Material](https://material.angular.io/components/categories) - The component library we use. Developed and maintained by Google.

## Angular CLI Commands

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
