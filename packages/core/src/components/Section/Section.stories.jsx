import React from 'react';

import Section from '.';

export default {
  title: 'Section',
  component: Section,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

export const twoSections = () => (
  <>
    <Section>Section content</Section>
    <Section>Another section</Section>
  </>
);
