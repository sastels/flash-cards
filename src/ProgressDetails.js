/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import { requiredScore } from './constants';
import { allWords } from './data/words';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}));

const ProgressSection = props => {
  const {
    match: { params }
  } = props;
  const { section } = params;

  const classes = useStyles();

  if (Object.keys(allWords).indexOf(section) === -1) {
    return (
      <Typography variant="h6" className={classes.title}>
        Bad url
      </Typography>
    );
  }
  const wordScores = localStorage.flashCardScores
    ? JSON.parse(localStorage.flashCardScores)
    : {};

  const wordsLearned = allWords[section].filter(
    word => wordScores[word] >= requiredScore
  );
  const wordsNotLearned = allWords[section].filter(
    word => wordScores[word] < requiredScore || !wordScores[word]
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {section}
          </Typography>
          <Button color="inherit" component={Link} to="/progress">
            Back
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex" marginTop="50px" justifyContent="center">
        <Box maxWidth="350px">
          <Typography variant="h4" gutterBottom>
            Words learned
          </Typography>
          <Typography variant="body">{wordsLearned.join(', ')}</Typography>

          <Box marginTop="20px">
            <Typography variant="h4" gutterBottom>
              Words not learned
            </Typography>
            <Typography variant="body">{wordsNotLearned.join(', ')}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProgressSection;
