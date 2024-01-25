import React from 'react';
import  "./MyNav.scss";
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <div className="Section1">
    <div className="nav">
    <div className="logo">
      <div className="cute"></div>
      <div className="text">Furniro</div>
      </div>
    <div className="group">
     <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>
    <div className="icons">
   <div className="Icon1">
   </div>
   <div className="Icon2">
   </div>
   <div className="Icon3">
   </div>
   <div className="Icon4">
   </div>
      </div>
</div>
</div>
  );
};

export default MyNav;