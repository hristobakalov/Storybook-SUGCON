import PropTypes from 'prop-types';

export const scLinkType = PropTypes.shape({
  value: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string,
    linktype: PropTypes.string,
    class: PropTypes.string,
    title: PropTypes.string,
    querystring: PropTypes.string,
    id: PropTypes.string
  })
});
