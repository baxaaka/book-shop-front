import "./main.books.css";
import FilterOption from "../../Components/FilterOption/filter.option";
import Book from "../../Components/Book/book";
import Pagination from "../../Components/Pagination/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/loading";

const MainBooks = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_book") || "";

  // ========== CATEGORY DATA==========
  const [categoryData, setCategoryData] = useState([]);

  // ========== BOOK DATA==========
  const [bookData, setBookData] = useState([]);
  const [filterBookData, setFilterBookData] = useState([]);
  const [bookSearch, setBookSearch] = useState(searchQuery);


  
  // ========== LOADING==========
  const [loading, setLoading] = useState(false);

  // ==========GET CATEGORY ==========
  const getCategory = async () => {
    setLoading(true);

    try {
      
      const response = await axios.get("http://localhost:9090/api/category");
      const data = response.data.data;
      setCategoryData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ==========GET BOOKS ==========
  const getBook = async () => {
    setLoading(true);

    try {
      setTimeout(async() => {
        const response = await axios.get("http://localhost:9090/api/book");
        const data = response.data.data;
        setBookData(data);
      }, 2000);
    
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ==========SEARCH BOOKS ==========
  const searchBook = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9090/api/book?search_book=${bookSearch}`
      );
      const data = response.data.data;
 
      setFilterBookData(data);

   
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
    getBook();
 
  }, []);

  useEffect(() => {
    if (bookSearch) {
      searchBook();
    } else {
      setFilterBookData(bookData);
    }
  }, [bookSearch, bookData]);

  useEffect(() => {
    if (id) {
      const filterBook = bookData.filter((item) => item.cat_ref_id == id);
      setFilterBookData(filterBook);
    } else {
      setFilterBookData(bookData);
    }
  }, [id, bookData]);

  return (
    <div className="main_books">
      <div className="main_books_container">
        <FilterOption categoryData={categoryData} />
        {loading ? (
          <Loading />
        ) : (
          <Book filterBookData={filterBookData} setBookSearch={setBookSearch} />
          
        )}
      </div>
    </div>
  );
};

export default MainBooks;
