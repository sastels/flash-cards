/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { H1, CenterContent, Button } from '@cdssnc/repertoire';

const center = css`
  margin: auto;
  display: flex;
  width: 1px;
  justify-content: center;
  margin-top: 50px;
  //   border: 3px solid red;
`;

const Home = () => (
  <CenterContent mt={[1, 1, 6]}>
    <H1 textAlign="center">Flash Cards</H1>
    <Link to="/flash-cards" css={center}>
      <Button>Words</Button>
    </Link>
    <Link to="/flash-cards" css={center}>
      <Button>Numbers</Button>
    </Link>
    <Link to="/progress" css={center}>
      <Button backgroundColor="purple">Progress</Button>
    </Link>
  </CenterContent>
);
export default Home;
