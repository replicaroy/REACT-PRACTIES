// App.js
import { useState, createContext } from 'react';
import './App.css';
import Grandparent from './Grandparent';

// Create the context
export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('Hi user, welcome');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Bye user, see you later');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      <Grandparent />
    </LoginContext.Provider>
  );
}

export default App;



// import { useState, createContext } from 'react'
// import './App.css'
// import Grandparent from './Grandparent'

// export const loginContext = createContext()

// function App() {
//   const [isLoggedIn, setIsLoggedIn]= useState(false);

//   const handLogin = ()=>{
//     setIsLoggedIn(true)
//     alert('Hi user, welcome')
    
//   }
//   const handLogOut = ()=>{
//     setIsLoggedIn(false)
//     alert('by User, see u later')
//   }
  
//   // const Function = ()=>{
//   //   console.log('i am function');
//   // }


//   return (
//     <loginContext.Provider value={{isLoggedIn, handLogOut, handLogin}}>
//     <>
//     {/* <Grandparent Function = {Function}/> */}
//     {/* <Grandparent isLoggedIn = {isLoggedIn} handLogin = {handLogin} handLogOut = {handLogOut} /> */}
//     <Grandparent />
//     </>
//     </loginContext.Provider>
//   )
// }

// export default App



// import { useState } from 'react';
// import './App.css';
// import Grandparent from './Grandparent';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(prevState => !prevState);
//     alert(isLoggedIn ? 'Logged out' : 'Logged in');
//   };

//   return (
//     <>
//       <Grandparent isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
//     </>
//   );
// }

// export default App;
