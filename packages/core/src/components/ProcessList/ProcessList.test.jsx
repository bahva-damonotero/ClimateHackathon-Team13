import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ProcessList, ProcessListItem, ProcessListItemHeader } from '.';

describe('ProcessList', () => {
  const jsx = (
    <ProcessList>
      <ProcessListItem>
        <ProcessListItemHeader>Start a process.</ProcessListItemHeader>
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

      <ProcessListItem>
        <ProcessListItemHeader>
          Proceed to the second step.
        </ProcessListItemHeader>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae
        ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
        Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
      </ProcessListItem>

      <ProcessListItem>
        <ProcessListItemHeader>
          Complete the step-by-step process.
        </ProcessListItemHeader>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi.
        Nulla libero. Vivamus pharetra posuere sapien.
      </ProcessListItem>
    </ProcessList>
  );

  it('should render correctly', () => {
    const { container } = render(jsx);

    expect(container.querySelector('.usa-process-list')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const tree = renderer.create(jsx).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
