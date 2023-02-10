import React, { useEffect, useRef, createRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import modal from '@uswds/uswds/js/usa-modal';
import { createClassString } from '@boozallen-uip/uswds-react-utils';

import { Button } from '..';
import CloseIcon from './CloseIcon';

export default function Modal({
  id,
  children,
  large,
  forceAction,
  labelledBy,
  describedBy,
  isOpen,
  onStateChanged
}) {
  const wrapperRef = useRef();
  const overlayRef = useRef();
  const openButtonRef = createRef();
  const closeButtonRef = createRef();
  const isOpenRef = useRef(isOpen);

  function closeModal(e) {
    if (
      e &&
      e.target !== overlayRef.current &&
      e.target !== closeButtonRef.current
    ) {
      return;
    }

    const closeButtonEl = wrapperRef.current.querySelector('.usa-modal__close');
    modal.toggleModal(new Event('click', { target: closeButtonEl }));
  }

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;

    const closeButtons = wrapperEl.querySelectorAll('[data-close-modal]');
    closeButtons.forEach((button) => {
      button.setAttribute('aria-controls', id);
    });

    if (onStateChanged) {
      // use MutationObserver to watch if the modal state changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const { target } = mutation;

          const currentStatus = target.classList.contains('is-visible');

          if (currentStatus !== isOpenRef.current) {
            onStateChanged(currentStatus);
          }
        });
      });

      observer.observe(wrapperEl, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }, [wrapperRef]);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const openButtonEl = openButtonRef.current;

    if (!onStateChanged || !wrapperEl || !openButtonEl) return;

    const modalStatus = wrapperEl.classList.contains('is-visible');
    if (isOpen === modalStatus) return; // do nothing if the status did not change

    if (isOpen) {
      openButtonEl.click(); // click the hidden button to open the modal
    } else {
      closeModal(); // close the modal
    }
  }, [wrapperRef, openButtonRef, isOpen, onStateChanged]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    return () => {
      // Account for URL change which will not close the modal
      const { body } = document;
      if (body.classList.contains('usa-js-modal--active')) {
        body.style.paddingRight = '0px';
        body.classList.remove('usa-js-modal--active');
        body.classList.remove('usa-js-no-click');

        const hiddenElements = document.querySelectorAll('[data-modal-hidden]');

        hiddenElements.forEach((element) => {
          element.removeAttribute('data-modal-hidden');
        });
      }
    };
  }, []);

  // Create the modal in the top-level DOM node (<body>).
  // This is necessary because USWDS JS adds aria-hidden="true" to the root React div
  // whenever a modal is opened.
  return ReactDOM.createPortal(
    <>
      {onStateChanged && (
        <Button
          aria-hidden="true"
          aria-controls={id}
          data-open-modal
          ref={openButtonRef}
          style={{ display: 'none' }}
        >
          Open modal
        </Button>
      )}

      <div
        id={id}
        className="usa-modal-wrapper is-hidden"
        role="dialog"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        {...(forceAction && { 'data-force-action': forceAction })}
        ref={wrapperRef}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className="usa-modal-overlay"
          onClick={closeModal}
          ref={overlayRef}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className={createClassString([
              'usa-modal',
              large ? 'usa-modal--lg' : ''
            ])}
            tabIndex={-1}
          >
            <div className="usa-modal__content">
              <div className="usa-modal__main">{children}</div>

              {!forceAction && (
                <button
                  className="usa-button usa-modal__close"
                  type="button"
                  aria-label="Close this window"
                  aria-controls={id}
                  onClick={closeModal}
                  data-close-modal
                  ref={closeButtonRef}
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <CloseIcon
                    className="usa-icon"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

Modal.propTypes = {
  /** Makes up the content the Modal component */
  children: PropTypes.node.isRequired,
  /** ID of the ModalBody */
  describedBy: PropTypes.string,
  /** If `true`, the user will be forced to take an action to close the modal */
  forceAction: PropTypes.bool,
  /** ID of the modal */
  id: PropTypes.string.isRequired,
  /** Toggles modal state programmatically */
  isOpen: PropTypes.bool,
  /** ID of the ModalHeading */
  labelledBy: PropTypes.string,
  /** If `true`, the large variant is used */
  large: PropTypes.bool,
  /** Function to set `isOpen` boolean */
  onStateChanged: PropTypes.func
};

Modal.defaultProps = {
  forceAction: false,
  isOpen: false,
  large: false,
  onStateChanged: undefined
};
