import React from 'react';
import { Hero } from '@boozallen-uip/uswds-react-core';

import backgroundImg from '../../../assets/background.jpeg';

export default function HeroBackgroundExample() {
  return (
    <Hero heading="Hero Heading" background={backgroundImg}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
    </Hero>
  );
}
