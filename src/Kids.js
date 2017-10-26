import React from 'react';
import { Link } from 'react-router-dom';
import Clothes from './components/Clothes';

const Kids = () => {
  return (
    <div>
      <div className="clothing-order">
        <center>
        <br/>
        <h1>Kids</h1>
        <h2>Place order</h2>
          <p>To set up a rental, please call us at : <b>(970) 333-0259</b></p>
          <Link to="/">
            <div className="go-back">
              &#8249; Go back
            </div>
          </Link>
        </center>
      </div>

      <div className="clothes">
        <center>
          <Clothes gender="kids" />
        </center>
      </div>
    </div>
  )
}

export default Kids;