import React from 'react'
import Useapi from './Useapi';

const About = () => {
    const{data,loading}=Useapi("https://fakestoreapi.com/users")
    console.log(data,"about");
    if(loading) return <p>loading....................</p>
  return (
    <div>
      {data.map(ele=>(
        <div key={ele.id}>
            <div className="h4">{ele.name.firstname}</div>
            <div className="h4">{ele.email}</div>
        </div>
      ))}

    </div>
  )
}

export default About
