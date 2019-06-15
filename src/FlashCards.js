/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Text } from '@cdssnc/repertoire';

// not used yet

const wordStyle = css`
  margin: 0;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const leftSide = css`
  position: absolute;
  left: 0;
`;
const rightSide = css`
  position: absolute;
  right: 0;
`;

export const styles = () => ({
  word: {},
  button: {
    marginLeft: '10%',
    marginRight: '10%',
    textTransform: 'none',
    marginTop: '20px',
    marginBottom: '30px'
  },

  topBar: {
    textAlign: 'center'
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
    const { words, switchToProgress } = this.props;
    const { count } = this.state;

    if (words.length === 0) {
      return null;
    }
    const word = words[count];

    return (
      <Container maxWidth="500px" margin="auto" padding="30px">
        <Button margin="0 auto" display="block" onClick={switchToProgress}>
          See Progress
        </Button>

        <Text css={wordStyle} fontSize={[7, null, 8]}>
          {word}
        </Text>

        <Button css={leftSide} onClick={() => this.answer(word, false)}>
          Try again
        </Button>
        <Button css={rightSide} onClick={() => this.answer(word, true)}>
          Correct!
        </Button>
      </Container>
    );
  }
}

FlashCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGuess: PropTypes.func.isRequired,
  switchToProgress: PropTypes.func.isRequired
};
