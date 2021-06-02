import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
// Type defintitions
import * as TYPES from '../../types';

export const ContentBlock = (props) => {
    const {
        model = {},
        className = '',
      } = props;
      return (
        <div className= {className}>
            <Text tag="h2" className="display-4" field={model.heading} />
        
            <RichText className="contentDescription" field={model.content} />
        </div>
      );
  };

  ContentBlock.propTypes = {
    model: PropTypes.shape({
      heading: TYPES.scStringType,
      content: TYPES.scStringType,
    })
  };
  