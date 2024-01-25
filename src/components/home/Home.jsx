import React from "react";
import "./home.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


const Home = () => {
  return (
    <div className="body">
      <div className="Setion1">
        <div className="sidebox">
          <div className="arrival">New Arrival</div>
          <div className="disc">Discover Our New Collection</div>
          <div className="sidetext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <button className="click">Buy Now</button>
        </div>
      </div>
      <div className="Section2">
        <div className="head">Browse The Range</div>
        <div className="headtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="img">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
        </div>
        {/* <div className="bttext">
          <div className="din">Dining</div>
          <div className="liv">Living</div>
          <div className="bed">Bedroom</div>
        </div> */}
      </div>
      <div className="Section3">
        <div className="top">Our Products</div>
        <div className="products_tp">
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
        <div className="products_bt">
          <div className="card5">
            <div class="card">
              <img
                src="/public/images/image5.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Grifo</h3>
                <p className="text">Night lamp</p>
                <div className="inlinemoney">
                  <p className="first">Rp 1.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card6">
            <div class="card">
              <img
                src="/public/images/image6.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Muggo</h3>
                <p className="text">Small mug</p>
                <div className="inlinemoney">
                  <p className="first">Rp 150.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card7">
            <div class="card">
              <img
                src="/public/images/image7.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Pingky</h3>
                <p className="text">Cute bed set</p>
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
                src="/public/images/image8.svg"
                alt="Placeholder Image"
              ></img>
              <div class="card-content">
                <h3 className="Header">Potty</h3>
                <p className="text">Minimalist flower pot</p>
                <div className="inlinemoney">
                  <p className="first">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
      </div>
          <button className="show">
          <div className="textb">Show More</div>
        </button>
        <div className="Section4">
      </div>
    </div>
    </div>
  );
};

export default Home;
