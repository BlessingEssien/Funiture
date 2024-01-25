import React from "react";
import "./shop.scss";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="headimg">
        <div className="midtext">Shop</div>
        <div className="line2">
          <Link to="/">Home</Link>
          <div className="icon"></div>
          <Link to="/Shop">Shop</Link>
        </div>
      </div>
      <div className="bar">
        <div className="group1">
          <div className="filter">
            <div className="icon2"></div>
            <div className="fil">Filter</div>
          </div>

          <div className="dots"></div>
          <div className="lines"></div>
          <div className="line"></div>
          <div className="text2">Showing 1-16 of 32 results</div>
        </div>
        <div className="group2">
          <div className="show">Show</div>
          <div className="rect">16</div>
          <div className="shortby">Short by</div>
          <div className="defrect">Default</div>
        </div>
      </div>
      <div className="addtocart">
        <div className="line1">
          <div className="card1">
            <div class="card">
              <img
                src="/public/images/image1.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Syltherine</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                  <p className="blur">Rp 3.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div class="card">
              <img
                src="/public/images/image2.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Leviosa</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card3">
            <div class="card">
              <img
                src="/public/images/image3.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Lolito</h3>
                <p className="text">Luxury big sofa</p>
                <div className="inlinemoney">
                  <p className="first">Rp 7.000.000</p>
                  <p className="blur">Rp 14.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card4">
            <div class="card">
              <img
                src="/public/images/image4.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Respira</h3>
                <p className="text">Outdoor bar table and stool</p>
                <div className="inlinemoney">
                  <p className="first">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nextline">
          <div className="card5">
            <div class="card">
              <img
                src="/public/images/image1.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Syltherine</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                  <p className="blur">Rp 3.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card6">
            <div class="card">
              <img
                src="/public/images/image2.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Leviosa</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card7">
            <div class="card">
              <img
                src="/public/images/image3.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Lolito</h3>
                <p className="text">Luxury big sofa</p>
                <div className="inlinemoney">
                  <p className="first">Rp 7.000.000</p>
                  <p className="blur">Rp 14.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card8">
            <div class="card">
              <img
                src="/public/images/image4.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Respira</h3>
                <p className="text">Outdoor bar table and stool</p>
                <div className="inlinemoney">
                  <p className="first">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="anotherline">
          <div className="card9">
            <div class="card">
              <img
                src="/public/images/image1.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Syltherine</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                  <p className="blur">Rp 3.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card10">
            <div class="card">
              <img
                src="/public/images/image2.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Leviosa</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card11">
            <div class="card">
              <img
                src="/public/images/image3.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Lolito</h3>
                <p className="text">Luxury big sofa</p>
                <div className="inlinemoney">
                  <p className="first">Rp 7.000.000</p>
                  <p className="blur">Rp 14.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card12">
            <div class="card">
              <img
                src="/public/images/image4.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Respira</h3>
                <p className="text">Outdoor bar table and stool</p>
                <div className="inlinemoney">
                  <p className="first">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lastline">
          <div className="card13">
            <div class="card">
              <img
                src="/public/images/image1.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Syltherine</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                  <p className="blur">Rp 3.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card14">
            <div class="card">
              <img
                src="/public/images/image2.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Leviosa</h3>
                <p className="text">Stylish cafe chair</p>
                <div className="inlinemoney">
                  <p className="first">Rp 2.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card15">
            <div class="card">
              <img
                src="/public/images/image3.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Lolito</h3>
                <p className="text">Luxury big sofa</p>
                <div className="inlinemoney">
                  <p className="first">Rp 7.000.000</p>
                  <p className="blur">Rp 14.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card16">
            <div class="card">
              <img
                src="/public/images/image4.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Respira</h3>
                <p className="text">Outdoor bar table and stool</p>
                <div className="inlinemoney">
                  <p className="first">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nextt">
        <button className="one">1</button>
        <button className="two">2</button>
        <button className="three">3</button>
        <button className="n3xt">next</button>
      </div>
      <div className="frame">
        <div className="items">
            <div className="ic1">
          <img src="/public/Icons/trophy 1.svg" alt=""></img>
          <div className="text">
            <p>High Quality</p>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div className="ic2">
          <img src="/public/Icons/guarantee.svg" alt=""></img>
          <div className="text">
            <p>Warranty Protection</p>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="ic3">
          <img src="/public/Icons/shipping.svg" alt=""></img>
          <div className="text">
            <p>Free Shipping</p>
          <p>Order over 150 $</p>
          </div>
          </div>

        <div className="ic4">
          <img src="/public/Icons/customer.svg" alt=""></img>
          <div className="text">
            <p>24 / 7 Support</p>
          <p>Dedicated support</p>
          </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Shop;
