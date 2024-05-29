import React, { useState } from "react";

function Users() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

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
          <h1 style={{ textAlign: "center" }}>CRUD</h1>
          <button
            onClick={toggleDrawer}
            style={{
              border: "none",
              background: "#8407ba",
              color: "white",
              padding: "14px 0px",
              borderRadius: 4,
              minWidth: 130
            }}
          >
            <i
              className="fa-solid fa-user-plus"
              style={{ marginRight: "10px", fontSize: 17 }}
            ></i>
            Add User
            {/* {drawerOpen ? "Close" : "Add User"} */}
          </button>
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
            transition: 'all .4s ease'
          }}
        >
          <h2>My Drawer</h2>
          <div    onClick={toggleDrawer} 
          style={{ 
            position: 'absolute', right: 10, top: 10, padding: 20, fontSize: 35
          }}>
            <i class="fa-solid fa-x"></i>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Users;
