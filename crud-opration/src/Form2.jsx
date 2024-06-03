import React, { useState, useEffect } from "react";
import axios from "axios";
const formObj = {  
  firstname: "", lastname: "", email: "", password: ""};

const Form2 = () => {
  const [formData, setformData] = useState(formObj);
  const [data, setData] = useState([]);
  const [editid, setEditId] = useState(null);

  // handle form input values
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value,  }));
  };

  // handling form sunbmit (submit data/ update data)
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (editid) {
       updateData(editid);
      alert("Form Submitted");
    } else {
       postData();
       setformData(formObj)
    } 
  };

  // send data to database
  const postData = async () => {
    try {
     await axios.post("http://localhost:8080/data/", formData);
     getData()
    } catch (error) {

      console.log(error);
    }
  };

  //get data from database
  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:8080/data/");
      setData(res.data);
    } catch (error) {
      console.log();
    }
  };

  // delete data from table
  const remove = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/data/${id}`);
      getData();
    } catch (error) {}
  };

  // editing data in form
  const Edit = (id) => {
    let select = data.find((ele) => ele.id === id);
    if(select)
    setformData(select);
    // setEditing(true);
    setEditId(id);
  };

  // update edited form data on submit
  const updateData = async (id) => {
    try {
    let res =  await axios.put(`http://localhost:8080/data/${id}`, formData);
    setformData(res.data)
    getData()
    } catch (error) {
      console.error("There was an error updating the data:", error);
    }
    setformData(formObj)
    setEditId(null)
  };

  // side effect function
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="coantainer" style={{display: 'flex', gap: '50px', flexDirection: 'column' ,  minHeight: '100%' , margin: 'auto', marginTop: '50px',}}>    
      <div className="form-div" style={{padding: ' 10px 100px' , borderRadius: '10px' ,  boxShadow: ' 0 0 10px #808080'}}>
      <h1>USER DETAILS</h1> <hr style={{marginBottom: '20px'}} />
        <form onSubmit={HandleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">FirstName</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              id="firstname"
              onChange={HandleForm}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="lastname">LastName</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              id="lastname"
              onChange={HandleForm}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              onChange={HandleForm}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              id="password"
              onChange={HandleForm}
              required
            />
          </div>

          {/* Submit button */}
          <div className="btn-div">
            <button
              type="submit"
              style={{
                background: "black",
                width: "fit-content",
                margin: "20px auto",
                padding: "10px 50px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              {editid ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* table for display data */}
      <div className="table-div">
        <table
          style={{
            width: "100%",
            border: "1px solid #eee",
            borderRadius: "10px",
            boxShadow: '0 0 10px #808080'
            
          }}
        >
          <thead style={{ background: "#478ECC", color: "white" }}>
            <tr className="" style={{ padding: "20px" }}>
              <th style={{ padding: "13px" }}>Sr. No.</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* map table data */}
            {data.map((ele, i) => (
              <tr
                key={i}
                style={{ background: (i + 1) % 2 === 0 ? "#eee" : "white" }}
              >
                <td style={{ padding: "15px" }}>{i + 1}</td>
                <td>{ele.firstname}</td>
                <td>{ele.lastname}</td>
                <td>{ele.email}</td>
                <td>{ele.password}</td>
                <td>
                  {" "}
                  <div
                    className="btn-divv"
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Edit button */}
                    <button
                      onClick={() => Edit(ele.id)}
                      style={{
                        background: "#8AC44B",
                        padding: "5px 0",
                        width: "100px",
                        borderRadius: "5px",
                        color: "black",
                      }}
                    >
                      Edit
                    </button>
                    {/* Delete button */}

                    <button
                      onClick={() => remove(ele.id)}
                      style={{
                        background: "#F04439",
                        padding: "5px 0",
                        width: "100px",
                        borderRadius: "5px",
                        color: "black",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Form2;