import React from 'react';
import { TextLink } from '@boozallen-uip/uswds-react-core';

export default function TextLinkOpenInANewTabExample() {
  return (
    <p>
      Click{' '}
      <TextLink external href="https://www.boozallen.org/" target="_blank">
        here
      </TextLink>{' '}
      for more info.
    </p>
  );
}
