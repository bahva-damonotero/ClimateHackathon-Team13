import React from 'react';
import { TextLink } from '@boozallen-uip/uswds-react-core';

export default function TextLinkExternalExample() {
  return (
    <p>
      Click{' '}
      <TextLink external href="https://designsystem.digital.gov/">
        here
      </TextLink>{' '}
      for more info.
    </p>
  );
}
