# Creating a New Component

!!! important "Review contributing guidelines"
    Please review our [general contributing guidelines](../contributing/overview.md) before creating a new component

## Step 0: Determining where to add the component

The first step is to determine which package to add the new component to:

- **`uswds-react-core`**: The [component is part of USWDS](https://designsystem.digital.gov/components/overview/) but not currently in the React component library
- **`uswds-react-loading`**: The component is a new loading indicator
- **New package**: The component or set of components is completely new but based on the USWDS styles. This should be [added as a new package](./add-new-package.md).

## Step 1: Add folder structure

For this how-to, we will walk through adding a new component to the `@boozallen-uip/uswds-react-core` package. However, these directions can be used for adding a component to any package.

Start off by navigating to `./packages/core/src/components` in the `uswds-react` repo. Here you can see all the current components in the library. To start, create a new folder for your component with its name in pascal case, for example `NewComponent`.

In this new folder we will add three files:

- `index.js`: This will export your component
- `NewComponent.jsx`: The main code for your component
- `NewComponent.test.jsx`: The tests for your component

For more complex components or ones that have many sub-components you can create a folder structure like this:

```
└── NewComponent
    ├── SubComponent
    │   ├── index.js
    │   ├── SubComponent.jsx
    │   └── SubComponent.test.jsx
    ├── index.js
    ├── NewComponent.jsx
    └── NewComponent.test.jsx
```

In this scenario, your top-level `index.js` file would also export the sub-components.

## Step 2: Add your component code

### Component

Below is an example page layout component that we will reference throughout this guide.

```jsx
// PageLayout.jsx
import React from 'react';
import { createClassString } from '@boozallen-uip/uswds-react-utils';

export default function PageLayout({
  className,
  children,
  heading,
  id,
  wide,
  ...props
}) {
  return (
    <article
      id={id}
      className={createClassString([
        wide ? 'bah-page--wide' : '',
        className
      ])}
      {...props}
    >
      <header>
        <h1>{heading}</h1>
      </header>
      <div>
        {children}
      </div>
    </article>
  );
}
```

With this component we will also add our prop types below the component:

```jsx
// PageLayout.jsx
...
import PropTypes from 'prop-types';

export default function PageLayout({...}) {
  ...
}

PageLayout.propTypes = {
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Children node(s) */
  children: PropTypes.node.isRequired,
  /** Heading node(s) */
  heading: PropTypes.node.isRequired,
  /** Article id */
  id: PropTypes.string,
  /** Should the page layout be wide? */
  wide: PropTypes.boolean  
};

PageLayout.defaultProps = {
  wide: false
};
```

We use [prop types](https://github.com/facebook/prop-types) with [JSDoc](https://jsdoc.app/) comments to define the props for our component. Additionally, we can add default values where applicable.

### Tests

Each new component should be accompanied with Jest unit tests to ensure the component is working correctly. Your tests will vary depending upon the functionality of your component. Below is an example:

```jsx
import React from 'react';
import { render } from '@testing-library/react';

import PageLayout from '.';

describe('PageLayout', () => {
  const id = 'page-layout-example';
  const heading = 'Heading';
  const body = 'Body content goes here';

  const jsx = (
    <PageLayout id={id} heading={heading}>
      {body}
    </PageLayout>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector('h1').innerHTML).toBe(heading);
    expect(container.querySelector(`#${id} > div`).innerHTML).toBe(body);
  });
});
```

From the root folder run the tests to ensure they all pass:

```
npm run test
```

## Step 3: Export your component

Now that our component is created with tests we will export it so it can be included in the package.

```js
// PageLayout/index.js
export { default as PageLayout } from './PageLayout';
```

Sub-components can also be exported from their folders:

```js
// PageLayout/index.js
export { default as PageLayout } from './PageLayout';
export { default as SubComponent } from './SubComponent';
```

We then want to add these to the main exports:

```js
// src/components/index.js
...
export * from './PageLayout';
```

## Step 4: Test your component

Now that the component is exported we want to test it. First, we need to build the package.

From the root directory run:

```
npm run build
```

With our packages built we can test our component in the examples app by running:

```
npm run examples
```

This will start the example React app at `http://localhost:3000`. To test your component, add it to `./packages/examples/src/pages/HomePage.jsx`:

```jsx
import React from 'react';

export default function HomePage() {
  return <>{/* test new component and changes here */}</>;
}
```

Once you're satisfied with the component(s), there a few extra code changes to make.

## Step 5: Final code changes

### Types

The React component library is not written in TypeScript (yet!) so we need to manually add our types. We already did some with the PropTypes in the component code. Our types are located in `./packages/core/src/index.d.ts`.

```ts
...
declare module '@boozallen-uip/uswds-react-core' {
  ...
  export import PageLayout = __Core.PageLayoutProps;
  ...
}

declare namespace __Core {
  ...
  export interface PageLayoutProps {
    /** Any additional classes to apply */
    className?: string;
    /** Children node(s) */
    children: JSX.Element;
    /** Heading node(s) */
    heading: string | JSX.Element;
    /** Article id */
    id?: string;
    /** Should the page layout be wide? */
    wide?: boolean;
  }
  ...
}
```

Here we've essentially re-declared our PropTypes as an interface under the `__Core` namespace and then exported it as part of the module.

### Docs and Code Examples

It's important to add documentation for your component so that other users can utilize it properly. Luckily, the documentation exists in the same `uswds-react` repo.

#### Code Example

First, we will add some example code that will be included in the documentation. This can be found under `./packages/docs-examples/src/examples/components`.

We'll add a new folder and file structure here:

```
└── page-layout
    ├── index.js
    └── PageLayoutExample.jsx
```

We'll add our example code that will both be a rendered version and the code text to show the user. **Make sure to test this in the examples app first to ensure the code functions correctly.**

```jsx
import React from 'react';
import { PageLayout } from '@boozallen-uip/uswds-react-core';

export default function PageLayoutExample() {
  return (
    <PageLayout id="page-layout-example" heading="Page Layout Heading" wide>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
    </PageLayout>
  );
}
```

!!! note "Example ID"
    To render properly in our documentation the outermost wrapper needs to have an ID. We will be referencing this in the docs. If passing an ID is not available, wrap the entire component in a `div` with an ID.

Let's export this example:

```js
// page-layout/index.js
export { default as PageLayoutExample } from './PageLayoutExample';
```

And then in the main export file:

```js
// examples/components/index.js
...
export * from './page-layout';
...
```

Finally, we add the component to a new route in the main `App.jsx` file.

```jsx
// docs-examples/src/App.jsx
...
import {
...
PageLayoutExample,
...
} from './examples';

export default function App() {
  return (
    <Router>
      <Switch>
        ...
        <Route path="/page-layout-example">
          <PageLayoutExample />
        </Route>
        ...
      </Switch>
    </Router>
  );
}
```

#### Documentation

Now that our example code is set up we'll create a documentation page for this component. The documentation is in markdown format and uses [MkDocs](https://www.mkdocs.org/) to build and compile.

From the root directory, under `./docs/reference/components`, let's add a new markdown file `page-layout.md`:

```md
# Page Layout

A basic page layout.

## Usage Example

=== "Preview"

    <iframe id="page-layout-example" src="https://pages.github.boozallencsn.com/uip/uswds-react/examples-react/#/page-layout-example" frameBorder="0" width="100%"></iframe>

## Props

| Name      | Type                   | Default | Description                              |
| --------- | ---------------------- | ------- | ---------------------------------------- |
| className | `String`               |         | Any additional classes to apply.         |
| children  | `JSX.Element | String` |         | The content of the page.                 |
| heading   | `JSX.Element | String` |         | The heading content of the page.         |
| id        | `String`               |         | ID for the layout.                       |
| wide      | `Boolean`              | `false` | Should the page layout be a wide format? |
```

Here we've added a title and description of the component. We've also added a tab with the embedded rendered example of the code we created in the previous step. Ensure the ID matches the ID we set on the code example.

!!! note "Example code"
    Adding the embedded example code is still under development. It will be added as another tab next to the preview.

Finally, we added a table with the props for our component.

We want our page to be found, so we will add it to the navigation in the `mkdocs.yml` file in the root directory:

```yaml
...
nav:
  ...
  - Reference:
    ...
    - Components:
      ...
      - Page Layout: reference/components/page-layout.md
      ...
```

From the root directory, compile and start the docs site:

```
just serve
```

**Note**: the preview won't be visible until the example code has been published.

### Linting

Before a final PR, make sure to lint your code to ensure it follows the proper code guidelines and styles. Our repos have actions that check for linting errors and PRs will not be merged until they are fixed.

Start by running Prettier from the root directory:

```
npm run prettier:write
```

Make sure to fix any errors and warnings that Prettier does not fix automatically.

Then run ESLint:

```
npm run lint:fix
```

Make sure to fix any errors and warnings that ESLint does not fix automatically.

## 6. Create a PR

Your code is ready! Submit a PR from your fork back to the original project and we'll start reviewing it.
