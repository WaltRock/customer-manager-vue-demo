# loopback-vue-app

[Loopback](https://loopback.io) + [Vue.js](vuejs.org) + [Webpack](http://webpack.js.org/) boilerplate app.

# Use

Install your dependencies (developed with `yarn`) and write your app.

Includes several scripts to help you out.

## Scripts

`dev`: Start the dev server, with webpack bundling and hot module reloading

`lint`: Lints the project

`test`: Runs tests, and follows up with linting and advisory check using `nsp`

`build`: Create the bundled client build and write output to `/client`

`start`: Starts the server in production mode (requires that you ran `build` previously)

## Development 

- Changes to `/server` or `/common` restart the server via `nodemon`
- Changes to `/src` rebuild the client-side code via `webpack`
- Hot module reloading is used to push changes directly to your browser without reloading

## Production

Build the frontend, (re)install modules with `--production` flag, and run `npm start`.
