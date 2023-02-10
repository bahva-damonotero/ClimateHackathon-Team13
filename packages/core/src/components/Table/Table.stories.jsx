import React from 'react';

import Table from '.';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    children: { type: null }
  }
};

const Template = (args) => <Table {...args} />;

const defaultArgs = {
  children: (
    <>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th data-label="Document title" scope="row">
            Declaration of Independence
          </th>
          <td data-label="Description">
            Statement adopted by the Continental Congress declaring independence
            from the British Empire.
          </td>
          <td data-label="Year">1776</td>
        </tr>

        <tr>
          <th data-label="Document title" scope="row">
            Bill of Rights
          </th>
          <td data-label="Description">
            The first ten amendments of the U.S. Constitution guaranteeing
            rights and freedoms.
          </td>
          <td data-label="Year">1791</td>
        </tr>

        <tr>
          <th data-label="Document title" scope="row">
            Declaration of Sentiments
          </th>
          <td data-label="Description">
            A document written during the Seneca Falls Convention outlining the
            rights that American women should be entitled to as citizens.
          </td>
          <td data-label="Year">1848</td>
        </tr>

        <tr>
          <th data-label="Document title" scope="row">
            Emancipation Proclamation
          </th>
          <td data-label="Description">
            An executive order granting freedom to slaves in designated southern
            states.
          </td>
          <td data-label="Year">1863</td>
        </tr>
      </tbody>
    </>
  )
};

export const bordered = Template.bind({});
bordered.args = {
  ...defaultArgs
};

export const borderless = Template.bind({});
borderless.args = {
  ...defaultArgs,
  border: false
};

export const compact = Template.bind({});
compact.args = {
  ...defaultArgs,
  compact: true
};

export const striped = Template.bind({});
striped.args = {
  ...defaultArgs,
  striped: true
};

export const scrollable = Template.bind({});
scrollable.args = {
  children: (
    <>
      <colgroup span="2" />
      <colgroup span="2" />

      <thead>
        <tr>
          <th rowSpan="2">
            Federal Budget
            <br /> Baseline Projections
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            2017
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            2018
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            2019
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            2020
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            2021
          </th>
          <th colSpan="2" scope="colgroup" className="text-center">
            Hist. Avg.
          </th>
        </tr>

        <tr>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
          <th scope="col" className="text-right">
            %GDP
          </th>
          <th scope="col" className="text-right">
            USD
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Revenue</th>
          <td className="font-mono-sm text-tabular text-right">17.2%</td>
          <td className="font-mono-sm text-tabular text-right">3,316</td>
          <td className="font-mono-sm text-tabular text-right">16.4%</td>
          <td className="font-mono-sm text-tabular text-right">3,338</td>
          <td className="font-mono-sm text-tabular text-right">16.3%</td>
          <td className="font-mono-sm text-tabular text-right">3,490</td>
          <td className="font-mono-sm text-tabular text-right">16.7%</td>
          <td className="font-mono-sm text-tabular text-right">3,678</td>
          <td className="font-mono-sm text-tabular text-right">16.7%</td>
          <td className="font-mono-sm text-tabular text-right">3,827</td>
          <td className="font-mono-sm text-tabular text-right">17.4%</td>
          <td className="font-mono-sm text-tabular text-right">3,381</td>
        </tr>

        <tr>
          <th scope="row">Outlays</th>
          <td className="font-mono-sm text-tabular text-right">20.6%</td>
          <td className="font-mono-sm text-tabular text-right">3,982</td>
          <td className="font-mono-sm text-tabular text-right">20.2%</td>
          <td className="font-mono-sm text-tabular text-right">4,142</td>
          <td className="font-mono-sm text-tabular text-right">21.0%</td>
          <td className="font-mono-sm text-tabular text-right">4,470</td>
          <td className="font-mono-sm text-tabular text-right">21.3%</td>
          <td className="font-mono-sm text-tabular text-right">4,685</td>
          <td className="font-mono-sm text-tabular text-right">21.6%</td>
          <td className="font-mono-sm text-tabular text-right">4,949</td>
          <td className="font-mono-sm text-tabular text-right">20.3%</td>
          <td className="font-mono-sm text-tabular text-right">4,198</td>
        </tr>

        <tr>
          <th scope="row">Budget Deficit</th>
          <td className="font-mono-sm text-tabular text-right">-3.5%</td>
          <td className="font-mono-sm text-tabular text-right">-665</td>
          <td className="font-mono-sm text-tabular text-right">-3.8%</td>
          <td className="font-mono-sm text-tabular text-right">-804</td>
          <td className="font-mono-sm text-tabular text-right">-4.6%</td>
          <td className="font-mono-sm text-tabular text-right">-981</td>
          <td className="font-mono-sm text-tabular text-right">-4.6%</td>
          <td className="font-mono-sm text-tabular text-right">-1,008</td>
          <td className="font-mono-sm text-tabular text-right">-4.9%</td>
          <td className="font-mono-sm text-tabular text-right">-1,123</td>
          <td className="font-mono-sm text-tabular text-right">-2.9%</td>
          <td className="font-mono-sm text-tabular text-right">-483</td>
        </tr>

        <tr>
          <th scope="row">Debt Held by Public</th>
          <td className="font-mono-sm text-tabular text-right">76.0%</td>
          <td className="font-mono-sm text-tabular text-right">14,665</td>
          <td className="font-mono-sm text-tabular text-right">77.4%</td>
          <td className="font-mono-sm text-tabular text-right">15,688</td>
          <td className="font-mono-sm text-tabular text-right">79.2%</td>
          <td className="font-mono-sm text-tabular text-right">16,762</td>
          <td className="font-mono-sm text-tabular text-right">80.9%</td>
          <td className="font-mono-sm text-tabular text-right">17,872</td>
          <td className="font-mono-sm text-tabular text-right">83.1%</td>
          <td className="font-mono-sm text-tabular text-right">18,998</td>
          <td className="font-mono-sm text-tabular text-right">41.7%</td>
          <td className="font-mono-sm text-tabular text-right">8,065</td>
        </tr>
      </tbody>
    </>
  ),
  scrollable: true
};

export const stacked = Template.bind({});
stacked.args = {
  ...defaultArgs,
  stacked: true
};

export const stackedHeader = Template.bind({});
stackedHeader.args = {
  ...defaultArgs,
  stackedHeader: true
};
