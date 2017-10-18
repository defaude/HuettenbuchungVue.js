# HuettenbuchungVue.js

A minimal starter template for a simplistic Vue.js application without all the hassle with babel, wepback and so on.

## Getting started

Clone this repo and install stuff via npm:

```bash
npm install
```

Start the web server and start hacking:

```bash
npm start
```

That's it. You're up and running!

Starting point is (surprise!) `index.js`. It basically only fires up Vue.js and configures the outermost entry to the
app. The actual components should be put in `src` - each within its own folder. Just make sure to `import` the
component's .js file somewhere in your app. 

So the basic flow is: Change something in `src`, refresh your browser, check, rinse and repeat...

Whenever you're satisfied with your result: Stop the server with CTRL-C and run the build to generate the `dist` folder:

```bash
rm -rf dist && npm run build
```

Happy coding!
