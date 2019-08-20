/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { allWords, areas } from './data/words';
import { requiredScore } from './constants';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  table: {
    maxWidth: 350
  },
  tableCell: {
    fontSize: '15pt'
  }
}));

const computeScores = area => {
  const wordScores = localStorage.flashCardScores
    ? JSON.parse(localStorage.flashCardScores)
    : {};
  const wordSetNames = areas[area];
  const scores = {};
  wordSetNames.forEach(name => {
    scores[name] = allWords[name].filter(
      word => wordScores[word] >= requiredScore
    ).length;
  });
  return scores;
};

const resetScores = setScores => {
  localStorage.flashCardScores = JSON.stringify({});
  setScores({});
};

const Progress = props => {
  const {
    match: { params }
  } = props;
  const { area } = params;

  const classes = useStyles();
  const [scores, setScores] = useState(computeScores(area));
  const wordSetNames = areas[area];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Progress
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Back
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex" marginTop="20px" justifyContent="center">
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Section</TableCell>
              <TableCell className={classes.tableCell} align="right">
                Learned
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wordSetNames.map(name => (
              <TableRow key={name}>
                <TableCell className={classes.tableCell}>
                  <Link to={`/progress-details/${name}`}>{name}</Link>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {scores[name] ? scores[name] : 0} / {allWords[name].length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box display="flex" margin="40px" justifyContent="center">
        <Typography variant="h6">
          Something is &quot;learned&quot; if the child knows it {requiredScore}{' '}
          times in a row.
        </Typography>
      </Box>

      <Box display="flex" marginTop="100px" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            resetScores(setScores);
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Progress;
