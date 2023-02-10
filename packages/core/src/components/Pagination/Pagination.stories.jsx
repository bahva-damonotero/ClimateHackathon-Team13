/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from '@storybook/addons';
import { action } from '@storybook/addon-actions';

import Pagination from '.';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    page: { control: null }
  }
};

const Template = (args) => {
  const [page, setPage] = useState(4);

  return (
    <Pagination
      {...args}
      page={page}
      onChangePage={(newPage) => {
        setPage(newPage);
        action('onChangePage')(newPage);
      }}
    />
  );
};

export const def = Template.bind({});
def.storyName = 'Default';
def.args = {
  totalPages: 8
};

export const unbounded = Template.bind({});
