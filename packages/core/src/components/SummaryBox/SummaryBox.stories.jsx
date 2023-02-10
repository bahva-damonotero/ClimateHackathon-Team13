import React from 'react';

import SummaryBox from '.';

export default {
  title: 'SummaryBox',
  component: SummaryBox,
  argTypes: {
    children: { control: { type: null } }
  }
};

const Template = (args) => <SummaryBox {...args} />;

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  children: (
    <>
      <li>
        If you are under a winter storm warning,{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-find-shelter">
          find shelter
        </a>{' '}
        right away.
      </li>

      <li>
        Sign up for{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-warning-system">
          your community’s warning system
        </a>
        .
      </li>

      <li>
        Learn the signs of, and basic treatments for,{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-frostbite">
          frostbite
        </a>{' '}
        and{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-hypothermia">
          hypothermia
        </a>
        .
      </li>

      <li>
        Gather emergency supplies for your{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-home">
          home
        </a>{' '}
        and your{' '}
        <a className="usa-summary-box__link" href="#usa-anchor-car">
          car
        </a>
        .
      </li>
    </>
  ),
  heading: 'Key information'
};
