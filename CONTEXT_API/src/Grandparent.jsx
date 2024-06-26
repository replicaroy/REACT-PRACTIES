// Grandparent.js
import React from 'react';
import Parent from './Parent';

const Grandparent = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default Grandparent;





// import React from 'react'
// import Parent from './Parent'

// // const Grandparent = ({isLoggedIn, handLogin, handLogOut}) => {
// const Grandparent = () => {
//   return (
//     <div>
//       {/* <Parent isLoggedIn = {isLoggedIn} handLogin = {handLogin} handLogOut = {handLogOut} /> */}
//       <Parent  />
//     </div>
//   )
// }

// export default Grandparent

// import React from 'react';
// import Parent from './Parent';

// const Grandparent = ({ isLoggedIn, toggleLogin }) => {
//   return (
//     <div>
//       <Parent isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
//     </div>
//   );
// };

// export default Grandparent;

