import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [color, setColor] = useState(false);
  const location = useLocation();

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="logo">
        <h1>AJIO</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className={isActive('/')}>Mens</Link>
          </li>
          <li>
            <Link to="/Women" className={isActive('/Women')}>Womens</Link>
          </li>
          <li>
            <Link to="/Girls" className={isActive('/Girls')}>Girls</Link>
            
          </li>
          <li>
            <Link to="/Kids" className={isActive('/Kids')}>Kids</Link>
          </li>
          <li>
            <Link to="/Trending" className={isActive('/Trending')}>Trending</Link>
          </li>
          <li>
            <Link to="/Sale" className={isActive('/Sale')}>Sale</Link>
          </li>
          <li>
            <Link to="/Blogs" className={isActive('/Blogs')}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="itemss" style={{}}>
      <div className="search">
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="cart" style={{ position: 'relative', display: 'flex', gap:'20px', justifyContent: "center", alignItems: 'center'}}>
      <i class="fa-regular fa-heart" style={{marginRight: '5px'}}></i>
      <i class="fa-solid fa-bag-shopping"></i>
      
        <span className="cart-span" style={{ fontSize: '20px', fontWeight: 'bold', color: 'red', position: 'absolute', top: '-10px', right: '10px' }}>5</span>
      </div>
      <div className="menu" style={{fontSize: '30px'}}>
      <i class="fa-solid fa-bars"></i>
      </div>
      </div>
    </div>
  );
}

export default Navbar;





// import React from "react";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const [color, setColor] = useState(false)

// const changColor = () =>{
// const location = useLocation()
// console.log(location)

//   if(window.scrollY >=100){
//     setColor(true)
//   }
//   else{
//     setColor(false)
//   }
// }

// window.addEventListener('scroll', changColor)


//   return (
//     <div className={color ? 'navbar navbar-bg' : 'navbar'} >
//       <div className="logo">
//         <h1>AJIO</h1>
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>
//             <Link to="/" style={{color: (Location.pathname === Link)? 'white' : 'red' }}> Mens </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Women"> Womens </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Girls"> Girls </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Girls"> Kids </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Girls"> Trending </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Girls"> Sale </Link>{" "}
//           </li>
//           <li>
//             <Link to="/Girls"> Blogs </Link>{" "}
//           </li>
//         </ul>
//       </div>
//       <div className="search">
//         <input type="text" />
//         <i class="fa-solid fa-magnifying-glass"></i>
//       </div>
//       <div className="cart " style={{position:'relative'}}>
//         <i class="fa-solid fa-cart-shopping"></i>
//         <span className="cart-span" style={{fontSize: '20px', fontWeight: 'bold',color: 'red', position: 'absolute', top:'-5px', right: '22px'}}>5</span>
//       </div>
//       <div className="menu ">
//         <i class="fa-solid fa-bars"></i>
      
//       </div>
//     </div>
//   );
// }

// export default Navbar;
