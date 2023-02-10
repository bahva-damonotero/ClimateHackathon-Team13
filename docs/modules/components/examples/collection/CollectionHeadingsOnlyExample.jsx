import React from 'react';
import globeIcon from '@uswds/uswds/img/usa-icons/public.svg';
import {
  Collection,
  CollectionHeading,
  CollectionItem,
  CollectionMeta,
  CollectionMetaItem,
  TextLink
} from '@boozallen-uip/uswds-react-core';

export default function CollectionHeadingsOnlyExample() {
  return (
    <Collection condensed>
      <CollectionItem>
        <CollectionHeading>
          <TextLink
            className="usa-link"
            href="https://digital.gov/guides/mobile-principles/?dg"
          >
            The eight principles of mobile-friendliness
          </TextLink>
        </CollectionHeading>

        <CollectionMeta>
          <CollectionMetaItem>
            <img
              className="usa-icon position-relative bottom-neg-2px"
              src={globeIcon}
              alt=""
              aria-hidden="true"
            />{' '}
            Digital.gov
          </CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>

      <CollectionItem>
        <CollectionHeading>
          <TextLink
            className="usa-link"
            href="https://designsystem.digital.gov/maturity-model/"
          >
            The USWDS maturity model
          </TextLink>
        </CollectionHeading>

        <CollectionMeta>
          <CollectionMetaItem>
            <img
              className="usa-icon position-relative bottom-neg-2px"
              src={globeIcon}
              alt=""
              aria-hidden="true"
            />{' '}
            U.S. Web Design System
          </CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>

      <CollectionItem>
        <CollectionHeading>
          <TextLink
            className="usa-link"
            href="https://18f.gsa.gov/2020/11/24/the-key-role-of-product-owners-in-federated-data-projects/"
          >
            A news item that's on our own site.
          </TextLink>
        </CollectionHeading>
      </CollectionItem>

      <CollectionItem>
        <CollectionHeading>
          <TextLink
            className="usa-link"
            href="https://18f.gsa.gov/2020/11/24/the-key-role-of-product-owners-in-federated-data-projects/"
          >
            The key role of product owners in federated data projects
          </TextLink>
        </CollectionHeading>

        <CollectionMeta>
          <CollectionMetaItem>
            <img
              className="usa-icon position-relative bottom-neg-2px"
              src={globeIcon}
              alt=""
              aria-hidden="true"
            />{' '}
            18F
          </CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>

      <CollectionItem>
        <CollectionHeading>
          <TextLink
            className="usa-link"
            href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
          >
            Progresson Cross-Agency Priority (CAP goals and Agency Priority
            Goals (APGs)
          </TextLink>
        </CollectionHeading>

        <CollectionMeta>
          <CollectionMetaItem>
            <img
              className="usa-icon position-relative bottom-neg-2px"
              src={globeIcon}
              alt=""
              aria-hidden="true"
            />{' '}
            Performance.gov
          </CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  );
}
