import React from 'react';
import { Button } from '@boozallen-uip/uswds-react-core';

export default function ButtonExample() {
  return (
    <div id="button-example-container">
      <div className="button-section">
        <Button>Default</Button>

        <Button secondary>Secondary</Button>

        <Button accentCool>Accent Cool</Button>

        <Button base>Base</Button>

        <Button outline>Outline</Button>

        <Button outline inverse>
          Inverse
        </Button>

        <Button href="#">Link</Button>

        <Button unstyled>Unstyled</Button>

        <Button disabled>Disabled</Button>
      </div>

      <hr />

      <div className="button-section">
        <Button big>Default</Button>

        <Button big secondary>
          Secondary
        </Button>

        <Button big accentCool>
          Accent Cool
        </Button>

        <Button big base>
          Base
        </Button>
      </div>

      <div className="button-section">
        <Button big outline>
          Outline
        </Button>

        <Button big outline inverse>
          Inverse
        </Button>

        <Button big href="#">
          Link
        </Button>

        <Button big unstyled>
          Unstyled
        </Button>

        <Button big disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}
