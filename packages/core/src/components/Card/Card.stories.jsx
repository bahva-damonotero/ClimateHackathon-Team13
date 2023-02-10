import React from 'react';

import { Card, CardBody, CardFooter, CardHeader, CardMedia } from '.';
import { Button, GridCol, GridRow } from '..';

import mediaSrc from '../../../../examples/public/Charleston_SC_Collage.jpg';

export default {
  title: 'Card',
  component: Card,
  subcomponents: {
    CardBody,
    CardFooter,
    CardHeader,
    CardMedia
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

const heading = 'Heading';
const mediaDesc = `
  Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
  cobblestone street, McLeod Plantation, battery, Fort Sumter
`.trim();
const body = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.
  Facere magnam quo nostrum amet odio ut ducimus?
`.trim();
const footer = 'Visit Charleston';

export const def = () => (
  <GridRow>
    <GridCol width={4}>
      <Card>
        <CardHeader>{heading}</CardHeader>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);
def.storyName = 'Default';

export const differentHeadingLevels = () => (
  <>
    <GridRow>
      <GridCol width={4}>h2</GridCol>
      <GridCol width={4}>h3</GridCol>
      <GridCol width={4}>h4</GridCol>
    </GridRow>

    <GridRow>
      <GridCol width={4}>
        <Card>
          <CardHeader>{heading}</CardHeader>

          <CardBody>
            <p>{body}</p>
          </CardBody>

          <CardFooter>
            <Button>{footer}</Button>
          </CardFooter>
        </Card>
      </GridCol>

      <GridCol width={4}>
        <Card>
          <CardHeader level={3}>{heading}</CardHeader>

          <CardBody>
            <p>{body}</p>
          </CardBody>

          <CardFooter>
            <Button>{footer}</Button>
          </CardFooter>
        </Card>
      </GridCol>

      <GridCol width={4}>
        <Card>
          <CardHeader level={4}>{heading}</CardHeader>

          <CardBody>
            <p>{body}</p>
          </CardBody>

          <CardFooter>
            <Button>{footer}</Button>
          </CardFooter>
        </Card>
      </GridCol>
    </GridRow>
  </>
);

export const media = () => (
  <GridRow>
    <GridCol width={4}>
      <Card>
        <CardHeader>{heading}</CardHeader>

        <CardMedia src={mediaSrc}>{mediaDesc}</CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);

export const headerFirstWithInsetMedia = () => (
  <GridRow>
    <GridCol width={4}>
      <Card headerFirst>
        <CardHeader>{heading}</CardHeader>

        <CardMedia inset src={mediaSrc}>
          {mediaDesc}
        </CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);

export const exdentMedia = () => (
  <GridRow>
    <GridCol width={4}>
      <Card>
        <CardHeader>{heading}</CardHeader>

        <CardMedia src={mediaSrc} exdent>
          {mediaDesc}
        </CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);

export const flag = () => (
  <GridRow>
    <GridCol width={4}>
      <Card flag>
        <CardHeader>{heading}</CardHeader>

        <CardMedia src={mediaSrc}>{mediaDesc}</CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);

export const flagWithRightInsetMedia = () => (
  <GridRow>
    <GridCol width={4}>
      <Card flag="right">
        <CardHeader>{heading}</CardHeader>

        <CardMedia inset src={mediaSrc}>
          {mediaDesc}
        </CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </GridCol>
  </GridRow>
);
