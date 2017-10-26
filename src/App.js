import React from 'react';
import { Link } from 'react-router-dom';

import Routes from './routes';
import './assets/styles/stylesheet.css';

const App = () => {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <p className="logo">High Country<br/>Clothing Rentals</p>
        </Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;