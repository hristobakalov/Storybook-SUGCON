import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import {  Row, Col } from 'reactstrap';
// Type defintitions
import * as TYPES from '../../types';

export const TwoColumn = (props) => {
    const {
        model = {},
        className = '',
      } = props;
      return (
        <div className="two-column">
            <Row>
            <Col xs="6" className="column">
                <Placeholder 
                name="jss-left-column" 
                rendering={model.rendering} 
                route={model.route}/>
            </Col>
            <Col xs="6" className="column">
                <Placeholder 
                name="jss-right-column" 
                rendering={model.rendering} 
                route={model.route}/>
            </Col>
            </Row>
      </div>
      );
  };

  TwoColumn.propTypes = {
    model: PropTypes.shape({
    })
  };