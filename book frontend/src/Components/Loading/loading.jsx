import "./loading.css";

const Loading = () => {
  return (
    <div className="book_loader">
      <div className="book_loader_container">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
