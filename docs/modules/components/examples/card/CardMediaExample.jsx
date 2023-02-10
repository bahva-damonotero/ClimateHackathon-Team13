import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
  GridCol,
  GridRow
} from '@boozallen-uip/uswds-react-core';

export default function CardExample() {
  return (
    <GridRow>
      <GridCol width={3}>
        <Card>
          <CardHeader>Media</CardHeader>

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
      </GridCol>

      <GridCol width={3}>
        <Card headerFirst>
          <CardHeader>Header First</CardHeader>

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
      </GridCol>

      <GridCol width={3}>
        <Card>
          <CardHeader>Inset Media</CardHeader>

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
      </GridCol>

      <GridCol width={3}>
        <Card>
          <CardHeader>Exdent Media</CardHeader>

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
      </GridCol>
    </GridRow>
  );
}
