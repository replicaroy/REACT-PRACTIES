import React, { useState } from 'react';

const obj = {
  name: '',
  phone: '',
  email: '',
  pass: ''
};

const Shodata = () => {  
  const [data, setData] = useState({...obj}) ;


  const handlchange = (e) => {
    const {id, value} = e.target;
    setData({...data, [id]:value})  
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(obj)
  };

  return (
    <div>
      <div className="form-container">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" value={data.name} placeholder='First Name' id='name' onChange={handlchange} />
            </div>

            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input type="text" value={data.phone} placeholder='Phone' id='phone' onChange={handlchange} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" value={data.email} placeholder='Enter Email' id='email' onChange={handlchange} />
            </div>

            <div className="form-control">
              <label htmlFor="pass">Password</label>
              <input type="password" value={data.pass} placeholder='Enter Password' id='pass' onChange={handlchange} />
            </div>

            <div className="btn-div">
              <button className="btn">Register</button>
            </div>
          </div>    
        </form>
      </div>
    </div>
  );
};

export default Shodata;

