/* eslint-disable react/prop-types */
import React from 'react';

import { GridCol, GridContainer, GridRow } from '.';
import { Dropdown, Input } from '../Forms';

const columnTable = {
  type: { summary: "number | 'auto' | 'fill'" }
};

export default {
  title: 'Grid',
  subcomponents: {
    GridContainer,
    GridRow,
    GridCol
  },
  argTypes: {
    gaps: {
      name: '<GridRow> gaps',
      description: 'Should the row have gaps between its columns?',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: false }
      }
    },
    gapSize: {
      name: '<GridRow> gapSize',
      description:
        'Size of the gaps. The `gaps` prop must be `true` for this to have an effect.',
      type: { name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 }
      }
    },
    column1Width: {
      name: 'First <GridCol> width',
      description: 'The width of the first `<GridCol>`.',
      table: columnTable
    },
    column2Width: {
      name: 'Second <GridCol> width',
      description: 'The width of the second `<GridCol>`.',
      table: columnTable
    },
    column3Width: {
      name: 'Third <GridCol> width',
      description: 'The width of the second `<GridCol>`.',
      table: columnTable
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

const Template = ({
  gaps,
  gapSize,
  column1Width,
  column2Width,
  column3Width
}) => (
  <GridContainer>
    <GridRow gaps={gaps} gapSize={gapSize}>
      <GridCol width={column1Width}>
        <Dropdown id="title" options={['Sr.', 'Jr.', 'Mr.', 'Mrs.']}>
          Title
        </Dropdown>
      </GridCol>

      <GridCol width={column2Width}>
        <Input id="firstName">First Name</Input>
      </GridCol>

      <GridCol width={column3Width}>
        <Input id="lastName">Last Name</Input>
      </GridCol>
    </GridRow>
  </GridContainer>
);

const defaultArgs = {
  column1Width: 2,
  column2Width: 5,
  column3Width: 5
};

export const gapless = Template.bind({});
gapless.args = {
  ...defaultArgs
};

export const gaps = Template.bind({});
gaps.args = {
  ...defaultArgs,
  gaps: true
};

export const smallerGaps = Template.bind({});
smallerGaps.args = {
  ...defaultArgs,
  gaps: true,
  gapSize: 2
};

export const largerGaps = Template.bind({});
largerGaps.args = {
  ...defaultArgs,
  gaps: true,
  gapSize: 6
};

export const automaticWidth = Template.bind({});
automaticWidth.args = {
  ...defaultArgs,
  column1Width: 'auto',
  column2Width: 'auto',
  column3Width: 'auto'
};

export const fillRemainingWidth = Template.bind({});
fillRemainingWidth.args = {
  ...defaultArgs,
  column1Width: 'auto',
  column2Width: 'auto',
  column3Width: 'fill'
};

export const breakpoints = () => {
  function repeatNode(node, amount) {
    const array = [];

    for (let i = 0; i < amount; i++) {
      array.push(
        <React.Fragment key={`column-example--${i}`}>{node}</React.Fragment>
      );
    }

    return array;
  }

  return (
    <GridContainer>
      <GridRow>
        Resize the window and notice how the number of columns per row increases
        as the width does:
      </GridRow>

      <GridRow>
        {repeatNode(
          <GridCol width={6} mobile={4} tablet={2} desktop={1}>
            column
          </GridCol>,
          12
        )}
      </GridRow>
    </GridContainer>
  );
};
