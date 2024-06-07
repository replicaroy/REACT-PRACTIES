import React, { useEffect, useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";


const FormObject = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  date: ""
};

function Users() {
  const [drawerOpen, setDrawerOpen] = useState(false); // state for drawer --
  const [formdata, setFormData] = useState(FormObject); // state for formData --
  const [data, setData] = useState([])

  // Toggle Drawer ----
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  // FormHandling ----
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // FormHandling ----
  const SubmitForm = (e) => {
    e.preventDefault();
    setData((prev)=> [...prev, formdata])
    console.log(data);
    console.log(formdata);
    // setFormData(FormObject)
  
  };

  // Edit User -----
  const Edit = (item) => {
    alert(JSON.stringify(item))
    setFormData(item)
  };

  // Delete Data ----
  const Remove = (id) => {
    const after_RemoveDAta = [...data]
   let dels = after_RemoveDAta.splice(id, 1)
   console.log(after_RemoveDAta);  
   setData(after_RemoveDAta)
  };


  return (
    <>
      <div
        className="main-div"
        style={{ background: "#ddd", minHeight: "100vh" }}
      >
        <div
          className="in-div"
          style={{ width: "70%", background: "white", margin: "32px auto" }}
        >
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
              margin: '0 50px '
            }}
          >
            <i
              className="fa-solid fa-user-plus"
              style={{ marginRight: "10px", fontSize: 17 }}
            ></i>
            Add User
            {/* {drawerOpen ? "Close" : "Add User"} */}
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

                {
                  data.map((item, index)=> {
                    return (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.date}</td>
              
                    <td>
                      <div className="Action-btn-div">
                        <button className="btn" onClick={ ()=> Edit(item)}>
                          <i class="ri-edit-box-line"></i>
                        </button>
                        <button className="btn" onClick= { ()=> Remove(index)}>
                          <i class="ri-delete-bin-6-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                    )
                  })
                }
              
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
          {/* <h2>My Drawer</h2> */}
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
            <i class="fa-solid fa-x"></i>
          </div>

          <div className="form-box">
              <h1>New Student</h1>
            <form  onSubmit={SubmitForm}>
              <div className="form-control">
                {/* <label htmlFor="firstname"> FirsName</label> */}
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
                {/* <label htmlFor="lastname"> LastName</label> */}
                <input
                  type="text"data
                  name="lastname"
                  id="lastname"
                  value={formdata.lastname}
                  placeholder="LastName"
                  onChange={HandleForm}
                />
              </div>

              <div className="form-control">
                {/* <label htmlFor="email"> Email</label> */}
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
                {/* <label htmlFor="password">Password</label> */}
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
                {/* <label htmlFor="date">Date</label> */}
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
                <button className="submit-btn" type="submit" onClick={toggleDrawer}>
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
