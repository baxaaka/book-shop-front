import "./book.card.css";
import book1 from "../../assets/book1.jpg";
import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const BookCard = ({ item, setCartData }) => {
  const handleClick = (item) => {
    setCartData((prevCart) => {
      const isItemInCart = prevCart.some(
        (cartItem) => cartItem._id === item._id
      );
      if (isItemInCart) {
        toast.success("Bu kitob savatda mavjud.");
        return prevCart;
      }
      const updatedCart = [...prevCart, { ...item, quantity: 1 }];
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      toast.success("Savatga muvaffaqiyatli qo'shildi.");
      return updatedCart;
    });
  };

  return (
    <div className="book_card">
      <div className="book_card_container" key={item._id}>
        <Link to={`/details/${item._id}`}>
          <div
            className="book_card_img"
            style={{
              backgroundImage: `url(${
                item.picture ? `http://localhost:9090/${item.picture}` : book1
              })`,
            }}
          ></div>
          <div className="book_card_text">
            <span className="txt_title">{item.title}</span>
            <span className="txt_auhtor">Anton Pavlov</span>
            <span className="txt_price">
              <s className="txt_old_price">
                {Number(item.old_price).toLocaleString("de-DE")} so‘m{" "}
              </s>
              <span className="txt_new_price">
                {Number(item.new_price).toLocaleString("de-DE")} so‘m
              </span>
            </span>
          </div>
        </Link>
        <div className="book_card_btn">
          <button>
            <img src={like} alt="" />
          </button>
          <button onClick={() => handleClick(item)}>
            <img src={cart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
