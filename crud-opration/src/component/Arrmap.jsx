import React, { useState } from "react";

const procucts = [
  { id: 1, name: "one", rating: 2 },
  { id: 1, name: "two", rating: 3 },
  { id: 1, name: "three", rating: 4 },
  { id: 1, name: "four", rating: 3 },
  { id: 1, name: "five", rating: 5 },
  { id: 1, name: "six", rating: 6 },
  { id: 1, name: "seven", rating: 3 },
  { id: 1, name: "eight", rating: 2 },
];
const Arrmap = () => {
  const [data, setData] = useState(procucts);
  const [normal, filterd] = useState(false);

  // const filter = ()=>{
  //     let filterval = data.filter((item)=> item.rating>4)
  //     setData(filterval)
  // }
  // const Nofilter = ()=>{
  //     setData(procucts)
  // }

const filter = () => {
    if(normal)setData(procucts)
        else{
            const newfilterval =data.filter((item)=> item.rating>4)
            setData(newfilterval)
        }
        filterd(!normal)
}

  return (
    <div>
      <button onClick={filter}> {normal? ' noraml' : 'filter'}</button>
      {/* <button onClick={Nofilter}>filter</button> */}
      <div className="main" style={{ display: "flex", gap: 20 }}>
        {" "}
        <br /> <br />
        {data.map((ele, i) => (
          <div className="item-div" key={i} style={{ border: "1px solid" }}>
            <p>{ele.id}</p>
            <p>{ele.name}</p>
            <p>{ele.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrmap;