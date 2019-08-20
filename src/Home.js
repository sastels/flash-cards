/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { areas } from './data/words';

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

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Flash Cards
          </Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex" marginTop="100px" justifyContent="center">
        <Table className={classes.table}>
          <TableBody>
            {Object.keys(areas).map(area => (
              <TableRow key={area}>
                <TableCell className={classes.tableCell}>
                  <Link to={`/flash-cards/${area}`}>{area}</Link>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Link to="/progress">Progress</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};
export default Home;
