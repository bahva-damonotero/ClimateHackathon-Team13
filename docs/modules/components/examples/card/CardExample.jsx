import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridCol
} from '@boozallen-uip/uswds-react-core';

export default function CardExample() {
  return (
    <GridCol width={4}>
      <Card>
        <CardHeader>Charleston, SC</CardHeader>

        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate. Lorem ipsum dolor sit amet.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Visit Charleston</Button>
        </CardFooter>
      </Card>
    </GridCol>
  );
}
