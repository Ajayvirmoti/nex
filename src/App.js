// // src/App.js
// import React, { useState } from 'react';
// import ChatApp from './Components/ChatApp';

// const App = () => {


//   return (
//     <div>
//       <ChatApp />
//     </div>
//   );
// };

// export default App;


// App.js
import React from 'react';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginForm from './Components/LoginForm/LoginForm';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default App;
