import React from 'react';
import { AccordionGroup, AccordionItem } from '@boozallen-uip/uswds-react-core';

export default function AccordionGroupMultiselectExample() {
  return (
    <AccordionGroup id="accordion-group-multiselect-example" multiselect>
      <AccordionItem expanded heading="Accordion Heading 1" id="accordion-1">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </AccordionItem>

      <AccordionItem heading="Accordion Heading 2" id="accordion-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.
      </AccordionItem>
    </AccordionGroup>
  );
}
