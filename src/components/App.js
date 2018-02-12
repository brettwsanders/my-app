import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Section from './Section';
import './App.css';

const colors = ['purple', 'teel', 'darkblue', 'orange'];

class App extends Component {
  renderSections(sections) {
      return sections.map((section, index) => {
           const headerClass = `header ${colors[index]}`
           console.log(headerClass);

           const cards = section.cards.map(card => {
               return (
                   <div className="card">
                     {card.text}
                   </div>
               )
           });
          return (
            <div className="section-container">
                <div className={headerClass}>{section.name}</div>
                {cards}
            </div>
          )
      });
  }

  render() {
    return (
      <div className="container">
        {this.renderSections(this.props.sections)}
      </div>
    );
  }
}

App.propTypes = {
  sections: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     stuffActions: bindActionCreators(stuffActions, dispatch)
//   };
// }

export default connect(
  mapStateToProps,
//  mapDispatchToProps
)(App);

