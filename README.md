# Reactx Todo App

This is an example app built with react, mobx, and reactx. It's purpose is to show you how common ui problems are solved with reactx.

## Change the view with router#goTo

Reactx provides a `router` singleton instance which can be imported into any file. This singleton allows us to progamatically change the route from anywhere in the code by calling the router#goTo method.

## UI Composition with Nested Routes

Reactx allows us to dynamically compose our ui based on the state.

## Undo/Redo Actions

With reactx, any action that effects the state is passed through the dispatcher. This allows the dispatcher to keep a history of all the actions that have been done. When a ReversibleAction is dispatched, the dispatcher records the action and allows us to call undo on the action.

We can see this in practice by looking at the `actions/AddTodo.ts` action. This action extends the ReversibleAction subclass and defines an invoke, undo, and redo method. The invoke method adds a new todo to the TodosStore and then saves the `id` to a local instance variable on the action. This allows us to access the `id` in the `undo` and `redo` methods.

## Change the route with a Link component

We can also change the route based on a user click with a Link component.

## Features to Showoff

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
