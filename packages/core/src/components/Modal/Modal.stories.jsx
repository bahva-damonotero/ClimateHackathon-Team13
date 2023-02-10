/* eslint-disable react/prop-types */
import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeading } from '.';
import { Button, ButtonGroup, ButtonGroupItem } from '..';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    heading: {
      description: 'Heading content for the modal'
    },
    body: {
      description: 'Body content for the modal'
    },
    children: { control: null }
  }
};

const DefaultTemplate = ({ id, body, heading, ...args }) => (
  <>
    {!args.onStateChanged && (
      <Button aria-controls={id} data-open-modal>
        Open modal
      </Button>
    )}

    <Modal id={id} {...args}>
      <ModalHeading id={args.labelledBy}>{heading}</ModalHeading>

      <ModalBody id={args.describedBy}>{body}</ModalBody>

      <ModalFooter>
        <ButtonGroup>
          <ButtonGroupItem>
            <Button data-close-modal>Continue without saving</Button>
          </ButtonGroupItem>

          <ButtonGroupItem>
            <Button
              className="padding-105 text-center"
              unstyled
              data-close-modal
            >
              Go back
            </Button>
          </ButtonGroupItem>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  </>
);

const defaultArgs = {
  id: 'modal-example',
  heading: 'Modal Heading',
  body: 'You have unsaved changes that will be lost.',
  labelledBy: 'modal-example-heading',
  describedBy: 'modal-example-body'
};

export const def = DefaultTemplate.bind({});
def.storyName = 'Default';
def.args = {
  ...defaultArgs
};

export const large = DefaultTemplate.bind({});
large.args = {
  ...defaultArgs,
  large: true
};

export const forceAction = DefaultTemplate.bind({});
forceAction.args = {
  ...defaultArgs,
  forceAction: true
};
