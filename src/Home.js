/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import React from 'react';
import { Link } from 'react-router-dom';
import { H1, CenterContent, Button } from '@cdssnc/repertoire';

const center = css`
  margin: auto;
  display: flex;
  width: 1px;
  justify-content: center;
  //   border: 3px solid red;
`;

const Home = () => (
  <CenterContent mt={[1, 1, 6]}>
    <H1 textAlign="center">Flash Cards</H1>
    <Link to="/words" css={center}>
      <Button>Words</Button>
    </Link>
    <br />
    <Link to="/numbers" css={center}>
      <Button>Numbers</Button>
    </Link>
  </CenterContent>
);
export default Home;
