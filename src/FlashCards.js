/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@cdssnc/repertoire';

// not used yet

const wordStyle = css`
  flex: 0.9;
  padding-top: 30vh;
  // border: 3px solid red;
`;

const rootContainer = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

// const wordContainer = css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const bottomBar = css`
  display: flex;
  // border: 3px solid red;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

// eslint-disable-next-line import/prefer-default-export
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
      <div css={rootContainer}>
        <Button onClick={switchToProgress}>See Progress</Button>

        <Text css={wordStyle} fontSize={[7, null, 8]}>
          {word}
        </Text>

        <div css={bottomBar}>
          <Button onClick={() => this.answer(word, false)}>Try again</Button>

          <Button onClick={() => this.answer(word, true)}>Correct!</Button>
        </div>
      </div>
    );
  }
}

FlashCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGuess: PropTypes.func.isRequired,
  switchToProgress: PropTypes.func.isRequired
};
