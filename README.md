# Reactx Todo App

This is an example app built with react, mobx, and reactx. It's purpose is to document how common ui problems are solved with reactx. It is forked from the [TodoMVC](http://todomvc.com/) project.

## Running Locally

install dependencies
```bash
$ yarn install
```
start development server
```bash
$ yarn start
```
open browser to `http://localhost:3000`

## Change the view with router#goTo
Reactx provides a `router` singleton instance which can be imported into any file. This singleton allows us to programmatically change the route from anywhere in the code by calling the router#goTo method.

We can see this in practice in the beforeEnter callback of the `app` route in `src/routes/routes.ts`. Here the callback transistions to the `login` route if the user is not currently loggedin.

## UI Composition with Nested Routes
Reactx allows us to compose our component tree based on the current location. It allows us to use nested routes to change just a certain section of the page. 

We can see this in action in the `app` Route in `src/routes/routes`. The `app` route has a child route called `todos` with the `TodoList` as its component. When the current location is `/`, the router renders the `<App>` component and passes the `<TodoList>` component in as the `routerOutlet` prop.

In the `src/components/App.tsx` file, we can see the component returns a `<div>` with a couple components and the `props.routerOutlet` in the `main` section. The header, addTodoControl, and footer components will always be rendered, but the `main` section changes depending on the child route.

## Undo/Redo Actions
With reactx, any action that changes the state is passed through the dispatcher. This allows the dispatcher to keep a history of all the actions that have been done. When a ReversibleAction is dispatched, the dispatcher records the action and allows us to undo on the action.

We can see this in practice by looking at the `actions/AddTodo.ts` action. This action extends the ReversibleAction subclass and defines an invoke, undo, and redo method. The invoke method adds a new todo to the TodosStore and then saves the `id` to a local instance variable on the action. This allows us to access the `id` in the `undo` and `redo` methods.

## Change the route with a Link component
We can also change the route based on a user click with a Link component.

## Other Features to Document
- injecting stores into components, rather than passing through props
- query and path params with Route

## Directory Structure
<pre>
.
├── README.md => directions on how to start locally, run tests, etc.
├── index.html => html that is loaded by the browser. loads and starts React app
├── package.json => lists all the dependencies. used by npm and yarn
├── server.js => development server. serves webpack bundle and static resources
├── src => .ts and .tsx files
│   ├── actions => actions are functions that change the state. they're dispatched becuase of external input
│   ├── components => react components (views)
│   ├── css => styling
│   ├── index.tsx => everything starts here. root component
│   ├── models => models represent the state
│   ├── routes => set up routes for the app
│   └── stores => stores manage collections of models
├── tsconfig.json => Typescript configuration
├── webpack.config.js => webpack configuration. imports the tsconfig.json file
└── yarn.lock => used by yarn to make sure every install is exactly the same
</pre>
