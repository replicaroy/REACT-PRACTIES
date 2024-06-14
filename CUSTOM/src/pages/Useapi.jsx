import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const Useapi = (url)=> {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async ()=>{
        try {
            setLoading(true);
            const res = await axios.get(url)
            setData(res.data)
            setLoading(false)

            log(data)            
        } catch (error) {
         
        } 
    }
    useEffect(()=>{
        getData()
    },[url])
    return {data, loading}
}

export default Useapi;
























// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from "axios"

// const Useapi = (url) => {
// const[data,setData] = useState([])

// const getdata=async()=>{
//   try {
//    let res=  await axios.get(url)
//     setData(res.data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// const deldata=async(id)=>{
// try {
//     let res = await axios.delete(`${url}/${id}`)
//     alert("deleted")
// } catch (error) {
//     console.log(error);
// }
// }

// useEffect(()=>{
//     getdata()
// },[url])



//   return {data,getdata,deldata}


// }

// export default Useapi
