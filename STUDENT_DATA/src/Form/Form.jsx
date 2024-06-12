import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";

const StudentObject = {
  name: "",
  fname: "",
  subject: "",
  phone: "",
};

const Form = () => {
  const [form, setForm] = useState(StudentObject);
  const [students, setStudents] = useState([]);
  const [edit, setEdit] = useState();

  // Hamd;e form data-----------
  const HandleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit-----------
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.fname || !form.subject || !form.phone) {
      alert("Please fill all fields");
      return;
    }
    if (edit) {
      await UpdateData(edit); 
      alert('Student Data edited Successfully')
    } else {
      await postData(); 
      alert('Student Data submitted Successfully')

    }
    setForm(StudentObject);
    setEdit(null);
  };

  // Post data to server---------
  const postData = async () => {
    try {
      await axios.post(
        "https://render-json-server-a4l5.onrender.com/studends",
        form
      );
      await getData(); 
    } catch (error) {
      console.error("Something Error", error);
    }
  };

  // Get data from server------------
  const getData = async () => {
    try {
      let res = await axios.get(
        "https://render-json-server-a4l5.onrender.com/studends"
      );
      setStudents(res.data);
    } catch (error) {
      console.error("Something Error", error);
    }
  };

  // Remove student------------
  const Remove = async (id) => {
    try {
      await axios.delete(`https://render-json-server-a4l5.onrender.com/studends/${id}` );
      await getData(); 
    } catch (error) {
      console.error("Something Error", error);
    }
  };

  // Edit student ------------
  const Edit = (id) => {
    const EditStudent = students.find((student) => student.id === id);
    if (EditStudent) {
      setForm(EditStudent);
      setEdit(id); 
    }
  };

  // Update student data ----------
  const UpdateData = async (id) => {
    try {
      await axios.put( `https://render-json-server-a4l5.onrender.com/studends/${id}`,form );
      await getData(); 

    } catch (error) {
      console.error("Something Error", error);
    }
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="form-container">
      <div className="table">
        <h1>Student Details</h1>
        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              {/* <th>Father Name</th> */}
              <th>Course</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                {/* <td>{student.fname}</td> */}
                <td>{student.subject}</td>
                <td>{student.phone}</td>
                <td>
                  <div className="Action-btn-div">
                    <button className="btn" onClick={() => Edit(student.id)}>
                      <i className="ri-edit-box-line"></i>
                    </button>
                    <button className="btn" onClick={() => Remove(student.id)}>
                      <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form">
        <h1 style={{ color: edit ? 'lightseagreen' : '#0071f2' }}>  {edit? 'Edit Student': 'Student Registration' } </h1>
        <form onSubmit={HandleSubmit}>
          <div className="input-area">
            <div className="form-control">
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Full Name"
                onChange={HandleForm}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="fname"
                value={form.fname}
                placeholder="Father's Name"
                onChange={HandleForm}
              />
            </div>
            <div className="form-control">
              <select
                name="subject"
                className="select"
                value={form.subject}
                onChange={HandleForm}
              >
                <option value="">Select Subject</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>

            <div className="form-control">
              <input
                type="number"
                name="phone"
                value={form.phone}
                placeholder="Phone"
                onChange={HandleForm}
              />
            </div>
            <div className="form-control">
              <button type="submit" className="sub-btn"   style={{ background: edit ? 'lightseagreen' : '#0071f2' }}  >
                {edit !== null ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
