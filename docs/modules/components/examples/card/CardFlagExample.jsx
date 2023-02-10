import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia
} from '@boozallen-uip/uswds-react-core';

export default function CardFlagExample() {
  return (
    <>
      <Card flag="left">
        <CardHeader>Flag Left</CardHeader>

        <CardMedia src="./Charleston_SC_Collage.jpg">
          Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
          cobblestone street, McLeod Plantation, battery, Fort Sumter
        </CardMedia>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate. Lorem ipsum dolor.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>

      <br />

      <Card flag="right" headerFirst>
        <CardHeader>Flag Right</CardHeader>

        <CardMedia src="./Charleston_SC_Collage.jpg">
          Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
          cobblestone street, McLeod Plantation, battery, Fort Sumter
        </CardMedia>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate. Lorem ipsum dolor.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>

      <br />

      <Card flag="right">
        <CardHeader>Flag Right (Inset)</CardHeader>

        <CardMedia inset src="./Charleston_SC_Collage.jpg">
          Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
          cobblestone street, McLeod Plantation, battery, Fort Sumter
        </CardMedia>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate. Lorem ipsum dolor.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>

      <br />

      <Card flag="right">
        <CardHeader>Flag Right (Exdent)</CardHeader>

        <CardMedia exdent src="./Charleston_SC_Collage.jpg">
          Clockwise from top-left: Rainbow Row, Arthur Ravenel Jr. Bridge,
          cobblestone street, McLeod Plantation, battery, Fort Sumter
        </CardMedia>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate. Lorem ipsum dolor.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>
    </>
  );
}
