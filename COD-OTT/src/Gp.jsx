import React, { useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";

const FormObject = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    date: ''
  }
  

function Users() {
  const [drawerOpen, setDrawerOpen] = useState(false); // state for drawer
  const [form, setForm] = useState(FormObject); // state for formData

  // Toggle Drawer
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  // Form Handling
  const HandleForm = (e) => {
    const { name, value } = e.target;  // Correct destructuring
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form Submission
  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  // Edit User (Functionality not implemented in provided code)
  const Edit = () => {};

  // Delete Data (Functionality not implemented in provided code)
  const Remove = () => {};

  return (
    <>
      <div className="main-div" style={{ background: "#ddd", minHeight: "100vh" }}>
        <div className="in-div" style={{ width: "70%", background: "white", margin: "32px auto" }}>
          <h1 style={{ textAlign: "center", fontWeight: 300 }}>USER DETAILS</h1>
          <button
            onClick={toggleDrawer}
            style={{
              border: "none",
              background: "#8407ba",
              color: "white",
              padding: "14px 0px",
              borderRadius: 4,
              minWidth: 130,
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>a</td>
                  <td>b</td>
                  <td>c</td>
                  <td>d</td>
                  <td>
                    <div className="Action-btn-div">
                      <button className="btn" onClick={Edit}>
                        <i className="ri-edit-box-line"></i>
                      </button>
                      <button className="btn" onClick={Remove}>
                        <i className="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* drawer */}
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
            <form className="form" onSubmit={SubmitForm}>
              <div className="form-control">
                <label htmlFor="firstname">FirstName</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={form.firstname}
                  placeholder=""
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                <label htmlFor="lastname">LastName</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={form.lastname}
                  placeholder=""
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  placeholder=""
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={form.password}
                  placeholder=""
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={form.date}
                  placeholder=""
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Users;
