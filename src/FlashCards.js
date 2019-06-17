/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@cdssnc/repertoire';
import { wordsPerRound } from './constants';

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

const webStorageEnabled = typeof Storage !== 'undefined';

// eslint-disable-next-line import/prefer-default-export
export class FlashCards extends Component {
  state = { count: 0, words: [] };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.forceUpdate();
    });
    const { words } = this.props;
    const newWords = words
      .sort(() => Math.random() - 0.5)
      .slice(0, wordsPerRound);
    this.setState({
      words: newWords,
      wordScores: localStorage.flashCardScores
        ? JSON.parse(localStorage.flashCardScores)
        : {}
    });
  }

  answer = (text, isCorrect) => {
    const { count, wordScores } = this.state;
    const newCount = count + 1;

    if (webStorageEnabled) {
      const wordScore = wordScores[text] !== undefined ? wordScores[text] : 0;
      const newWordScores = JSON.parse(JSON.stringify(wordScores));
      newWordScores[text] = Number(wordScore) + (isCorrect ? 1 : 0);
      localStorage.flashCardScores = JSON.stringify(newWordScores);
      this.setState({ count: newCount, wordScores: newWordScores });
    } else {
      this.setState({ count: newCount });
    }
  };

  render() {
    const { history } = this.props;
    const { count, words } = this.state;

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

    if (count >= words.length) {
      history.push('/');
    }

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

          <Text marginTop={[3, 4, 4]} fontSize={[3, 4, 4]}>
            {count + 1} / {wordsPerRound}
          </Text>

          <Button onClick={() => this.answer(word, true)}>Correct!</Button>
        </div>
      </div>
    );
  }
}

FlashCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};
