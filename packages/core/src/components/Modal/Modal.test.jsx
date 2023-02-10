import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import modal from '@uswds/uswds/js/usa-modal';

import { Modal, ModalBody, ModalFooter, ModalHeading } from '.';
import { Button } from '..';

describe('Modal', () => {
  const heading = 'modal heading content';
  const body = 'modal body content';
  const footer = 'modal footer content';

  let toggleModalSpy;

  const modalContent = (
    <>
      <ModalHeading id="modal-example-heading">{heading}</ModalHeading>
      <ModalBody id="modal-example-body">{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </>
  );

  const HEADING_SELECTOR =
    '.usa-modal > .usa-modal__content > .usa-modal__main .usa-modal__heading';
  const BODY_SELECTOR =
    '.usa-modal > .usa-modal__content > .usa-modal__main > .usa-prose';
  const FOOTER_SELECTOR =
    '.usa-modal > .usa-modal__content > .usa-modal__main > .usa-modal__footer';

  beforeEach(() => {
    toggleModalSpy = jest.spyOn(modal, 'toggleModal');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { container } = render(
      <>
        <Button aria-controls="modal-example" data-open-modal>
          Open Default Modal
        </Button>

        <Modal
          id="modal-example"
          labelledBy="modal-example-heading"
          describedBy="modal-example-body"
        >
          {modalContent}
        </Modal>
      </>,
      { container: document.body }
    );

    expect(container.querySelector('.usa-modal')).toBeTruthy();
    expect(container.querySelector(HEADING_SELECTOR).innerHTML).toBe(heading);
    expect(container.querySelector(BODY_SELECTOR).innerHTML).toBe(body);
    expect(container.querySelector(FOOTER_SELECTOR).innerHTML).toBe(footer);
  });

  it('should render the large modal variant', () => {
    const { container } = render(
      <>
        <Button aria-controls="modal-example" data-open-modal>
          Open Default Modal
        </Button>

        <Modal
          id="modal-example"
          labelledBy="modal-example-heading"
          describedBy="modal-example-body"
          large
        >
          {modalContent}
        </Modal>
      </>,
      { container: document.body }
    );

    expect(container.querySelector('.usa-modal.usa-modal--lg')).toBeTruthy();
  });

  it('should set `data-force-action` when `forceAction` is `true`', () => {
    const { container } = render(
      <>
        <Button aria-controls="modal-example" data-open-modal>
          Open Default Modal
        </Button>

        <Modal
          id="modal-example"
          labelledBy="modal-example-heading"
          describedBy="modal-example-body"
          forceAction
        >
          {modalContent}
        </Modal>
      </>,
      { container: document.body }
    );

    const node = container.querySelector('.usa-modal-wrapper');
    expect(node.getAttribute('data-force-action')).toBeTruthy();
  });

  it('should toggle modal programmatically', () => {
    const mockFunction = jest.fn();

    /* eslint-disable-next-line react/prop-types */
    const TestComponent = ({ isOpen }) => (
      <Modal
        id="modal-example"
        labelledBy="modal-example-heading"
        describedBy="modal-example-body"
        isOpen={isOpen}
        onStateChanged={mockFunction}
      >
        {modalContent}
      </Modal>
    );

    const { container, rerender } = render(<TestComponent isOpen={false} />, {
      container: document.body
    });

    expect(
      container.querySelector('.usa-modal-wrapper.is-hidden')
    ).toBeTruthy();

    rerender(<TestComponent isOpen />);

    expect(
      container.querySelector('.usa-modal-wrapper.is-visible')
    ).toBeTruthy();

    rerender(<TestComponent isOpen={false} />);

    expect(
      container.querySelector('.usa-modal-wrapper.is-hidden')
    ).toBeTruthy();
  });

  it('should close programmatic modal with close button', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <Modal
        id="modal-example"
        labelledBy="modal-example-heading"
        describedBy="modal-example-body"
        isOpen
        onStateChanged={mockFunction}
      >
        {modalContent}
      </Modal>,
      { container: document.body }
    );

    fireEvent.click(container.querySelector('.usa-modal__close'));

    expect(toggleModalSpy).toHaveBeenCalled();
  });

  it('should close programmatic modal with overlay click', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <Modal
        id="modal-example"
        labelledBy="modal-example-heading"
        describedBy="modal-example-body"
        isOpen
        onStateChanged={mockFunction}
      >
        {modalContent}
      </Modal>,
      { container: document.body }
    );

    fireEvent.click(container.querySelector('.usa-modal-overlay'));

    expect(toggleModalSpy).toHaveBeenCalled();
  });

  it('should cleanup modal in a router', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Switch>
          <Route exact path="/">
            <Modal
              id="modal-example"
              labelledBy="modal-example-heading"
              describedBy="modal-example-body"
              isOpen
              onStateChanged={mockFunction}
            >
              <ModalHeading id="modal-example-heading">{heading}</ModalHeading>
              <ModalBody id="modal-example-body">
                <Button href="/test">Go to test</Button>
              </ModalBody>
              <ModalFooter>{footer}</ModalFooter>
            </Modal>
          </Route>

          <Route path="/test">
            <Button href="/">Go to home</Button>
          </Route>
        </Switch>
      </MemoryRouter>
    );

    // Expect modal to be open
    expect(
      container.parentElement.classList.contains('usa-js-modal--active')
    ).toBeTruthy();

    // Expect button link
    expect(screen.getByText(/go to test/i)).toBeInTheDocument();

    // Route to test page
    act(() => {
      userEvent.click(screen.getByText(/go to test/i));
    });

    // Expect to be on test page
    expect(screen.getByText(/go to home/i)).toBeInTheDocument();

    // Expect modal classes to be cleaned up
    expect(
      container.parentElement.classList.contains('usa-js-modal--active')
    ).toBeFalsy();

    // Route to home page
    act(() => {
      userEvent.click(screen.getByText(/go to home/i));
    });

    // Expect modal to be open
    expect(
      container.parentElement.classList.contains('usa-js-modal--active')
    ).toBeTruthy();
  });
});
