import React from 'react';
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/addons';
import { shuffle } from 'lodash';

import AdvancedTable from '.';

export default {
  title: 'AdvancedTable',
  component: AdvancedTable,
  argTypes: {
    data: { type: null },
    columns: { type: null },
    sort: { type: null }
  }
};

const DefaultTemplate = (args) => <AdvancedTable {...args} />;

const defaultArgs = {
  data: [
    { keyA: 'A9', keyB: 'B0', keyC: 'C1', keyD: 'D9' },
    { keyA: 'A0', keyB: 'B9', keyC: 'C6', keyD: 'D8' },
    { keyA: 'A8', keyB: 'B1', keyC: 'C2', keyD: 'D7' },
    { keyA: 'A1', keyB: 'B8', keyC: 'C7', keyD: 'D6' },
    { keyA: 'A7', keyB: 'B2', keyC: 'C3', keyD: 'D5' },
    { keyA: 'A2', keyB: 'B7', keyC: 'C8', keyD: 'D4' },
    { keyA: 'A6', keyB: 'B3', keyC: 'C4', keyD: 'D3' },
    { keyA: 'A3', keyB: 'B6', keyC: 'C9', keyD: 'D2' },
    { keyA: 'A5', keyB: 'B4', keyC: 'C5', keyD: 'D1' },
    { keyA: 'A4', keyB: 'B5', keyC: 'C0', keyD: 'D0' }
  ],
  columns: {
    data: {
      keyA: {
        displayName: 'Header A',
        width: 200
      },
      keyB: {
        displayName: 'Header B',
        width: 200
      },
      keyC: {
        displayName: 'Header C',
        width: 200
      },
      keyD: {
        displayName: 'Header D',
        width: 200
      }
    },
    visibleOrder: ['keyA', 'keyB', 'keyC', 'keyD']
  },
  loadNextPage: action('loadNextPage'),
  tableInstance: 'advanced-table-example',
  visibleWidth: 600
};

export const sortable = DefaultTemplate.bind({});
sortable.args = {
  ...defaultArgs
};

const EndlessTemplate = (args) => {
  const { data } = defaultArgs;

  const [moreData, setMoreData] = useState([...data, ...data, ...data]);

  const addMoreRows = (...args) => {
    moreData.push(...[...data, ...data, ...data]);
    setMoreData(moreData);
    defaultArgs.loadNextPage(...args);
  };

  return <AdvancedTable data={moreData} loadNextPage={addMoreRows} {...args} />;
};

export const endlessScrolling = EndlessTemplate.bind({});
endlessScrolling.args = {
  columns: defaultArgs.columns,
  tableInstance: defaultArgs.tableInstance,
  visibleWidth: defaultArgs.visibleWidth,
  locaSort: false
};

const UpdateTemplate = (args) => {
  const [otherData, setOtherData] = useState([...defaultArgs.data]);

  function shuffleTableData() {
    setOtherData(shuffle(otherData));
  }

  return (
    <>
      <button type="button" onClick={shuffleTableData}>
        Shuffle Table Data
      </button>

      <AdvancedTable {...args} data={otherData} />
    </>
  );
};

export const updateData = UpdateTemplate.bind({});
updateData.args = {
  columns: defaultArgs.columns,
  loadNextPage: defaultArgs.loadNextPage,
  tableInstance: defaultArgs.tableInstance,
  visibleWidth: defaultArgs.visibleWidth
};

export const noData = DefaultTemplate.bind({});
noData.args = {
  ...defaultArgs,
  data: []
};

export const borderless = DefaultTemplate.bind({});
borderless.args = {
  ...defaultArgs,
  borderless: true
};
