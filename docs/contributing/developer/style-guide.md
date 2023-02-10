# Style Guide

## Automated Code Formatting

### ESLint

This project utilizes [ESLint](https://eslint.org/) to catch bad coding practices and style issues, and if possible, automatically fix them.

To print out a report of issues ESLint has detected, use `npm run lint`.

To automatically fix any fixable issues, use `npm run lint:fix`.

ESLint config can be altered via `.eslintrc.js` in the root of the repo.

### Prettier

This project utilizes [Prettier](https://prettier.io/) to format code.

To print out a report of formatting issues Prettier has detected, use `npm run prettier:check`.

To automatically format files using Prettier, use `npm run prettier:write`.

Prettier config can be altered via `.prettierrc.json` and `.prettierignore`.

### GitHub Actions

ESLint and Prettier are configured to run in sequence via [GitHub Actions](https://github.com/features/actions) whenever a PR is made for the `main` branch. If automatic fixes can be applied, a commit with those changes will be automatically applied to the PR's branch.

## General Style Guidelines

There are a number of guidelines that we follow that cannot be fixed via our automated code formatting methods.

### Import Ordering/Grouping

This project utilizes a specific ordering when it comes to imports:

. `react`, `react-router` / `react-router-dom`, `prop-types`
. Other packages
. Assets from packages (such as image files)
. `@boozallen-uip/*` packages
. Local JavaScript or JSON files
. Other local assets (such as image files)

We also utilize empty lines to group and separate types of imports.

Here's what the imports should look like for a file that utilizes all of these types:

```jsx
import React, { useEffect, useRef } from 'react'; // first we import React packages
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import accordion from 'uswds/src/js/components/accordion'; // followed by other packages & their assets
import imgDotGov from 'uswds/src/img/icon-dot-gov.svg';
import imgFlag from 'uswds/src/img/us_flag_small.png';
import imgHttps from 'uswds/src/img/icon-https.svg';

import { createClassString } from '@boozallen-uip/uswds-react-utils'; // then @boozallen-uip packages

import { GridCol } from '../Grid'; // lastly local files
import logoSrc from '../../../assets/logo.png';
```

NOTE: The ordering/grouping for `@boozallen-uip/*` package imports does not apply to code within `packages/examples` and `packages/docs-examples`.

### Prop Ordering

When creating or editing a component, props should be ordered alphabetically in the destructuring and in `ComponentName.propTypes`.

```jsx
export default function ComponentName({ children, error, id, tile }) {
  // component code
}

ComponetName.propTypes = {
  children: PropTypes.node.isRequired,
  /** Comment describing `error` prop */
  error: PropTypes.string,
  /** Comment describing `id` prop */
  id: PropTypes.string.isRequired,
  /** Comment describing `tile` prop */
  tile: PropTypes.bool
};
```

### Code Spacing

Adding empty lines to group or separate sections of code can greatly increase its readability and "scannability" (the ability to quickly find relevant sections of code when scanning a file).

Here is an example file with and without extra spacing:

=== "With"

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';

    import { flattenChildren } from '@boozallen-uip/uswds-react-utils';

    import { Fieldset, FormError } from '..';

    export default function CheckboxGroup({ children, error, id, tile }) {
      let label;
      const options = [];

      flattenChildren(React.Children.toArray(children)).forEach((child) => {
        const componentType = child.type.displayName;

        switch (componentType) {
          case 'Legend':
            label = child;
            break;

          case 'Checkbox':
            options.push(child);
            break;

          default:
            throw new Error(
              `Invalid child component '${componentType}' used in CheckboxGroup.`
            );
        }
      });

      if (!label) {
        throw new Error('A Legend is required inside of a CheckboxGroup.');
      }

      if (!options.length) {
        throw new Error(
          'At least one Checkbox must be present inside of a CheckboxGroup.'
        );
      }

      return (
        <Fieldset>
          {React.cloneElement(label, { error })}

          <FormError error={error} />

          {options.map((child, index) =>
            React.cloneElement(child, {
              groupIndex: index,
              id,
              tile
            })
          )}
        </Fieldset>
      );
    }

    CheckboxGroup.propTypes = {
      /** `<Legend>` + `<Checkbox>` node(s) */
      children: PropTypes.node.isRequired,
      /** Error message to display */
      error: PropTypes.string,
      /** ID for the group of checkboxes */
      id: PropTypes.string.isRequired,
      /** If `true`, the tile checkbox variant is used for the entire group */
      tile: PropTypes.bool
    };

    CheckboxGroup.defaultProps = {
      tile: false
    };
    ```

=== "Without"

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';

    import { flattenChildren } from '@boozallen-uip/uswds-react-utils';

    import { Fieldset, FormError } from '..';

    export default function CheckboxGroup({ children, error, id, tile }) {
      let label;
      const options = [];
      flattenChildren(React.Children.toArray(children)).forEach((child) => {
        const componentType = child.type.displayName;
        switch (componentType) {
          case 'Legend':
            label = child;
            break;
          case 'Checkbox':
            options.push(child);
            break;
          default:
            throw new Error(
              `Invalid child component '${componentType}' used in CheckboxGroup.`
            );
        }
      });
      if (!label) {
        throw new Error('A Legend is required inside of a CheckboxGroup.');
      }
      if (!options.length) {
        throw new Error(
          'At least one Checkbox must be present inside of a CheckboxGroup.'
        );
      }
      return (
        <Fieldset>
          {React.cloneElement(label, { error })}
          <FormError error={error} />
          {options.map((child, index) =>
            React.cloneElement(child, {
              groupIndex: index,
              id,
              tile
            })
          )}
        </Fieldset>
      );
    }
    CheckboxGroup.propTypes = {
      /** `<Legend>` + `<Checkbox>` node(s) */
      children: PropTypes.node.isRequired,
      /** Error message to display */
      error: PropTypes.string,
      /** ID for the group of checkboxes */
      id: PropTypes.string.isRequired,
      /** If `true`, the tile checkbox variant is used for the entire group */
      tile: PropTypes.bool
    };
    CheckboxGroup.defaultProps = {
      tile: false
    };
    ```
