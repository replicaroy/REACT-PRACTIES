import React, { useEffect, useState } from "react";
import axios from "axios";
import Props from "./Props";

function Girls() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      // let res = await axios.get("http://localhost:8000/girls");
      let res = await axios.get("https://render-json-server-a4l5.onrender.com/girls");
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
export default Girls
