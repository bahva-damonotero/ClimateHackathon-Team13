import React from 'react';
import {
  Collection,
  CollectionCalendar,
  CollectionDescription,
  CollectionHeading,
  CollectionItem,
  TextLink
} from '@boozallen-uip/uswds-react-core';

export default function CollectionCalendarExample() {
  return (
    <Collection>
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
          Government President’s Award. This program recognizes the
          contributions of individuals and teams across the federal workforce
          who make a profound difference in the lives of the American people.
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
          In honor of National Women’s Small Business Month, we’ve partnered
          with SBA’s Office of Government Contracting and Business Development
          and Office of Program Performance, Analysis, and Evaluation to
          highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
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
          FY2020. These updates highlight recent milestones and accomplishments
          as well as related initiatives that support progress towards a more
          modern and effective government.
        </CollectionDescription>
      </CollectionItem>
    </Collection>
  );
}
