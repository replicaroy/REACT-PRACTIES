import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AlertLineIcon from 'remixicon-react/AlertLineIcon';
// import AlertFillIcon from 'remixicon-react/AlertFillIcon';


function App() {
  const [data, setData] = useState([]);             // 
  const [alldata, setallData] = useState([]);
  const [search, setSearch] = useState();           // state for search
  // const [size, setsize] = useState('-290px')
  const [filterRatings, setFilterRatings] = useState([]);
  const [filterPrices, setFilterPrices] = useState([]);
  console.log(alldata);

  // receive data through API---------------->
  const getData = async () =>{
    let res = await axios.get('https://fakestoreapi.com/products')
    setData(res.data)
    setallData(res.data)
  }

  // side effect fun. for API---------------->
  useEffect(()=>{
    getData()
  },[])


  // Search fun(---------------->
   const handleSearch = (e) => {
      const value = e.target.value;
      console.log(value);
      setSearch(value);
      searchFun(value)
   }  
   const  searchFun = (value) => {
    if(value === ''){
      setallData(data)
    }
   else {
      let searchValue = alldata.filter((ele)=> ele.title.toLowerCase().includes(value))
      setallData(searchValue)
    }
   }


  // Sort by Price fun(------------------------>
   const price = () => {
    let filterPrice = alldata.filter((ele)=> ele.price> 50 )
    setallData(filterPrice)
    setFilterPrices(filterPrice)
   }


  // Sort by Rating fun(------------------------>    
   const rating = () => {
   const filterRating = alldata.filter((ele)=> ele.rating.rate > 3 )
    setallData(filterRating)
    setFilterRatings(filterRating)   
   }
  

  // Sort by Relevence fun(------------------------>
   const relevence = () => {
    setallData(data) 
    setFilterPrices('')
    setFilterRatings('')       
   }





    // ---------------------------------------->
  return (
    <>
    <div className="navbar">
      <h4>jam ke Shoping karo, up to 90% off !! usecode- 'REX90</h4>
      <div className="data-value-btn">
        <button className="data-valule-btn">AllDATA COUNT: {data.length}</button>
        <button className="data-valule-btn">PRICE DATA: {filterPrices.length} </button>
        <button className="data-valule-btn">RATING DATA: {filterRatings.length} </button>
      </div>
    </div>

<div className="container">
  

    <div className="sidebar">
    
  <div className="search">
    <input type="text" name='search' id='search' value={search} onChange={handleSearch} placeholder='Serch Products'/>
    <i class="ri-search-line searchicon"></i>
  </div>
  <div className="sort">
    <button className='btn'onClick={relevence}>Relevence</button>
    <button className='btn'onClick={price}>Sort-By-Price</button>
    <button className='btn'onClick={rating}>Sort-By-Rating</button>
  </div>
    </div>
<div className="main-one">
<div className="menu-div">
    <i class="ri-menu-line menu"></i>
      </div>

    <div className="main "   >  
{  alldata.map((ele) => (
    <div key={ele.id} className='items'> 
    <div> <img src={ele.image} alt=""  style={{width: '100%', height: '300px'}} />  </div>
    <div>{ele.title.slice(0,25) + '...'}</div>    
    <div className="price-rating">
    <div className='price'>Rs.  {ele.price}</div>
    <div> <span className='rating'> rating </span> {ele.rating.rate}</div>
    </div>
    {/* <div>{ele.description.slice(0,40) + '...'}</div> */}
    </div>
  )) }
  </div>
  </div>
  </div>
      
    </>
  )
}

export default App
