// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Props from './Components/Props';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/men');   
//         const jsonData = await response.json();
//         setData(jsonData);
//         console.log(jsonData)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//     <div className="item-div" >
//       {data.map((user) => (
//         <Props key={user.id} name={user.name} username={user.username} image = {user.image} price={user.price} />
//       ))}
//     </div>
//     </>
//   );
// }

// export default App;




// import React from "react";

// function Props({ image, name, price }) {
//   return (
//     <div >
//      <div className="img-div">
//         <img src={image} alt="" />
//      </div>
//       <h5> {name}</h5>
//       <h3>Price: ${price}</h3>   
//     </div>
//   );    
// }

// export default Props;

// .item-div{
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//  }
