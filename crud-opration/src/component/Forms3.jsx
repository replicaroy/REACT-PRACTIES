import React, { useEffect, useState } from 'react'
import axios from 'axios'


// form object-------
const FormObj = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}
const Forms3 = () => {
const [formdata, setFormdata] = useState(FormObj)  // state for form data--
const [data, setdata] = useState([])  // state for form data--
const[edit, setEdit] = useState()

// get Form-data value from input--
const HandleForm = (e) => {
  const {name, value} = e.target;
  setFormdata((prev)=> ({
    ...prev, [name]: value,
}))}

// Form-submit--
const HandleSubmit = async (e) => {
  e.preventDefault()
  if(edit){
   await UpdateData(edit)
  }
  else{
    await postData()
  }
  setFormdata(FormObj)
  getData()
  // setEdit(null)
}

// Post data to db.json --
const postData =  async () =>{
  try {    
    await axios.post('http://localhost:4000/data',formdata)
  } catch (error) {
    
  }
}

// Get data to db.json --
const getData =  async () =>{
  try {
    let res = await axios.get('http://localhost:4000/data')
    setdata(res.data)
    await DeleteData()
  } catch (error) {
    
  }
}

// Delete function --
const DeleteData = async (id) => {
  try {
  await axios.delete(`http://localhost:4000/data/${id}`)    
  getData()
  } catch (error) {
    
  }
}

//Edit function --
const EditData = (id) => {
  let selectedEditId = data.find((ele)=> ele.id === id)
  console.log(selectedEditId);
  setFormdata(selectedEditId)
  setEdit(id)
}

// Update Data after editing --
const UpdateData = async (id) => {
  await axios.patch(`http://localhost:4000/data/${id}`,formdata)

}




useEffect(()=> {
  getData()
},[])

  return (
    <div>
      <div className="main">
        <div className="form-box m-auto w-10 ">
          <form action="" className='flex flex-col gap-3 form-group ' onSubmit={HandleSubmit}>

            <div className="formcontrol ">
              <label htmlFor="firstname"> FirstName    </label>
                <input type="text" name='firstname' id='firstname' value={formdata.firstname}  onChange={HandleForm} />         
            </div>

            <div className="formcontrol">
              <label htmlFor="lastname"> LastName    </label>
                <input type="text" name='lastname' id='lastname' value={formdata.lastname}   onChange={HandleForm}  />         
            </div>

            <div className="formcontrol">
              <label htmlFor="email"> Email    </label>
                <input type="text" name='email' id='email' value={formdata.email}   onChange={HandleForm} />         
            </div>

            <div className="formcontrol">
              <label htmlFor="password"> Password    </label>
                <input type="text" name='password' id='password' value={formdata.password}   onChange={HandleForm} />         
            </div>

            <div className="btn-div">
              <button className="btns px-5 py-2 bg-green-600 text-white rounded-md ">Submit</button>
            </div>
            
          </form>
        </div>
      </div>

      
<table>
  <tr>
    <th>In</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>Password</th>
    <th>Actions</th>
  </tr>
{
  data.map((item, index)=> {
    return(
  <tr key={item.id} style={{background: (index+1)%2 === 0 ? '#eee' : 'white'}}>
    <td>{index+1}</td>
    <td>{item.firstname}</td>
    <td>{item.lastname}</td>
    <td>{item.email}</td>
    <td>{item.password}</td> 
    <td><div className="btn-div flex gap-10 justify-center ">
      <button className="btnn px-4 py-1 bg-green-600 text-white rounded-sm" onClick={()=> EditData(item.id)}>Edit</button>
      <button className="btnn btnn px-4 py-1 bg-red-500 text-white rounded-sm" onClick={()=> DeleteData(item.id)}>Delete</button>
      </div></td> 
  </tr>  

    )
  })
}

</table>


    </div>
  )
}

export default Forms3











// style={{ background: (index + 1) % 2 === 0 ? 'red' : 'gray' }}

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const formObj = {
//   firstname: "",
//   lastname: "",
//   rating : '',
//   price: ''
// };

// const Forms3 = () => {

//   const [formdata, setFormdata] = useState(formObj);
//   const [data, setData] = useState([]);
//   const [alldata, setAlldata]= useState([]);
//   const [editing, setEditing] = useState();
//   const [search, setSearch] = useState([])

//   const formControl = (e) => {
//     const { name, value } = e.target;
//     setFormdata((prev) => ({ ...prev, [name]: value }));
//   };
//   const formSubmit = async (e) => {
//     e.preventDefault();
//     if(editing){
//      await updateData(editing)
//     }
//     else{
//      await postData();
//     }  
//     getData();
//     setFormdata(formObj)
//   };

//   // postdata fun()
//   const postData = async () => {
//     try {
//       await axios.post("http://localhost:4000/data", formdata);
//     } catch (error) {}
//   };

//   // getdata fun()
//   const getData = async () => {
//     try {
//       let res = await axios.get("http://localhost:4000/data");
//       setData(res.data);  
//       setAlldata(res.data);  
//       // console.log(formdata);
//     } catch (error) {}
//   };

//   const Edit  = (id) => {
//     let seletctedData = data.find((ele)=> ele.id === id)
//    if(seletctedData){
//     setFormdata(seletctedData)
//     setEditing(id)
//    }
    
//   }

//   const Remove  = async (id) => {
//     try {
//        await axios.delete(`http://localhost:4000/data/${id}`)
//        await getData()
//     } catch (error) {      
//     }
//   }

//   const updateData = async(id) => {
//     try {
//       await axios.patch(`http://localhost:4000/data/${id}`,formdata) 
//     } catch (error) {      
//     }
//   }  

//   const Rating = ()=>{   
//    const sorted =  alldata.filter((ele)=> ele.rating> 3)   
//    setAlldata(sorted)  
//   }

//   const Price = ()=>{
//     const sorted =  alldata.filter((ele)=> ele.price> 55)    
//     setAlldata(sorted)
//    }
//   const Relevence = ()=>{     
//      setAlldata(data)
//    }

//   //  SEARCH-DATA
//    const handlesearch = (e) => {
//     const value = e.target.value
//     setSearch(value)    
//     SearchData(value)
//    }
  
//    const SearchData =  (value)=>{
//     if(value === ''){
//       setAlldata(data)
//     }
//     else {
//       let filtersearch = alldata.filter((ele)=> ele.firstname.toLowerCase().includes(value))
//       setAlldata(filtersearch)
//     }
//    }

//   useEffect(() => {   
//     getData();
//   }, []);

//   return (
//     <div>
//       <div className="btn-div">
//         <button className="btn" onClick={()=> Rating()} >Rating</button>
//       </div>

//       <div className="btn-div">
//         <button className="btn" onClick={()=> Price()} >Price</button>
//       </div>

//       <div className="btn-div">
//         <button className="btn" onClick={()=> Relevence()} >Relevence</button>
//       </div>

//       <div className="search" style={{display:'flex',  flexDirection: 'column', padding: '20px 20px', width: '30%'}}>
//         <label htmlFor="Search">Search</label>
//         <input type="text" name="search" id="search" value={search} style={{padding: '10px 20px'}} onChange={handlesearch}  /> 
//       </div>
//       <div
//         className="main"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "100px",
//         }}
//       >
//         <form
//           className="formbox"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 20,
//             alignItems: "center",
//             padding: "50px",
//           }}
//         >
//           <div className="firstname">
//             <label htmlFor="firstname"></label>
//             <input
//               type="text"
//               id="firstname"
//               name="firstname"
//               value={formdata.firstname}
//               onChange={formControl}
//             />
//           </div>
//           <div className="firstname">
//             <label htmlFor="lastname"></label>
//             <input
//               type="text"
//               id="lastname"
//               name="lastname"
//               value={formdata.lastname}
//               onChange={formControl}
//             />
//           </div>
//           <div className="firstname">
//             <label htmlFor="rating"></label>
//             <input
//               type="text"
//               id="rating"
//               name="rating"
//               value={formdata.rating}
//               onChange={formControl}
//             />
//           </div>
//           <div className="firstname">
//             <label htmlFor="price"></label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               value={formdata.price}
//               onChange={formControl}
//             />
//           </div>
//           <div className="btndiv">
//             <button onClick={formSubmit}>Submit</button>
//           </div>
//         </form>
//         <div className="tablebox">
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Name</th>
//                 <th>Lastname</th>
//                 <th>Action</th>
//                 <th>Price</th>
//                 <th>Rating</th>
//               </tr>
//             </thead>
//             {alldata.map((item, i) => (
//               <tbody>
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{item.firstname}</td>
//                   <td>{item.lastname}</td>
//                   <td>{item.rating}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <div className="btn-div" style={
//                       { display: 'flex', gap: 20 }
//                     }>
//                       <button className="btns" style={{padding: '2px', width: '70px'}} onClick={()=> Edit(item.id)} >Edit</button>
//                       <button className="btns" style={{padding: '2px', width: '70px'}} onClick={()=> Remove(item.id)} >Remove</button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             ))}
//           </table>          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forms3;

