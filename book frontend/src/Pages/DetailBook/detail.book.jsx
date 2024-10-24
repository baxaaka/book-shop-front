import "./detail.book.css";
import book1 from "../../assets/book1.jpg";
import { useEffect } from "react";
// import cart from "../../assets/cart.svg";

const DetailBook = ({ bookDataId }) => {
  console.log(bookDataId);
  return (
    <div className="detail_book">
      <div className="detail_book_container">
        {/* card */}

        <div className="detail_book_card">
          <div className="detail_book_card_img">

            <img src={bookDataId.picture ? `http://localhost:9090/${bookDataId.picture}` : book1} alt="" />
          </div>

          <div className="detail_book_card_text">
            <span className="detail_txt_title">{bookDataId.title}</span>
            {/* <span className="detail_txt_author">{bookDataId.author_ref_id.author_name|| ""}</span> */}
            <span className="detail_txt_new_price">
              {bookDataId.new_price} so'm
            </span>
            <s className="detail_txt_old_price">{bookDataId.old_price}so'm</s>
            <span className="detail_txt">
              ISBN <p>{bookDataId.isbn}</p>
            </span>
            <span className="detail_txt">
              Yozuvi <p>{bookDataId.write_lang}</p>
            </span>
            <span className="detail_txt">
              Yili
              <p>2023</p>
            </span>
            <span className="detail_txt">
              Tili
              <p>O`zbekcha</p>
            </span>
            <span className="detail_txt">
              Betlar soni
              <p>368</p>
            </span>
          </div>
          {/* about */}
        </div>
        <div className="detail_about_book">
          <h3>Kitob haqida</h3>
          <p>{bookDataId.about}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
