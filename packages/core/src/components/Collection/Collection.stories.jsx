import React from 'react';
import globeIcon from '@uswds/uswds/img/usa-icons/public.svg';

import Collection from './Collection';
import CollectionCalendar from './CollectionCalendar';
import CollectionDescription from './CollectionDescription';
import CollectionHeading from './CollectionHeading';
import CollectionImage from './CollectionImage';
import CollectionItem from './CollectionItem';
import CollectionMeta from './CollectionMeta';
import CollectionMetaItem from './CollectionMetaItem';
import TextLink from '../TextLink';

export default {
  title: 'Collection',
  component: Collection,
  subcomponents: {
    CollectionCalendar,
    CollectionDescription,
    CollectionHeading,
    CollectionImage,
    CollectionItem,
    CollectionMetaItem,
    TextLink
  }
};

export const def = ({ condensed }) => (
  <Collection condensed={condensed}>
    <CollectionItem>
      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/presidents-winners-press-release/"
        >
          Gears of Government President's Award winners
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, the Administration announces the winners of the Gears of
        Government President’s Award. This program recognizes the contributions
        of individuals and teams across the federal workforce who make a
        profound difference in the lives of the American people.
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 30, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>
          By Sondra Ainsworth and Constance Lu
        </CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem newTag>NEW</CollectionMetaItem>
        <CollectionMetaItem tag>PMA</CollectionMetaItem>
        <CollectionMetaItem tag>OMB</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>

    <CollectionItem>
      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/sba-wosb-dashboard/"
        >
          Women-owned small business dashboard
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        In honor of National Women’s Small Business Month, we’ve partnered with
        SBA’s Office of Government Contracting and Business Development and
        Office of Program Performance, Analysis, and Evaluation to highlight the
        Women-Owned Small Businesses (WOSBs) data dashboard!
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 30, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem tag>SBA</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>

    <CollectionItem>
      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
        >
          September 2020 updates show progress on cross-agency and agency
          priority goals
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, we published progress updates for both Cross-Agency Priority
        (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
        FY2020. These updates highlight recent milestones and accomplishments as
        well as related initiatives that support progress towards a more modern
        and effective government.
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 17, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem tag>QUARTERLY UPDATE</CollectionMetaItem>
        <CollectionMetaItem tag>CAP GOAL</CollectionMetaItem>
        <CollectionMetaItem tag>APG</CollectionMetaItem>
        <CollectionMetaItem tag>PMA</CollectionMetaItem>
        <CollectionMetaItem tag>SUCCESS STORY</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>
  </Collection>
);
def.storyName = `Default`;

export const mediaThumbnail = ({ condensed }) => (
  <Collection condensed={condensed}>
    <CollectionItem>
      <CollectionImage src="https://www.performance.gov/img/GoG/gears-govt-presidents.png" />

      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/president-winners-press-release/"
        >
          Gears of Government President's Award winners
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, the Administration announces the winners of the Gears of
        Government President’s Award. This program recognizes the contributions
        of individuals and teams across the federal workforce who make a
        profound difference in the lives of the American people.
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 30, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>
          By Sondra Ainsworth and Constance lu
        </CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem newTag>NEW</CollectionMetaItem>
        <CollectionMetaItem tag>PMA</CollectionMetaItem>
        <CollectionMetaItem tag>OMB</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>

    <CollectionItem>
      <CollectionImage src="https://www.performance.gov/img/blog/wosb1.jpg" />
      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/sba-wosb-dashboard/"
        >
          Women-owned small business dashboard
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        In honor of National Women’s Small Business Month, we’ve partnered with
        SBA’s Office of Government Contracting and Business Development and
        Office of Program Performance, Analysis, and Evaluation to highlight the
        Women-Owned Small Businesses (WOSBs) data dashboard!
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 30, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem tag>SBA</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>

    <CollectionItem>
      <CollectionImage src="https://www.performance.gov/img/blog/sept-2020.png" />

      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance/gov/September-2020-Updates-Show-Progress/"
        >
          September 2020 updates show progress on cross-agency and agency
          priority goals
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, we published progress updates for both Cross-Agency Priority
        (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
        FY2020. These updates highlight recent milestones and accomplishments as
        well as related initiatives that support progress towards a more modern
        and effective government.
      </CollectionDescription>

      <CollectionMeta>
        <CollectionMetaItem>
          <time dateTime="2020-09-30T12:00:00+01:00">September 17, 2020</time>
        </CollectionMetaItem>
        <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
      </CollectionMeta>

      <CollectionMeta label="Topics">
        <CollectionMetaItem tag>QUARTERLY UPDATE</CollectionMetaItem>
        <CollectionMetaItem tag>CAP GOAL</CollectionMetaItem>
        <CollectionMetaItem tag>APG</CollectionMetaItem>
        <CollectionMetaItem tag>PMA</CollectionMetaItem>
        <CollectionMetaItem tag>SUCCESS STORY</CollectionMetaItem>
      </CollectionMeta>
    </CollectionItem>
  </Collection>
);

export const calendarDisplay = ({ condensed }) => (
  <Collection condensed={condensed}>
    <CollectionItem>
      <CollectionCalendar
        dateTime="2020-09-30T12:00:00+01:00"
        day={30}
        month="SEP"
      />

      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/presidents-winners-press-release/"
        >
          Gears of Government President's Award winners
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, the Administration announces the winners of the Gears of
        Government President’s Award. This program recognizes the contributions
        of individuals and teams across the federal workforce who make a
        profound difference in the lives of the American people.
      </CollectionDescription>
    </CollectionItem>

    <CollectionItem>
      <CollectionCalendar
        dateTime="2020-09-30T12:00:00+01:00"
        day={30}
        month="SEP"
      />

      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/sba-wosb-dashboard/"
        >
          Women-owned small business dashboard
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        In honor of National Women’s Small Business Month, we’ve partnered with
        SBA’s Office of Government Contracting and Business Development and
        Office of Program Performance, Analysis, and Evaluation to highlight the
        Women-Owned Small Businesses (WOSBs) data dashboard!
      </CollectionDescription>
    </CollectionItem>

    <CollectionItem>
      <CollectionCalendar
        dateTime="2020-09-17T12:00:00+01:00"
        day={17}
        month="SEP"
      />

      <CollectionHeading>
        <TextLink
          className="usa-link"
          href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
        >
          September 2020 updates show progress on cross-agency and agency
          priority goals
        </TextLink>
      </CollectionHeading>

      <CollectionDescription>
        Today, we published progress updates for both Cross-Agency Priority
        (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
        FY2020. These updates highlight recent milestones and accomplishments as
        well as related initiatives that support progress towards a more modern
        and effective government.
      </CollectionDescription>
    </CollectionItem>
  </Collection>
);

export const headingsOnly = ({ condensed }) => (
  <Collection condensed={condensed}>
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
          Progresson Cross-Agency Priority (CAP goals and Agency Priority Goals
          (APGs)
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
headingsOnly.args = {
  condensed: true
};
