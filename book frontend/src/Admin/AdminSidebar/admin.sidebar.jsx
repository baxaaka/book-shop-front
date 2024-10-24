import "./admin.sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const AdminSidebar = () => {
  return (
    <div className="admin_sidebar">
      <div className="admin_sidebar_container">
        <div className="admin_sidebar_box">
          <h1></h1>
          <img src={logo} alt="logo" width="50px" />

          <div className="admin_sidebar_card">
            <div className="admin_sidebar_box_text">
              <Link>Home</Link>
              <Link to="/admin/book">Kitob qo`shish</Link>
              <Link to="/admin/category">Kategorya q`oshish</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
