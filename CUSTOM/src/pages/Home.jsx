import React from 'react'
import Useapi from './Useapi'

const Home = () => {
    const{data,getdata}=Useapi("https://fakestoreapi.com/carts")
    console.log(data,"1236554");
  return (
    <div>
      {data.map((ele)=>{
return(
    <div>
        <div key={ele.id}>
            <div className="h4">{}</div>
            <div className="h4">{ele.date}</div>
            <div className="h4">{ele.products[0].quantity}</div>
        </div>
        {/* <button onClick={()=>deldata(ele.id)}>click</button> */}
    </div>
)
      })}
    </div>
  )
}

export default Home
