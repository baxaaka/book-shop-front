import "./book.css";
import { useState } from "react";
import { motion } from "framer-motion";
import BookCard from "../BookCard/book.card";
import Search from "../Search/search";
import sad from "../../assets/sad.png";

const Book = ({ filterBookData, setCartData }) => {
  const [selectedBook, setSelectedBook] = useState("");

  const handleSelectChange = (event) => {
    setSelectedBook(event.target.value);
  };

  const sortedBooks = [...filterBookData].sort((a, b) => {
    if (selectedBook === "Arzonroq") {
      return a.new_price - b.new_price;
    }
    if (selectedBook === "Qimmmatroq") {
      return b.new_price - a.new_price;
    }
  
    return 0;
  });

  return (
    <div className="book">
      <div className="book_container">
        <div className="book_header">
          <div className="book_header_navbar">
            <h1>Kitoblar</h1>
            {/* <Search setBookSearch={setBookSearch} /> */}
            <div className="book_header_navbar_btns">
              <select
                id="book_select"
                value={selectedBook}
                onChange={handleSelectChange}
                className="book_select"
              >
                <option value="">Saralash</option>
                <option value="Arzonroq">Arzonroq</option>
                <option value="Qimmmatroq">Qimmmatroq</option>
                <option value="Ko`p buyurtirilgan">Ko`p buyurtirilgan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="book_cards">
          {sortedBooks.length > 0 ? (
            sortedBooks.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BookCard item={item} setCartData={setCartData} />
              </motion.div>
            ))
          ) : (
            <div className="not_found">
              <span>Kitob topilmadi</span>
              <img src={sad} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
