import "./filter.option.css";
import { Link } from "react-router-dom";

const FilterOption = ({ categoryData }) => {
  return (
    <div className="filter_option">
      <div className="filter_option_container">
        <div className="filter_option_box">
          <h1>Kategoryalar</h1>
          <div className="filter_option_card">
            <div className="filter_option_box_text">
              <Link to="/books">
                Barchasini ko`rsatish
              </Link>
            </div>
            {categoryData.map((item) => (
              <div key={item._id} className="filter_option_box_text">
                <Link to={`/category/${item._id}`}>
                  {item.cat_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="filter_option_box">
          <h1>Mualliflar</h1>
          <div className="filter_option_card">
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
