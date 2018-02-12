import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <div className="section-container">
        <p>Section</p>
      </div>
    );
  }
}

//Section.propTypes = {
//  sections: PropTypes.array,
//};

export default Section;
