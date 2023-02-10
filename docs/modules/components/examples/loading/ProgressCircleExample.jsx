import React from 'react';
import { ProgressCircle } from '@boozallen-uip/uswds-react-loading';

export default function ProgressCircleExample() {
  return (
    <ProgressCircle
      color="green"
      fontFamily="Verdana"
      fontSize={12}
      fontWeight="bold"
      value={75}
    />
  );
}
