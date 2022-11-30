import "./App.css";
import MenuIcon from '@mui/icons-material/Menu';
import Home from "./pages/Home";
import {React,useState} from 'react';
import Spare from "./components/error/Spare";

function App() {
  const [show, setShow] = useState(true);
  
  return (
    <div className="main">
      {
        show?<Home/>:<Spare/>
      }
      
  
      <MenuIcon className="one-icon" onClick={()=>setShow(!show)} />
       
    </div>
  );
}

export default App;
