import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Form = () => {
    const formObj = {
        firstname : '',
        lastname : '',
        email : '',
        password : ''        
    }
    const [formdata, setFormdata] = useState(formObj)
    const [data, setData] = useState([])
    const [editing, setEditing] = useState(false)
    const [updateid, setUpdateid] =  useState()

    const HandleForm = (e) => {
        const { name, value } = e.target;
       
       setFormdata((prev)=>({
        ...prev, [name]: value
       }))       
    }    
    
    const formSubmit =  (e) => {
        e.preventDefault()
        if(editing){
          updateData()  
        getData()
        }
        else{
          postData()   
        getData()
        }        
        setFormdata(formObj)
        getData()
       setEditing(false)   
          }
    
// get data from server-------------------------->
    const getData = async() =>{
        try {
            let res = await axios.get('http://localhost:8080/data')
            setData(res.data)    
           await remove()    
           updateData()          
        } catch (error) {            
        }
    }
// post data to server-------------------------->
    const postData = async() =>{
        try {
            let res = await axios.post('http://localhost:8080/data',formdata)
            console.log(res.data);            
        } catch (error) {            
        }
    }

    // remove data-------------------------->
    const remove = async (id) => {
        await axios.delete(`http://localhost:8080/data/${id}`)
        getData()  
    }

    // edit data-------------------------->
    const edit = (id) => {
        const selecteditid =  data.find((ele)=> ele.id === id)  
        setFormdata(selecteditid)
        setEditing(true)
        setUpdateid(id)
    }
   
    // updateData ----------------------------------------->>>>>>
    const updateData =  async() => {
      let res = await axios.patch(`http://localhost:8080/data/${updateid}`,formdata)
    }
   

    // side effet handle through use-effect-------------------------->

    useEffect(() => {
        getData();
      }, []);
    

    

  return (
    <div className='parent-div'> 
        <div className="form-container">
            <form action="" onSubmit={formSubmit}>
                <div className="form-control">
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" name='firstname' id='firstname' value={formdata.firstname} onChange={HandleForm} required />
                </div>

                <div className="form-control">
                    <label htmlFor="lastname">lastname</label>
                    <input type="text" name='lastname' id='lastname' value={formdata.lastname} onChange={HandleForm} required />
                </div>

                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' id='email' value={formdata.email} onChange={HandleForm} required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type="password" name='password' id='password' value={formdata.password} onChange={HandleForm} required />
                </div>
                
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
            {editing? 'Update' : 'Submit'} 
               
            </button>
          </div>
               
            </form>
        </div>

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
                      onClick={() => edit(ele.id)}
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
  )
}

export default Form
