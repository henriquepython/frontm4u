import React from 'react';
import './App.css';
//import Router from "./Routes/routes"
import Login from "./pages/Login"
import Student from "./pages/cadastro"


 const App = () => {
   return ( 
   <div>
      <Login />
      <Student id="cad" />
   </div>

 
   );
}

export default App;

