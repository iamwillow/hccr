import React, { Component } from 'react';
import './assets/styles/stylesheet.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <p className="logo">High Country<br/>Clothing Rentals</p>
        </div>
        <div className="cover">
          <div className="white-bar">
            <h2><span className="bold">Clothing Rental</span> - Free Delivery</h2>
            <h3>Spend more time on the snow</h3>
          </div>
        </div>
        <div className="how-it-works">
          <h1>How it works</h1>
          <div className="flex-parent">
            <div>
              image
              <p>
                Shop for gear<br/>
                you love
              </p>
            </div>
            <div>
              image
              <p>
                Delivered directly to<br/>
                your address for free
              </p>
            </div>
            <div>
              image
              <p>Enjoy your gear</p>
            </div>
            <div>
              image
              <p>
                Clothing pickup<br/>
                at your address
              </p>
            </div>
          </div>
        </div>
        <div className="shop">
          <h1>Shop now</h1>
          women's, men's, girl's, boy's
        </div>
        <div className="contact">
          <h1>Place order</h1>
          <p>To place an order, please call us at the below number.</p>
          <p><b>Phone number:</b> 555-5555</p>
        </div>
      </div>
    );
  }
}

export default App;