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
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// importnp 

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
    
    </>
  );
};

export default App;
