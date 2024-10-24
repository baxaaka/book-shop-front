import "./header.css";
import Search from "../../Components/Search/search";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";
import user from "../../assets/user.svg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ setBookSearch, cartData }) => {
  const [cartCount, setCartCount] = useState(cartData.length);

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  return (
    <div className="header">
      <div className="header_navbar">
        <Link to="/books" className="header_logo">
          <img src={logo} alt="logo" width="50px" />
        </Link>
        {/* <div className="header_link">
          <Link to="/books">Kitoblar</Link>
          <Link>Mualliflar</Link>
          <Link>Biz bilan bog‘lanish</Link>
        </div> */}

        <Search setBookSearch={setBookSearch} />

        <div className="header_buttons">
          <Link id="mark_button">
            <img src={like} alt="" />
            Saralangan
          </Link>
          <Link to="/cart" id="cart_button">
            <img src={cart} alt="" />
            Savat <span>({cartCount})</span>
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

export default Header;
