 
import "./admin.category.css";
import edit from "../../assets/edit.svg";
import remove from "../../assets/delete.svg"; 

const AdminCategory = ({ categoryData }) => {
  console.log(categoryData);
  return (
    <div className="admin_category">
      <div className="admin_category_container">
        <h1>Kategoryalar</h1>
        <div className="admin_category_box">
          {categoryData.map((item) => (
            <div className="admin_category_card" key={item._id}>
         
              <div className="admin_category_card_txt">
              <span>id : {item._id}</span>
<br />
              <span>name : {item.cat_name}</span>
             
              </div>
             
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

export default AdminCategory;
