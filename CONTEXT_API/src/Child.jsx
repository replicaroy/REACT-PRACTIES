// Child.js
import React, { useContext } from 'react';
import { LoginContext } from './App';

const Child = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(LoginContext);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Hello, welcome User !!!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login ...</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Child;



// import React , {createContext, useContext} from 'react';

// import  loginContext  from './App';

// // const Child = ({isLoggedIn, handLogin, handLogOut}) => {
// const Child = () => {
//     const {isLoggedIn, handLogin, handLogOut} = useContext(loginContext)
//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <h2>Hello, welcome User !!!</h2>
//           <button onClick={handLogOut}>Logout</button>
//         </>
//       ) : (
//         <>
//           <h2>Please Login ...</h2>
//           <button onClick={handLogin}>Login</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Child;




// import React from 'react';

// const Child = ({ isLoggedIn, toggleLogin }) => {
//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <h2>Hello, welcome User !!!</h2>
//           <button onClick={toggleLogin}>Logout</button>
//         </>
//       ) : (
//         <>
//           <h2>Please Login ...</h2>
//           <button onClick={toggleLogin}>Login</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Child;

