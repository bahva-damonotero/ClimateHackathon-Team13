import React from 'react';
import {
  Form,
  Input,
  InputPrefix,
  InputSuffix
} from '@boozallen-uip/uswds-react-core';
import spriteSvg from '@uswds/uswds/img/sprite.svg';

export default function InputPrefixSuffixExample() {
  const creditCardSvg = (
    <svg role="img" focusable="false" className="usa-icon">
      <use
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={`${spriteSvg}#credit_card`}
      />
    </svg>
  );

  return (
    <Form id="example-input-prefix-suffix">
      <Input id="input-prefix-example">
        <InputPrefix>{creditCardSvg}</InputPrefix>
        Credit card number
      </Input>

      <Input error id="input-prefix-error-example">
        <InputPrefix>{creditCardSvg}</InputPrefix>
        Credit card number (Error)
      </Input>

      <Input id="input-suffix-example" inputWidth="sm">
        Weight, in pounds
        <InputSuffix>lbs.</InputSuffix>
      </Input>
    </Form>
  );
}
