import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/words">Words</Link>
      </li>
      <li>
        <Link to="/numbers">Numbers</Link>
      </li>
    </ul>
  </div>
);
export default Home;
