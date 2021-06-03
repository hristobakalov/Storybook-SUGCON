import React from 'react';
import PropTypes from 'prop-types';
import './sample.css';

export const SampleComponent = ({backgroundColor,className, heading, content}) => {
      return (
        <div className= {className} style={backgroundColor && { backgroundColor }}>
            <h2 className="display-4">
                {heading}
            </h2>
            <p className="contentDescription">
                {content}
            </p>
        </div>
      );
  };

  SampleComponent.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
    backgroundColor: PropTypes.string,
    className: PropTypes.string
  };
  
  SampleComponent.defaultProps = {
      className: 'sample-component'
  };
