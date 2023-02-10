import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardMedia
} from '.';
import { Button } from '..';

import mediaSrc from '../../../../examples/public/Charleston_SC_Collage.jpg';

export default {
  title: 'CardGroup',
  component: CardGroup,
  subcomponents: {
    Card,
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

export const twoGroups = () => (
  <>
    <CardGroup>
      <Card className="tablet:grid-col">
        <CardHeader>{heading}</CardHeader>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>

      <Card className="tablet:grid-col">
        <CardHeader>{heading}</CardHeader>

        <CardMedia src={mediaSrc}>{mediaDesc}</CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>

      <Card className="tablet:grid-col" headerFirst>
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

      <Card className="tablet:grid-col">
        <CardHeader>{heading}</CardHeader>

        <CardMedia exdent src={mediaSrc}>
          {mediaDesc}
        </CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </CardGroup>

    <CardGroup>
      <Card className="tablet:grid-col-6" flag>
        <CardHeader>{heading}</CardHeader>

        <CardMedia src={mediaSrc}>{mediaDesc}</CardMedia>

        <CardBody>
          <p>{body}</p>
        </CardBody>

        <CardFooter>
          <Button>{footer}</Button>
        </CardFooter>
      </Card>

      <Card className="tablet:grid-col-6" flag="right">
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
    </CardGroup>
  </>
);
