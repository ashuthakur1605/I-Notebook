// import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import login from './background/login.jpg'
import { About } from './component/About';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/Notestate';
import Alert from './component/Alert';
import Singup from './component/Singup';
import Login from './component/Login';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    
    
    <NoteState>

      <Router>
        
        <Navbar />
      <div  style={{backgroundImage:`url(${login})` , opacity:1} }>
        <div className="container " >
        <Alert alert={alert}/>
  
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert}/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/singup">
              <Singup showAlert={showAlert} />
            </Route>

          </Switch>
    </div>
        </div>

      </Router>
    </NoteState>
  );
}

export default App;
