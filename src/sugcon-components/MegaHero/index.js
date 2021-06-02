import React from 'react';
import PropTypes from 'prop-types';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import { Jumbotron } from 'reactstrap';
// Type defintitions
import * as TYPES from '../../types';

import './megahero.css';

export const MegaHero = (props) => {
    const {
        model = {},
      } = props;
      return (
        <div className= 'megahero'>
            <Jumbotron style={{ backgroundImage: `url(${model.image.src})` }}>
                <Text field={model.heading} className="display-3 text-light" tag="h1" />
                <Text field={model.lead} className="lead text-light" tag="p" />
                <hr style={{ borderTop: '2px solid black' }} />
                <Text field={model.text} className="text-light" tag="p" />
                <Link field={model.primaryLink} className="btn btn-danger mr-3" />
                <Link field={model.secondaryLink} className="btn btn-secondary" />
            </Jumbotron>
        </div>
      );
  };

  MegaHero.propTypes = {
    model: PropTypes.shape({
      heading: TYPES.scStringType,
      lead: TYPES.scStringType,
      text: TYPES.scStringType,
      primaryLink: TYPES.scLinkType,
      secondaryLink: TYPES.scLinkType,
      image: TYPES.scImageType 
    })
  };
  