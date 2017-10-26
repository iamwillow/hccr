import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return(
    <div>
      <div className="cover">
        <div className="white-bar">
          <h2><span className="bold">Clothing Rental</span> - Free Delivery</h2>
          <h3>Spend more time on the snow</h3>
        </div>
      </div>

      <div className="how-it-works">
        <h1>How it works</h1>
        <div className="how-it-works-parent flex-parent">
          <div>
             <img
              src={require('./assets/img/jacket.png')}
              alt="jacket"/>
            <p>
              Shop for gear<br/>
              you love
            </p>
          </div>
          <div>
            <img
              src={require('./assets/img/delivery.png')}
              alt="clothing delivery"/>
            <p>
              Delivered directly to<br/>
              your address for free
            </p>
          </div>
          <div>
            <img
              src={require('./assets/img/use-gear.png')}
              alt="wearing gear"/>
            <p>Enjoy your gear</p>
          </div>
          <div>
            <img
              src={require('./assets/img/return.png')}
              alt="clothing return"/>
            <p>
              Clothing pickup<br/>
              at your address
            </p>
          </div>
        </div>
      </div>

      <div className="shop">
        <h1>Shop now</h1>
        <div className="shop-parent flex-parent">
          <Link to="/women">
            <div><h2>Women</h2></div>
          </Link>
          <Link to="/men">
            <div><h2>Men</h2></div>
          </Link>
          <Link to="/kids">
            <div><h2>Kids</h2></div>
          </Link>
        </div>
      </div>
      <div className="contact">
        <center>
        <h1>Place order</h1>
          {/*<h3><b>Our site is under construction, but we're open for business!</b></h3>*/}
          <p>To set up a rental, please call us at the below number.</p>
          {/*<p>To place an order, please call us at the below number.</p>*/}
          <p><b>Phone number :</b> (970) 333-0259</p>
        </center>
      </div>
    </div>
  )
}

export default Homepage;