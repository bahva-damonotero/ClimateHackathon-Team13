# Overview

This [repository](https://github.com/boozallen-uip/uswds-react) contains [React](https://reactjs.org/) components wrapping the [USWDS components](https://designsystem.digital.gov/components/) in addition to custom components that fit the theme and style of USWDS.

## Packages

This repository is split up into multiple packages that can be individually installed.

| Package                                     | Description                                                |
| ------------------------------------------- | ---------------------------------------------------------- |
| @boozallen-uip/uswds-react-core             | base USWDS components                                      |
| @boozallen-uip/uswds-react-loading          | determinate and indeterminate loading indicator components |
| @boozallen-uip/uswds-react-rich-text-editor | USWDS themed Rich Text Editor/WYSIWYG component            |
| @boozallen-uip/uswds-react-table            | 508 compliant table component with sorting and scrolling   |

## Using the packages

### Styles

If the packages you are using include SCSS files, you will need to import these styles in your app.

For example, if your app uses the `core` and `loading` packages, your imports should look like:

```scss
// always import `core` first!
@forward '@boozallen-uip/uswds-react-core/dist/scss/settings.scss';
@forward '@boozallen-uip/uswds-react-core/dist/scss/styles.scss';

// you can then import the styles for other packages
@forward '@boozallen-uip/uswds-react-loading/dist/scss/styles.scss';
```
