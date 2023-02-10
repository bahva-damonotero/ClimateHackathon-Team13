import React from 'react';
import { render } from '@testing-library/react';

import { GridCol, GridContainer, GridRow } from '.';

describe('Grid', () => {
  const col1 = '1';
  const col2 = '2';
  const col3 = '3';

  it('renders correctly', () => {
    const { container } = render(
      <GridContainer>
        <GridRow>
          <GridCol>{col1}</GridCol>
          <GridCol>{col2}</GridCol>
          <GridCol>{col3}</GridCol>
        </GridRow>
      </GridContainer>
    );

    const cols = container.querySelectorAll(
      '.grid-container > .grid-row > .grid-col'
    );
    expect(cols[0].innerHTML).toBe(col1);
    expect(cols[1].innerHTML).toBe(col2);
    expect(cols[2].innerHTML).toBe(col3);
  });

  it('renders a grid row with gaps', () => {
    const { container } = render(
      <GridContainer>
        <GridRow gaps>
          <GridCol>{col1}</GridCol>
          <GridCol>{col2}</GridCol>
          <GridCol>{col3}</GridCol>
        </GridRow>
      </GridContainer>
    );

    expect(
      container.querySelector('.grid-container > .grid-gap-4')
    ).toBeTruthy();
  });

  for (let i = 1; i <= 6; i++) {
    it(`renders a grid row with size ${i} gaps`, () => {
      const { container } = render(
        <GridContainer>
          <GridRow gaps gapSize={i}>
            <GridCol>{col1}</GridCol>
            <GridCol>{col2}</GridCol>
            <GridCol>{col3}</GridCol>
          </GridRow>
        </GridContainer>
      );

      expect(
        container.querySelector(`.grid-container > .grid-gap-${i}`)
      ).toBeTruthy();
    });
  }

  it('renders a grid column with a width of 3', () => {
    const { container } = render(
      <GridContainer>
        <GridRow>
          <GridCol width={3}>{col1}</GridCol>
        </GridRow>
      </GridContainer>
    );

    expect(container.querySelector('.grid-col-3')).toBeTruthy();
  });

  it('renders a grid column with a width of 3 at the desktop breakpoint', () => {
    const { container } = render(
      <GridContainer>
        <GridRow>
          <GridCol desktop={3}>{col1}</GridCol>
        </GridRow>
      </GridContainer>
    );

    expect(container.querySelector('.desktop\\:grid-col-3')).toBeTruthy();
  });

  it('renders a grid column with a width of 3 at the mobile breakpoint', () => {
    const { container } = render(
      <GridContainer>
        <GridRow>
          <GridCol mobile={3}>{col1}</GridCol>
        </GridRow>
      </GridContainer>
    );

    expect(container.querySelector('.mobile-lg\\:grid-col-3')).toBeTruthy();
  });

  it('renders a grid column with a width of 3 at the tablet breakpoint', () => {
    const { container } = render(
      <GridContainer>
        <GridRow>
          <GridCol tablet={3}>{col1}</GridCol>
        </GridRow>
      </GridContainer>
    );

    expect(container.querySelector('.tablet\\:grid-col-3')).toBeTruthy();
  });
});
