/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { ProcessList, ProcessListItem, ProcessListItemHeader } from '.';

export default {
  title: 'Process List',
  component: ProcessList,
  subcomponents: {
    ProcessListItem,
    ProcessListItemHeader
  },
  argTypes: {
    children: {
      control: { type: null }
    }
  }
};

const Template = ({ headerClassName, itemClassName }) => (
  <ProcessList>
    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Start a process.
      </ProcessListItemHeader>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
          commodo, ipsum sed pharetra gravida, orci magna rhoncus nequem id
          pulvinar odio lorem non turpis.
        </li>
        <li>
          Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
          conndimentum.
        </li>
        <li>Aliquam erat volutpat. Sed quis velit.</li>
      </ul>
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Proceed to the second step.
      </ProcessListItemHeader>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Complete the step-by-step process.
      </ProcessListItemHeader>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </ProcessListItem>
  </ProcessList>
);

Template.propTypes = {
  headerClassName: PropTypes.string,
  itemClassName: PropTypes.string
};

export const def = Template.bind({});
def.storyName = 'Default';

const NoTextAndCustomSizingTemplate = ({ headerClassName, itemClassName }) => (
  <ProcessList>
    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Start a process.
      </ProcessListItemHeader>
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Proceed to the second step.
      </ProcessListItemHeader>
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Complete the step-by-step process.
      </ProcessListItemHeader>
    </ProcessListItem>
  </ProcessList>
);

export const noTextAndCustomSizing = NoTextAndCustomSizingTemplate.bind({});
noTextAndCustomSizing.args = {
  itemClassName: 'padding-bottom-4',
  headerClassName: 'font-sans-xl line-height-sans-1'
};

const CustomSizingTemplate = ({ headerClassName, itemClassName }) => (
  <ProcessList>
    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Start a Process
      </ProcessListItemHeader>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum.
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Proceed to the second step
      </ProcessListItemHeader>
      Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
      volutpat.
    </ProcessListItem>

    <ProcessListItem className={itemClassName}>
      <ProcessListItemHeader className={headerClassName}>
        Complete the step-by-step process
      </ProcessListItemHeader>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </ProcessListItem>
  </ProcessList>
);

export const customSizing = CustomSizingTemplate.bind({});
customSizing.args = {
  headerClassName: 'font-sans-xl line-height-sans-1',
  itemClassName: 'font-sans-lg margin-top-1 text-light'
};
