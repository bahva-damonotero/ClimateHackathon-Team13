import PropTypes from 'prop-types';

export default function FooterPrimaryContent({ children }) {
  return children;
}

FooterPrimaryContent.displayName = 'FooterPrimaryContent';

FooterPrimaryContent.propTypes = {
  children: PropTypes.node.isRequired
};
