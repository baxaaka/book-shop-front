import "./admin.book.css";
import eye from "../../assets/eye.svg";
import add from "../../assets/add.svg";

import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg";
import { Link } from "react-router-dom";
import AdminSearchBook from "../AdminSearchBoook/admin.search.book";
import { useState } from "react";
 
const AdminBook = ({ filterBookData ,setBookSearch ,setOnclick}) => {
  console.log(filterBookData);

 
  return (

    <div className="admin_book">
      
      <div className="admin_book_container">
        <div className="admin_book_header">
          <h3>Kitoblar</h3> 
          <AdminSearchBook  setBookSearch={setBookSearch}/>
          <img src={add} alt="" onClick={()=>setOnclick(true)} />
        </div>
        <div className="admin_book_box">
          {filterBookData.map((item) => (
            <div className="admin_book_card" key={item._id}>
              <img
                src={
                  item.picture ? `http://localhost:9090/${item.picture}` : book1
                }
                alt=""
                width="100px"
              />

              <div className="admin_book_card_txt">
                <span>{item.title}</span>
                <span className="txt_auhtor">Anton Pavlov</span>

                <s className="txt_old_price">
                  {Number(item.old_price).toLocaleString("de-DE")} so‘m{" "}
                </s>
                <span className="txt_new_price">
                  {Number(item.new_price).toLocaleString("de-DE")} so‘m
                </span>

                <input type="text" value={item.title}/>
              </div>

              {/* <button>

             </button> */}

              <Link to={`/details/${item._id}`}>
                <img src={eye} alt="" />
              </Link>

              <button>
                <img src={edit} alt="" />
              </button>
              <button>
                <img src={remove} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBook;
