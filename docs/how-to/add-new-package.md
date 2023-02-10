# Creating a New Package

!!! important "Review contributing guidelines"
    Please review our [general contributing guidelines](../contributing/overview.md) before creating a new component

Additional packages can be used to ship a component, or group of components, that works well alongside the core USWDS packages.

## Step 0: Should I create a new package?

It is important to first decide if a new package is needed or just a [new component](./add-new-component.md). If you are adding a component that fits into one of our other packages, add it to that package. If you have a new set of components that do not fit with our other packages, add a new package by following the instructions below.

An example of a new package might be a set of add-on components that adhere to the USWDS styles and guidelines.

## Step 1: Create the folder structure

To get started creating a new package, run the following command replacing `<package-name>` with the package name:

```terminal
npm init -w ./packages/<package-name>
```

You will be prompted to fill out some information about the package.

Leave everything at the default values (press Enter or Return for those prompts), except for the following:

```
name: @boozallen-uip/uswds-react-<package-name>
version: 3.1.0
entry point: dist/<package-name>.js
```

!!! note "The package's version number should be the same as all existing packages."

This will create a directory structure that looks like the following:

```
.
└── packages
    └── <package-name>
        ├── __tests__
        │   └── <package-name>.test.js
        ├── lib
        |     └── <package-name>.js
        ├── package.json
        └── README.md
```

Go ahead and delete the `+__tests__+` and `lib` directories as well as `README.md`. We won't be using them.

Next, create directories and empty/placeholder files so your directory structure looks like:

```
.
└── packages
    └── <package-name>
        ├── src
        │   ├── components
        |   |   └── index.js
        │   ├── styles
        |   |   ├── components
        |   |   |   └── index.scss
        |   |   └── index.scss
        |   └── index.js
        └── package.json
```

Your component(s) code will go in `packages/<package-name>/src/components`.

Your SASS will go in `packages/<package-name>/src/styles/components`.

## Step 2: Modify `package.json`

Open up the newly created `package.json` and delete all of the pre-populated, top-level sections except for `name` and `version`.

Then add the following content so that the `package.json` looks like the following:

```json
{
  "name": "@boozallen-uip/uswds-react-<package-name>",
  "version": "3.1.0",
  "repository": {
    "type": "git",
    "url": "git@github.com:boozallen-uip/uswds-react.git",
    "directory": "packages/<package-name>"
  },
  "main": "dist/<package-name>.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "import": "./dist/<package-name>.js",
      "default": "./dist/<package-name>.js"
    },
    "./styles": "./dist/scss",
    "./styles/*": "./dist/scss/*/index.scss"
  },
  "sideEffects": [
    "**/*.scss"
  ],
  "scripts": {
    "build": "webpack --mode=production",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react-scripts": "^4.0.3"
  },
  "peerDependencies": {
    "@boozallen-uip/uswds-react-core": "3.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sass": "^1.53.0"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

React and Sass dependency version numbers should match those defined in the root `package.json`.

If your package does not rely upon the core package, you can remove the `@boozallen-uip/uswds-react-core` dependency.

## Step 3: Create Babel and Webpack configs

Create `packages/<package-name>/babel.config.js` with the following content:

```js
const baseConfig = require('../../babel.config');

module.exports = {
  ...baseConfig
};
```

Create `packages/<package-name>/webpack.config.js` with the following content:

```js
const path = require('path');
const baseConfig = require('../../webpack.config');

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, 'dist/'),
    filename: '<package-name>.js',
    library: ['USWDS', '<Package-Name>']
  }
};
```

NOTE: `<Package-Name>` should be the same as `<package-name>` but in `TitleCase`.

## Step 4: Write some component code

You can now start writing the code for your components.

You should create a directory per component in `packages/<package-name>/src/components`.

Export your components in `packages/<package-name>/src/components/index.js` like so:

```js
export { default as ComponentName } from './ComponentName';
```

Then add the following to `packages/<package-name>/src/index.js`:

```js
export * from './components';
```

This will allow others to import components from your package.

## Step 5: Write some SASS

You should create one SCSS file per component that needs styling in `packages/<package-name>/src/styles/components`.

Import each component's SCSS file in `packages/<package-name>/src/styles/components/index.scss` like so:

```scss
@forward 'ComponentName';
```

Then add the following to `packages/<package-name>/src/styles/index.scss`:

```scss
@forward 'components';
```

Now all your component SASS will be bundled with your package output.

## Step 6: Update `postbuild` script

Edit the 3rd line of `scripts/postbuild` to include your new package name.

The file should look like:

```terminal
#!/bin/bash

for PACKAGE in core loading rich-text-editor table utils <package-name>
do
  ...
done

```

The point of this script is to copy type definitions (`index.d.ts`), stylings (SCSS files), and the license (`LICENSE.md`) so that they are distributed with the package.

## Step 7: Build your package

Your package should be ready to build now.

To build all packages (except for `examples`), run:

```terminal
npm run build
```

If all went well, your package bundle should be outputted by webpack to `packages/<package-name>/dist/<package-name>.js`.

If you are having problems, reference the `core` and `rich-text-editor` packages as examples.
