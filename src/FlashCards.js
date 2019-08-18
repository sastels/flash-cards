/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { wordsPerRound, requiredScore } from './constants';
import { allWords } from './data/words';

const useStyles = makeStyles(() => ({
  root: {
    touchAction: 'manipulation'
  },
  title: {
    flexGrow: 1
  },
  selections: {
    marginTop: '50px'
  }
}));

// const webStorageEnabled = typeof Storage !== 'undefined';

const FlashCards = props => {
  const { history } = props;
  const classes = useStyles();

  const [, updateState] = React.useState();
  window.addEventListener('resize', () => {
    updateState({}); // force update
  });

  const [wordScores, setWordScores] = useState(
    localStorage.flashCardScores ? JSON.parse(localStorage.flashCardScores) : {}
  );

  let words = [];
  Object.keys(allWords).forEach(wordSet => {
    words = words.concat(allWords[wordSet].sort(() => Math.random() - 0.5));
  });
  words = words.filter(word => !(wordScores[word] >= requiredScore));

  const [count, setCount] = useState(0);
  const testWords = words.slice(0, wordsPerRound);

  const answer = (text, isCorrect) => {
    const newCount = count + 1;
    const wordScore = wordScores[text] !== undefined ? wordScores[text] : 0;
    const newWordScores = JSON.parse(JSON.stringify(wordScores));
    newWordScores[text] = Math.max(Number(wordScore) + (isCorrect ? 1 : 0), 0);
    localStorage.flashCardScores = JSON.stringify(newWordScores);
    setCount(newCount);
    setWordScores(newWordScores);
  };

  if (testWords.length === 0) {
    return null;
  }
  const word = testWords[count];

  if (count >= testWords.length) {
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Words
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Back
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        minHeight={`${window.innerHeight - 50}px`}
      >
        <div /> {/* spacer */}
        <Typography variant="h1">{word}</Typography>
        <Box
          display="flex"
          width="90%"
          boxSizing="border-box"
          justifyContent="space-between"
          marginBottom="30px"
        >
          <Button onClick={() => answer(word, false)}>Try again</Button>

          <Typography variant="h6">
            {count + 1} / {wordsPerRound}
          </Typography>

          <Button onClick={() => answer(word, true)}>Correct!</Button>
        </Box>
      </Box>
    </div>
  );
};

export default FlashCards;
