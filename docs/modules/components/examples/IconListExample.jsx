import React from 'react';
import {
  GridCol,
  GridRow,
  IconList,
  IconListContent,
  IconListIcon,
  IconListItem
} from '@boozallen-uip/uswds-react-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faImage, faLink } from '@fortawesome/free-solid-svg-icons';
import spriteSvg from '@uswds/uswds/img/sprite.svg';

export default function IconListExample() {
  return (
    <>
      <GridRow gaps>
        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1 margin-top-0">
            Default
          </h3>

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
              <IconListIcon
                color="red"
                sprite={spriteSvg}
                identifier="cancel"
              />
              <IconListContent>Avoid large gatherings</IconListContent>
            </IconListItem>
          </IconList>
        </GridCol>

        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1 tablet:margin-top-0">
            Simple content
          </h3>

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
              <IconListContent>
                Available at major U.S. airports
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon sprite={spriteSvg} identifier="thumb_up_alt" />
              <IconListContent>Reduced wait times</IconListContent>
            </IconListItem>
          </IconList>
        </GridCol>
      </GridRow>

      <GridRow gaps>
        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1">
            Rich content
          </h3>

          <IconList>
            <IconListItem>
              <IconListIcon sprite={spriteSvg} identifier="check_circle" />
              <IconListContent>
                <h3 className="usa-icon-list__title">
                  Donate cash when possible.
                </h3>
                <p>
                  Financial contributions to recognized disaster relief
                  organizations are the fastest, most flexible and most
                  effective method of donating. Organizations on the ground know
                  what items and quantities are needed, often buy in bulk with
                  discounts and, if possible, purchase through businesses local
                  to the disaster, which supports economic recovery.
                </p>
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon sprite={spriteSvg} identifier="check_circle" />
              <IconListContent>
                <h3 className="usa-icon-list__title">
                  Confirm what donations are needed.
                </h3>
                <p>
                  Unneeded and unsolicited goods burden local organizations’
                  ability to meet survivors’ confirmed needs, drawing away
                  valuable volunteer labor, transportation and warehouse space.
                </p>
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon sprite={spriteSvg} identifier="check_circle" />
              <IconListContent>
                <h3 className="usa-icon-list__title">
                  Talk to trusted organizations about volunteering.
                </h3>
                <p>
                  Financial contributions to recognized disaster relief
                  organizations are the fastest, most flexible and most
                  effective method of donating. Organizations on the ground know
                  what items and quantities are needed, often buy in bulk with
                  discounts and, if possible, purchase through businesses local
                  to the disaster, which supports economic recovery.
                </p>
              </IconListContent>
            </IconListItem>
          </IconList>
        </GridCol>

        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1">
            Custom size with rich content
          </h3>

          <IconList size="lg">
            <IconListItem>
              <IconListIcon
                color="green"
                sprite={spriteSvg}
                identifier="attach_money"
              />
              <IconListContent>
                <h3 className="usa-icon-list__title">Let the sun shine.</h3>
                <p>
                  On sunny days, open your curtains to allow the sun to
                  naturally warm the rooms of your home without using
                  electricity. Natural sunlight can also lift your mood to help
                  brighten your day. On warm days, close your curtains to help
                  keep your house cool.
                </p>
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon
                color="green"
                sprite={spriteSvg}
                identifier="attach_money"
              />
              <IconListContent>
                <h3 className="usa-icon-list__title">Adjust your schedule.</h3>
                <p>
                  Instead of running high-energy-use appliances such as
                  dishwashers and clothes dryers during mid-afternoon or early
                  evening hours, operate them early in the morning or late at
                  night. Some utilities charge less at off-peak times, which
                  will help reduce your costs.
                </p>
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon
                color="green"
                sprite={spriteSvg}
                identifier="attach_money"
              />
              <IconListContent>
                <h3 className="usa-icon-list__title">Fill it up.</h3>
                <p>
                  Wash full loads, whether it’s clothes or dishes. Washing
                  multiple small loads means you’re using and heating more
                  water, which can increase your expenses. Using cold water for
                  clothes washing can also help lower your costs.
                </p>
              </IconListContent>
            </IconListItem>
          </IconList>
        </GridCol>
      </GridRow>

      <GridRow gaps>
        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1">
            Custom size
          </h3>

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
                <span className="text-bold">Funding.</span> Do I have enough
                money to launch a business?
              </IconListContent>
            </IconListItem>

            <IconListItem>
              <IconListIcon color="blue" sprite={spriteSvg} identifier="help" />
              <IconListContent>
                <span className="text-bold">Need.</span> Will this business fill
                a real need for my customers?
              </IconListContent>
            </IconListItem>
          </IconList>
        </GridCol>

        <GridCol>
          <h3 className="site-preview-heading border-top-1px border-base-light padding-top-1">
            Custom icons
          </h3>

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
        </GridCol>
      </GridRow>
    </>
  );
}
