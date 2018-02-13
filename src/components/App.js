import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import cardActions from '../actions/cardActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Section from './Section';
import './App.css';

const colors = ['purple', 'teel', 'darkblue', 'orange'];

class App extends Component {
  renderSections({ sections, dispatch }) {
      return sections.map((section, index) => {
           const headerClass = `header ${colors[index]}`

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
                <div className="footer" onClick={() => this.promptUser(index)}>+ Add a card</div>
            </div>
          )
      });
  }

  promptUser(sectionIndex) {
      console.log('index is', sectionIndex);
      const newCardText = window.prompt("What is the new card to add?");
      this.props.cardActions.addCard(newCardText);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        {this.renderSections(this.props)}
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

function mapDispatchToProps(dispatch) {
  return {
    cardActions: bindActionCreators(cardActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

