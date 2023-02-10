import React from 'react';

declare module '@boozallen-uip/uswds-react-utils' {
  export import createClassString = __Utils.createClassString;
  export import flattenChildren = __Utils.flattenChildren;
  export import injectStyles = __Utils.injectStyles;
}

declare namespace __Utils {
  export function createClassString(classes: string[]): string;
  export function flattenChildren(children: React.ReactNode[]): React.ReactNode[];
  export function injectStyles(...styles: string[]): void;
}
