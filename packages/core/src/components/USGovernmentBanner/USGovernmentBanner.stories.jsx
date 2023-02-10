import React from 'react';

import USGovernmentBanner from '.';

export default {
  title: 'USGovernmentBanner',
  component: USGovernmentBanner
};

const Template = (args) => <USGovernmentBanner {...args} />;

export const dotGov = Template.bind({});
dotGov.storyName = '.gov';

export const dotMil = Template.bind({});
dotMil.storyName = '.mil';
dotMil.args = {
  domain: 'mil'
};
