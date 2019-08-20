/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { areas } from './data/words';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  selections: {
    marginTop: '50px'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Flash Cards
          </Typography>
          <Button color="inherit" component={Link} to="/progress">
            Progress
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        marginTop="100px"
        justifyContent="center"
      >
        {Object.keys(areas).map(area => (
          <Box
            key={area}
            display="flex"
            marginTop="30px"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/flash-cards/${area}`}
            >
              {area}
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
};
export default Home;
