 
// import eye from "../../assets/eye.svg";
// import add from "../../assets/add.svg";

import { useState } from "react";

// import edit from "../../assets/edit.svg";
import cancel from "../../assets/cancel.svg";
// import { Link } from "react-router-dom";
 

const AdminBookDetails = ( {setOnclick ,pdisplay}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming your API endpoint is '/api/submit'
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Optionally reset form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const [bookClose , setBookClose] =useState(Boolean)
 
  if(bookClose==false){
    setOnclick(false)
  }
console.log(bookClose);
  return (
    <div className="admin_book_details" >
      <div className="admin_book_details_container">
        <img src={cancel}  alt=""  onClick={()=>setBookClose(false)} />
      <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
  );
};

export default AdminBookDetails;
