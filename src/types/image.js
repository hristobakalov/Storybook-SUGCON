import PropTypes from 'prop-types';

export const scImageType = PropTypes.shape({
  value: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
  })
});
