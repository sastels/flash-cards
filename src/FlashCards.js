import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@cdssnc/repertoire';

// not used yet
export const styles = () => ({
  word: {
    margin: '0',
    position: 'absolute',
    top: '47%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  button: {
    marginLeft: '10%',
    marginRight: '10%',
    textTransform: 'none',
    marginTop: '20px',
    marginBottom: '30px'
  },
  bottomButton: {
    marginLeft: '10%',
    marginRight: '10%',
    textTransform: 'none',
    marginTop: '20px',
    marginBottom: '30px',
    fontSize: '20px'
  },

  topBar: {
    textAlign: 'center'
  },
  bottomBar: {
    width: '100%',
    marginLeft: -10,
    padding: 0,
    position: 'fixed',
    bottom: '0px'
  }
});

export class FlashCards extends Component {
  state = { count: 0 };

  answer = (text, isCorrect) => {
    const { count } = this.state;
    const { handleGuess } = this.props;
    const newCount = count + 1;
    this.setState({ count: newCount });
    handleGuess(text, isCorrect);
  };

  render() {
    const { words } = this.props;
    const { count } = this.state;

    if (words.length === 0) {
      return null;
    }

    const word = words[count];
    return (
      <div id="flash_cards">
        {word}
        <div>
          <Button onClick={() => this.answer(word, false)}>Try again</Button>
          <Button onClick={() => this.answer(word, true)}>Correct!</Button>
        </div>
      </div>
    );
  }
}

FlashCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGuess: PropTypes.func.isRequired
};
