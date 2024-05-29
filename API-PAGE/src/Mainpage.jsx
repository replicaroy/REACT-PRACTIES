import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './Loading';


function Mainpage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getApi() {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
      setLoading(false); // Set loading to false after data is fetched
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();

  }, []);

  return (
    <section>
      <main className="mian-page">
        <div className="heading">
        <h2>Find your Shopping destination</h2>
        <p>Pick a vibe and explore the top Products from <span> Sopping.com</span></p>
        </div>
        {loading ? ( // Render loading indicator if loading is true
          <Loading/>
        ) : (
          <div className="products-div">
            {data.map((item) => (
              <div className="item-div" key={item.id}>
                <div className="img-div">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.title.slice(0, 24) + ''}</p>
                {/* <h5 >{item.description.slice(0,30)+'...'}</h5> */}
                <h4>Price : ${item.price}</h4>
                <div className="btn-div">
                  <button className="btn btn1">Add to Cart</button>
                  <button className="btn btn2">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </section>
  );
}

export default Mainpage;
