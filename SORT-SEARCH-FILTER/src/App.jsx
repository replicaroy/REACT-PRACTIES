import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [alldata, setallData] = useState([]);
  const [search, setSearch] = useState(); // state for Search
  const [filterRatings, setFilterRatings] = useState([]); // state for Rating
  const [filterPrices, setFilterPrices] = useState([]); // state for Price
  console.log(alldata);

  // receive data through API---------------->
  const getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setallData(res.data);
  };

  // side effect fun. for API---------------->
  useEffect(() => {
    getData();
  }, []);

  // Search fun(---------------->
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearch(value);
    searchFun(value);
  };
  const searchFun = (value) => {
    if (value === "") {
      setallData(data);
    } else {
      let searchValue = alldata.filter((ele) =>
        ele.title.toLowerCase().includes(value)
      );
      setallData(searchValue);
    }
  };

  // Sort by Price fun(------------------------>
  const price = () => {
    let filterPrice = alldata.filter((ele) => ele.price > 50);
    setallData(filterPrice);
    setFilterPrices(filterPrice);
  };

  // Sort by Rating fun(------------------------>
  const rating = () => {
    const filterRating = alldata.filter((ele) => ele.rating.rate > 3);
    setallData(filterRating);
    setFilterRatings(filterRating);
  };

  // Sort by Relevence fun(------------------------>
  const relevence = () => {
    setallData(data);
    setFilterPrices("");
    setFilterRatings("");
  };

  // Return  ---------------------------------------->
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://thumbs.dreamstime.com/b/shopping-bag-logo-design-icon-online-shop-symbol-vector-illustrations-discount-flat-sales-digital-commerce-store-simple-marketing-157881334.jpg" alt="" style={{ width: 50, borderRadius: 100, margin: 10 }}
          />
        </div>
        <h4 className="tagline">jam ke Shoping karo, up to 90% off !! usecode- 'REX90</h4>
        <div className="data-value-btn">
          <button className="data-valule-btn">
            AllDATA COUNT: {data.length}
          </button>
          <button className="data-valule-btn">
            PRICE DATA: {filterPrices.length}{" "}
          </button>
          <button className="data-valule-btn">
            RATING DATA: {filterRatings.length}{" "}
          </button>
        </div>
      </div>

      <div className="container">
        <div className="sidebar">
          <div className="search">
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={handleSearch}
              placeholder="Serch Products"
            />
            <i class="ri-search-line searchicon"></i>
          </div>
          <div className="sort">
            <button className="btn" onClick={relevence}>
              Relevence
            </button>
            <button className="btn" onClick={price}>
              Sort-By-Price
            </button>
            <button className="btn" onClick={rating}>
              Sort-By-Rating
            </button>
          </div>
        </div>

        <div className="main ">
          {alldata.map((ele) => (
            <div key={ele.id} className="items">
              <div>
                {" "}
                <img
                  src={ele.image}
                  alt=""
                  style={{ width: "100%", height: "300px" }}
                />{" "}
              </div>
              <div>{ele.title.slice(0, 25) + "..."}</div>
              <div className="price-rating">
                <div className="price">Rs. {ele.price}</div>
                <div>
                  {" "}
                  <span className="rating"> rating </span> {ele.rating.rate}
                </div>
              </div>
              {/* <div>{ele.description.slice(0,40) + '...'}</div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
