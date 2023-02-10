import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardMedia
} from '@boozallen-uip/uswds-react-core';

export default function CardGroupExample() {
  return (
    <CardGroup>
      <Card className="tablet:grid-col">
        <CardHeader>Default</CardHeader>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate, eaque qui officia recusandae. Facere
            magnam quo nostrum amet odio ut ducimus?
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>

      <Card className="tablet:grid-col" flag="right">
        <CardHeader>Media</CardHeader>

        <CardMedia src="./Charleston_SC_Collage.jpg">
          Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
          cobblestone street, McLeod Plantation, battery, Fort Sumter
        </CardMedia>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate, eaque qui officia recusandae. Facere
            magnam quo nostrum amet odio ut ducimus?
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>
    </CardGroup>
  );
}
