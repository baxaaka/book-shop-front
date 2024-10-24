import "./App.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Header from "./Pages/Header/header";
import axios from "axios";
import DetailBook from "./Pages/DetailBook/detail.book";
import { useEffect, useState } from "react";
import FilterOption from "./Components/FilterOption/filter.option";
import Loading from "./Components/Loading/loading";
import Book from "./Components/Book/book";
import Cart from "./Pages/Cart/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileHeader from "./Pages/MobileHeader/mobile.header";
import AdminSidebar from "./Admin/AdminSidebar/admin.sidebar";
import AdminCreate from "./Admin/AdminCreateBook/admin.book";
import AdminBook from "./Admin/AdminCreateBook/admin.book";
import AdminCategory from "./Admin/AdminCreateCategory/admin.category";
import AdminBookDetails from "./Admin/AdminCreateBook/admin.details";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_book") || "";

  // ========== CATEGORY DATA ==========
  const [categoryData, setCategoryData] = useState([]);
  const [categoryDataId, setCategoryDataId] = useState("");

  // ========== BOOK DATA ==========
  const [bookData, setBookData] = useState([]);
  const [filterBookData, setFilterBookData] = useState([]);
  const [bookSearch, setBookSearch] = useState(searchQuery);

  const [bookDataId, setBookDataId] = useState([]);
  const [bookId, setBookId] = useState(null);

  // ========== LOADING ==========
  const [loading, setLoading] = useState(false);

  // ========== CART DATA ==========
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem("cartData");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  // ========== GET CATEGORY ==========
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

  // ========== GET BOOKS ==========
  const getBook = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:9090/api/book");
      const data = response.data.data;
      setBookData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ========== GET BOOK ID ==========
  const getBookId = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9090/api/book/${bookId}`
      );
      const data = response.data.data;
      setBookDataId(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ========== SEARCH BOOKS ==========
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
    // getBookId()
  }, []);

  useEffect(() => {
    if (bookSearch) {
      searchBook();
    } else {
      setFilterBookData(bookData);
    }
    if (bookId) {
      getBookId();
    } else {
      setBookId(null);
    }
  }, [bookSearch, bookData, bookId]);

  useEffect(() => {
    if (categoryDataId) {
      const filterBook = bookData.filter(
        (item) => item.cat_ref_id === categoryDataId
      );
      setFilterBookData(filterBook);
    } else {
      setFilterBookData(bookData);
    }
  }, [categoryDataId, bookData]);

  useEffect(() => {
    if (location.pathname.includes("/books/")) {
      const categoryId = location.pathname.split("/books/")[1];
      setCategoryDataId(categoryId);
    } else {
      setCategoryDataId(null);
    }

    if (location.pathname.includes("/details/")) {
      const bookId = location.pathname.split("/details/")[1];
      setBookId(bookId);
    } else {
      setBookId(null);
    }
  }, [location.pathname]);



  const [onClick , setOnclick] =useState(Boolean)
  const [pdisplay , setDisplay] =useState("none")


  // let displayopen ;
  // if(onClick==true){
  //   console.log("eeeee");
  //   displayopen="block"
  // }
console.log(onClick);

useEffect(()=>{
  if(onClick==true){
     
    setDisplay("block")
 

  
  } else{
    setDisplay("none")
 
  }
},[setDisplay])

 

  // if (onClick==false){
  //   setDisplay("block")
  //   setOnclick(true)
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/books"
          element={
            <>
              <Header setBookSearch={setBookSearch} cartData={cartData} />

              <div className="main_books">
                <div className="main_books_container">
                  <FilterOption categoryData={categoryData} />
                  {loading ? (
                    <Loading />
                  ) : (
                    <Book
                      filterBookData={filterBookData}
                      setCartData={setCartData}
                    />
                  )}
                </div>
              </div>
              <MobileHeader cartData={cartData} />
            </>
          }
        />
        <Route
          path="/category/:id"
          element={
            <>
              <Header setBookSearch={setBookSearch} cartData={cartData} />
              <div className="main_books">
                <div className="main_books_container">
                  <FilterOption categoryData={categoryData} />
                  {loading ? (
                    <Loading />
                  ) : (
                    <Book
                      filterBookData={filterBookData}
                      setCartData={setCartData}
                    />
                  )}
                </div>
              </div>
              <MobileHeader cartData={cartData} />
            </>
          }
        />
        <Route
          path="/details/:id"
          element={
            <>
              <Header setBookSearch={setBookSearch} cartData={cartData} />

              <DetailBook bookDataId={bookDataId} setBookId={setBookId} />
              <MobileHeader cartData={cartData} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header setBookSearch={setBookSearch} cartData={cartData} />
              <Cart cartData={cartData} setCartData={setCartData} />
              <MobileHeader cartData={cartData} />
            </>
          }
        />

        <Route
          path="/admin/book"
          element={
            <>
              {/* <Header setBookSearch={setBookSearch} cartData={cartData} />
              <Cart cartData={cartData} setCartData={setCartData} />
              <MobileHeader cartData={cartData} /> */}
<main style={{display : pdisplay}}>
<AdminBookDetails setOnclick={setOnclick}    />

</main>
              <div className="main_books">
                <div className="main_books_container">
                  <AdminSidebar />
                  <AdminBook filterBookData={filterBookData} setBookSearch={setBookSearch} setOnclick={setOnclick} />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/admin/category"
          element={
            <>
              {/* <Header setBookSearch={setBookSearch} cartData={cartData} />
              <Cart cartData={cartData} setCartData={setCartData} />
              <MobileHeader cartData={cartData} /> */}

              <div className="main_books">
                
                <div className="main_books_container">
                  
                  <AdminSidebar />
                  <AdminCategory categoryData={categoryData} />
                </div>
              </div>
            </>
          }
        />

      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
