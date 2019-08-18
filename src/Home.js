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
`;

const Home = () => (
  <CenterContent marginTop={[5, null, 6]}>
    <H1 textAlign="center">Flash Cards</H1>
    <Link to="/flash-cards" css={center}>
      <Button>Words</Button>
    </Link>
    <Link to="/progress" css={center}>
      <Button backgroundColor="purple">Progress</Button>
    </Link>
  </CenterContent>
);
export default Home;
