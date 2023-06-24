import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { NavbarSimpleColored } from './Components/Navbar';
import { useState } from 'react';
import { AuthenticationForm } from './Pages/Auth';

function App() {

const [state,setstate]=useState(true)



  return (
    <div className="App">
   <AllRoutes/>
    </div>
  );
}

export default App;
