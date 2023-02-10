import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  GridContainer,
  GridRow,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeading
} from '@boozallen-uip/uswds-react-core';

export default function ModalExample() {
  return (
    <GridContainer id="modal-examples">
      <GridRow>
        <Button aria-controls="modal1" data-open-modal>
          Open default modal
        </Button>

        <Modal
          id="modal1"
          labelledBy="modal1-heading"
          describedBy="modal1-body"
        >
          <ModalHeading id="modal1-heading">
            Are you sure you want to continue?
          </ModalHeading>

          <ModalBody id="modal1-body">
            You have unsaved changes that will be lost.
          </ModalBody>

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
      </GridRow>

      <GridRow>
        <Button aria-controls="modal2" data-open-modal>
          Open large modal
        </Button>

        <Modal
          id="modal2"
          labelledBy="modal2-heading"
          describedBy="modal2-body"
          large
        >
          <ModalHeading id="modal2-heading">
            Are you sure you want to continue?
          </ModalHeading>

          <ModalBody id="modal2-body">
            You have unsaved changes that will be lost.
          </ModalBody>

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
      </GridRow>

      <GridRow>
        <Button aria-controls="modal3" data-open-modal>
          Open modal with forced action
        </Button>

        <Modal
          id="modal3"
          labelledBy="modal3-heading"
          describedBy="modal3-body"
          forceAction
        >
          <ModalHeading id="modal3-heading">
            Your session will end soon.
          </ModalHeading>

          <ModalBody id="modal3-body">
            You’ve been inactive for too long. Please choose to stay signed in
            or sign out. Otherwise, you’ll be signed out automatically in 5
            minutes.
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <ButtonGroupItem>
                <Button data-close-modal>Yes, stay signed in</Button>
              </ButtonGroupItem>

              <ButtonGroupItem>
                <Button
                  className="padding-105 text-center"
                  unstyled
                  data-close-modal
                >
                  Sign out
                </Button>
              </ButtonGroupItem>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </GridRow>
    </GridContainer>
  );
}
