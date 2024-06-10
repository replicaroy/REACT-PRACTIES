import React, { useState } from "react";
import './student.css'
import "remixicon/fonts/remixicon.css";

const FormObject = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  date: ""
};

function Students() {
  const [drawerOpen, setDrawerOpen] = useState(false); // state for drawer
  const [formdata, setFormData] = useState(FormObject); // state for formData
  const [data, setData] = useState([]); // state for data list
  const [editIndex, setEditIndex] = useState(null); // state for tracking edit index

  // Toggle Drawer
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  // Handle form input changes
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const SubmitForm = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Updating existing data
      const updatedData = [...data];
      updatedData[editIndex] = formdata;
      setData(updatedData);
      setEditIndex(null); // Reset edit index
    } else {
      // Adding new data
      setData((prev) => [...prev, formdata]);
    }
    setFormData(FormObject); // Reset form data
    toggleDrawer(); // Close drawer after submit
  };

  // Edit user
  const Edit = (index) => {
    setFormData(data[index]);
    setEditIndex(index); // Set edit index
    toggleDrawer(); // Open drawer
  };

  // Remove user
  const Remove = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
  <div className="students">
    <div className="main-div" style={{ background: "#ddd", minHeight: "100vh" }}>
      <div className="in-div" style={{ width: "70%", background: "white", margin: "32px auto" }}>
        <h1 style={{ textAlign: "center", fontWeight: 300 }}>USER DETAILS</h1>
        <button
          onClick={() => {
            toggleDrawer();
            setFormData(FormObject);
            setEditIndex(null); // Reset form and edit index for new entries
          }}
          style={{
            border: "none",
            background: "#8407ba",
            color: "white",
            padding: "14px 0px",
            borderRadius: 4,
            minWidth: 130,
            margin: "0 50px"
          }}
        >
          <i className="fa-solid fa-user-plus" style={{ marginRight: "10px", fontSize: 17 }}></i>
          Add User
        </button>

        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.date}</td>
                  <td>
                    <div className="Action-btn-div">
                      <button className="btn" onClick={() => Edit(index)}>
                        <i className="ri-edit-box-line"></i>
                      </button>
                      <button className="btn" onClick={() => Remove(index)}>
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drawer for form */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: drawerOpen ? 0 : -460,
          width: "450px",
          background: "white",
          height: "100%",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          padding: "32px",
          transition: "all .4s ease",
        }}
      >
        <div
          onClick={toggleDrawer}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            padding: 20,
            fontSize: 35,
          }}
        >
          <i className="fa-solid fa-x"></i>
        </div>

        <div className="form-box">
          <h1>{editIndex !== null ? "Edit User" : "New User"}</h1>
          <form onSubmit={SubmitForm}>
            <div className="form-control">
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formdata.firstname}
                placeholder="FirstName"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formdata.lastname}
                placeholder="LastName"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                id="email"
                value={formdata.email}
                placeholder="Email"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="password"
                id="password"
                value={formdata.password}
                placeholder="Password"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <input
                type="date"
                name="date"
                id="date"
                value={formdata.date}
                placeholder="Date"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <button className="submit-btn" type="submit">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </aside>
    </div>
    </div>
  );
  
}


export default Students;