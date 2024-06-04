import React, { useEffect, useState } from "react";
import axios from "axios";

const formObj = {
  firstname: "",
  lastname: "",
  rating : '',
  price: ''
};

const Forms3 = () => {

  const [formdata, setFormdata] = useState(formObj);
  const [data, setData] = useState([]);
  const [alldata, setAlldata]= useState([]);
  const [editing, setEditing] = useState();
  const [search, setSearch] = useState([])

  const formControl = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if(editing){
     await updateData(editing)
    }
    else{
     await postData();
    }  
    getData();
    setFormdata(formObj)
  };

  // postdata fun()
  const postData = async () => {
    try {
      await axios.post("http://localhost:4000/data", formdata);
    } catch (error) {}
  };

  // getdata fun()
  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:4000/data");
      setData(res.data);  
      setAlldata(res.data);  
      // console.log(formdata);
    } catch (error) {}
  };

  const Edit  = (id) => {
    let seletctedData = data.find((ele)=> ele.id === id)
   if(seletctedData){
    setFormdata(seletctedData)
    setEditing(id)
   }
    
  }

  const Remove  = async (id) => {
    try {
       await axios.delete(`http://localhost:4000/data/${id}`)
       await getData()
    } catch (error) {      
    }
  }

  const updateData = async(id) => {
    try {
      await axios.patch(`http://localhost:4000/data/${id}`,formdata) 
    } catch (error) {      
    }
  }  

  const Rating = ()=>{   
   const sorted =  alldata.filter((ele)=> ele.rating> 3)   
   setAlldata(sorted)  
  }

  const Price = ()=>{
    const sorted =  alldata.filter((ele)=> ele.price> 55)    
    setAlldata(sorted)
   }
  const Relevence = ()=>{     
     setAlldata(data)
   }

  //  SEARCH-DATA
   const handlesearch = (e) => {
    const value = e.target.value
    setSearch(value)    
    SearchData(value)
   }
  
   const SearchData =  (value)=>{
    if(value === ''){
      setAlldata(data)
    }
    else {
      let filtersearch = alldata.filter((ele)=> ele.firstname.toLowerCase().includes(value))
      setAlldata(filtersearch)
    }
   }

  useEffect(() => {   
    getData();
  }, []);

  return (
    <div>
      <div className="btn-div">
        <button className="btn" onClick={()=> Rating()} >Rating</button>
      </div>

      <div className="btn-div">
        <button className="btn" onClick={()=> Price()} >Price</button>
      </div>

      <div className="btn-div">
        <button className="btn" onClick={()=> Relevence()} >Relevence</button>
      </div>

      <div className="search" style={{display:'flex',  flexDirection: 'column', padding: '20px 20px', width: '30%'}}>
        <label htmlFor="Search">Search</label>
        <input type="text" name="search" id="search" value={search} style={{padding: '10px 20px'}} onChange={handlesearch}  /> 
      </div>
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
          <div className="firstname">
            <label htmlFor="rating"></label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formdata.rating}
              onChange={formControl}
            />
          </div>
          <div className="firstname">
            <label htmlFor="price"></label>
            <input
              type="text"
              id="price"
              name="price"
              value={formdata.price}
              onChange={formControl}
            />
          </div>
          <div className="btndiv">
            <button onClick={formSubmit}>Submit</button>
          </div>
        </form>
        <div className="tablebox">
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Action</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
            </thead>
            {alldata.map((item, i) => (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.rating}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="btn-div" style={
                      { display: 'flex', gap: 20 }
                    }>
                      <button className="btns" style={{padding: '2px', width: '70px'}} onClick={()=> Edit(item.id)} >Edit</button>
                      <button className="btns" style={{padding: '2px', width: '70px'}} onClick={()=> Remove(item.id)} >Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>          
        </div>
      </div>
    </div>
  );
};

export default Forms3;



     //  const handlesearch = (e) => {
  //   setSearchvalue(e.target.value)
  //   console.log(searchvalue);
  //   Search(searchvalue)
  //  }
 
  //  const Search = (searchvalue) => {
  //   const seardata = alldata.filter((item)=> item.firstname.toLowerCase().includes(searchvalue))
  //   setAlldata(seardata)
  //   console.log(seardata);
  //  }

  //  const handlesearch = (e) => {
  //   const value = e.target.value.toLowerCase();
  //   setSearchvalue(value);
  //   Search(value);
  // };
  
  // const Search = (value) => {
  //   const searchdata = data.filter((ele) => ele.firstname.toLowerCase().includes(value));
  //   setAlldata(searchdata);
  // };