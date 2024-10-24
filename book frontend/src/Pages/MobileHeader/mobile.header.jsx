import "./mobile.header.css";

import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";
import user from "../../assets/user.svg";
import home from "../../assets/home.svg";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileHeader = ({ cartData }) => {
  const [cartCount, setCartCount] = useState(cartData.length);

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  return (
    <div className="mobile_header">
      <div className="mobile_header_navbar">
        <div className="mobile_header_buttons">
          <Link id="home_button" to="/books">
            <img src={home} alt=""  />
            Bosh sahifa
          </Link>
          <Link id="mark_button">
            <img src={like} alt="" />
            Saralangan
          </Link>
          <Link to="/cart" id="cart_button">
            <img src={cart} alt="" />
            <p>
              Savat <span>({cartCount})</span>
            </p>
          </Link>

          <button id="signup_button">
            <img src={user} alt="" />
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
