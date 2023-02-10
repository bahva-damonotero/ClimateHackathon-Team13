# Getting Started

## Prerequisites

Tools you will need:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) (installed with Node)
- Code editor or IDE

Technologies you should be familiar with:

- [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
- [React](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)

## Step 1: Pull down the code

This project uses a git workflow based on [branching and pull requests](https://guides.github.com/introduction/flow/). You will work off of feature branches and make pull requests into `main` to deliver your code.

To get started, you will need to clone the [uswds-react](https://github.com/boozallen-uip/uswds-react) repository.

Open up a terminal window and run:

```terminal
$ git clone git@github.com:boozallen-uip/uswds-react.git
```

## Step 2: Install project dependencies

Use the following command to install the project dependencies:

```terminal
npm ci
```

NOTE: This is different from using `npm install` (or `npm i`). This command ensures you have the exact dependencies defined in the `package-lock.json` file without making changes to it. This also results in a faster installation time.

## Step 3: Run Storybook

Storybook is used to showcase components and test them while they are being actively developed.

Use the following command to run Storybook in watch mode:

```terminal
npm run storybook
```

Any changes you make to the stories or components will cause Storybook to automatically refresh and reflect those changes.

## Step 4: Build the packages

To build all packages except for the examples app, run:

```terminal
npm run build
```

## Step 5: Run the examples app

The examples app is used to test the built versions of this library's packages without needing to publish them to a Nexus repository.

Use the following command to run the examples app in watch mode:

```terminal
npm run examples
```

Any changes made to the examples app will trigger the web server to restart and reflect those changes.

If you make changes to components, you will need to rebuild the packages by re-running the command from the previous step. You can do this from a separate terminal without closing and restarting the examples app.

== Step 6: Run the tests

Use the following command to execute the test suites via [Jest](https://jestjs.io/):

```terminal
npm run test
```

If the snapshot tests fail because they need to be updated, manually inspect the diffs and then, if there are no unexpected changes, run:

```terminal
npm run test:update
```

To generate test coverage metrics, run:

```terminal
npm run test:coverage
```

To update the test coverage badge shown at the top of the README, run:

```terminal
npm run coverage-badge
```

NOTE: The coverage badge is generated based on the result of the last coverage report that was ran.
