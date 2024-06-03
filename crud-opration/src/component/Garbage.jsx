import React, { useState, useEffect } from "react";
import axios from "axios";

const formObj = {
  firstname: "",
  lastname: "",
};

const Forms3 = () => {
  const [formdata, setFormdata] = useState(formObj);
  const [data, setData] = useState([]);

  const formControl = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData();
      await getData();
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  // postData function
  const postData = async () => {
    try {
      await axios.post("http://localhost:4000/data", formdata);
    } catch (error) {
      console.error("Error posting data: ", error);
    }
  };

  // getData function
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/data");
      setData(res.data);
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };

  return (
    <div>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px",
        }}
      >
        <form
          className="formbox"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            padding: "50px",
          }}
          onSubmit={formSubmit}
        >
          <div className="firstname">
            <label htmlFor="firstname"></label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formdata.firstname}
              onChange={formControl}
            />
          </div>
          <div className="firstname">
            <label htmlFor="lastname"></label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formdata.lastname}
              onChange={formControl}
            />
          </div>
          <div className="btndiv">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="tablebox">
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forms3;
