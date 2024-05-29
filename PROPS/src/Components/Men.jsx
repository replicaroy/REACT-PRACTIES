import React, { useEffect, useState } from "react";
import axios from "axios";
import Props from "./Props";
import { useSearchParams } from "react-router-dom";

function Men(e) {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      // let res = await axios.get("http://localhost:8000/men");
      let res = await axios.get("https://render-json-server-a4l5.onrender.com/men");
      setData(res.data);
    } catch (error) {}
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Props data={data} />
    </div>
  );
}

export default Men;
