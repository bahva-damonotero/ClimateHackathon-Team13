import React from 'react';
import renderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faImage, faLink } from '@fortawesome/free-solid-svg-icons';
import spriteSvg from '@uswds/uswds/img/sprite.svg';

import { IconList, IconListContent, IconListIcon, IconListItem } from '.';

describe('IconList', () => {
  it('should match snapshot (default)', () => {
    const tree = renderer
      .create(
        <IconList>
          <IconListItem>
            <IconListIcon
              color="green"
              sprite={spriteSvg}
              identifier="check_circle"
            />
            <IconListContent>
              Wash your hands for 20 seconds with soap
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon
              color="green"
              sprite={spriteSvg}
              identifier="check_circle"
            />
            <IconListContent>Stay six feet away from others</IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon color="red" sprite={spriteSvg} identifier="cancel" />
            <IconListContent>Avoid large gatherings</IconListContent>
          </IconListItem>
        </IconList>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (color)', () => {
    const tree = renderer
      .create(
        <IconList color="primary">
          <IconListItem>
            <IconListIcon sprite={spriteSvg} identifier="thumb_up_alt" />
            <IconListContent>No processing lines</IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon sprite={spriteSvg} identifier="thumb_up_alt" />
            <IconListContent>
              Access to expedited entry benefits in other countries
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon sprite={spriteSvg} identifier="thumb_up_alt" />
            <IconListContent>Available at major U.S. airports</IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon sprite={spriteSvg} identifier="thumb_up_alt" />
            <IconListContent>Reduced wait times</IconListContent>
          </IconListItem>
        </IconList>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (custom size)', () => {
    const tree = renderer
      .create(
        <IconList size="lg">
          <IconListItem>
            <IconListIcon color="blue" sprite={spriteSvg} identifier="help" />
            <IconListContent>
              <span className="text-bold">Timing.</span> Is now the right time
              to start a business?
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon color="blue" sprite={spriteSvg} identifier="help" />
            <IconListContent>
              <span className="text-bold">Funding.</span> Do I have enough money
              to launch a business?
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon color="blue" sprite={spriteSvg} identifier="help" />
            <IconListContent>
              <span className="text-bold">Need.</span> Will this business fill a
              real need for my customers?
            </IconListContent>
          </IconListItem>
        </IconList>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot (custom icons)', () => {
    const tree = renderer
      .create(
        <IconList>
          <IconListItem>
            <IconListIcon color="red">
              <FontAwesomeIcon className="usa-icon" icon={faCode} />
            </IconListIcon>
            <IconListContent>
              This item uses a Font Awesome icon.
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon color="green">
              <FontAwesomeIcon className="usa-icon" icon={faImage} />
            </IconListIcon>
            <IconListContent>
              This item uses a Font Awesome icon.
            </IconListContent>
          </IconListItem>

          <IconListItem>
            <IconListIcon color="blue">
              <FontAwesomeIcon className="usa-icon" icon={faLink} />
            </IconListIcon>
            <IconListContent>
              This item uses a Font Awesome icon.
            </IconListContent>
          </IconListItem>
        </IconList>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
