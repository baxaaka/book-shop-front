import React from "react";
import "./cart.css";
import book1 from "../../assets/book1.jpg";
import deleteImg from "../../assets/delete.svg";

const Cart = ({ cartData, setCartData }) => {
  const getTotalPrice = () => {
    const total = cartData.reduce((acc, item) => {
      const price = Number(item.new_price);
      const quantity = item.quantity || 1; 

      if (isNaN(price) || isNaN(quantity)) {
        console.error("Invalid number conversion for item", item);
        return acc;
      }

      return acc + price * quantity + 30000;
    }, 0);

    return total.toLocaleString("de-DE");
  };

  const getOldPrice = () => {
    const total = cartData.reduce((acc, item) => {
      const price = Number(item.old_price);
      const quantity = item.quantity || 1;
      return acc + price * quantity;
    }, 0);
    return total.toLocaleString("de-DE");
  };

  const getTotalSavings = () => {
    const savings = cartData.reduce((acc, item) => {
      const oldPrice = Number(item.old_price);
      const newPrice = Number(item.new_price);
      return acc + (oldPrice - newPrice) * (item.quantity || 1);
    }, 0);
    return savings.toLocaleString("de-DE");
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartData.filter((item) => item._id !== itemId);
    setCartData(updatedCart);
  };

  const updateQuantity = (itemId, delta) => {
    const updatedCart = cartData.map((item) => {
      if (item._id === itemId) {
        const currentQuantity = Number(item.quantity) || 0; // Convert to number, default to 0 if undefined
        const newQuantity = currentQuantity + delta;
        return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 }; // Prevent quantity from going below 1
      }
      return item;
    });
    setCartData(updatedCart);
  };

  return (
    <div className="cart">
      <div className="cart_container">
        <div className="cart_book_box">
          {cartData.map((item) => (
            <div className="cart_book_card" key={item._id}>
              <div className="cart_book_card_img">
                <div
                  className="cart_book_img"
                  style={{
                    backgroundImage: `url(${
                      item.picture
                        ? `http://localhost:9090/${item.picture}`
                        : book1
                    })`,
                  }}
                />
              </div>

              <div className="cart_book_details">
                <h3>{item.title}</h3>
                <p>
                  {Number(
                    typeof item.new_price === "string"
                      ? item.new_price.replace(/[^\d.-]/g, "")
                      : item.new_price
                  ).toLocaleString("de-DE")}{" "}
                  so'm
                </p>
                <s>
                  {" "}
                  {Number(
                    typeof item.old_price === "string"
                      ? item.old_price.replace(/[^\d.-]/g, "")
                      : item.old_price
                  ).toLocaleString("de-DE")}{" "}
                  so'm
                </s>
                <div className="cart_btns">
                  <div className="quantity_controls">
                    <button
                      onClick={() => updateQuantity(item._id, -1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item._id, 1)}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item._id)}
                    className="cart_remove_btn"
                  >
                    <img src={deleteImg} alt="" />
                    O‘chirish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart_price_box">
          <div className="cart_price_card">
            <h3>Buyurtmangiz</h3>
            <span>
              <p>Kitoblar ({cartData.length}) :</p>
              {getOldPrice()} so'm
            </span>
            <span>
              <p>Yetkazib berish</p>
              30.000 so'm
            </span>
            <span>
              <p>Jami :</p> <b>{getTotalPrice()} so'm</b>
            </span>
            <span className="cart_savings">
              <p>Tejovingiz {getTotalSavings()} so'm</p>
            </span>
            <button className="cart_btn_buy">Xarid qilish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
