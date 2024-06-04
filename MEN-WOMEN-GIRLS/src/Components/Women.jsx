import React, { useEffect, useState } from "react";
import Props from "./Props";
import axios from "axios";

function Women() {
    const [data, setData] = useState([]);
    const getData = async () => {
      try {
        // let res = await axios.get("http://localhost:8000/women");
        let res = await axios.get("https://render-json-server-a4l5.onrender.com/women");
        setData(res.data);
        console.log(data);
      } catch (error) {}
    };
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <div>
        <Props data={data} />
      </div>
    );
  }

export default Women
