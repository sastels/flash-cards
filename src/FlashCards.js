/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@cdssnc/repertoire';

const wordContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const bottomBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

// eslint-disable-next-line import/prefer-default-export
export class FlashCards extends Component {
  state = { count: 0 };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.forceUpdate();
    });
  }

  answer = (text, isCorrect) => {
    const { count } = this.state;
    const { handleGuess } = this.props;
    const newCount = count + 1;
    this.setState({ count: newCount });
    handleGuess(text, isCorrect);
  };

  render() {
    const { words, history } = this.props;
    const { count } = this.state;

    // needs the window height when rendered
    const rootContainer = css`
      touch-action: manipulation;
      display: flex;
      min-height: ${window.innerHeight}px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `;

    if (words.length === 0) {
      return null;
    }
    const word = words[count];

    return (
      <div css={rootContainer}>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>

        <div css={wordContainer}>
          <Text fontSize={[7, 8, 8]}>{word}</Text>
        </div>

        <div css={bottomBarContainer}>
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
