import React,{Component} from 'react';
import Login from './components/Login';
import Register from './components/Register';
//import Demo1 from './components/Demo1';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);
const App =() =>{
  return(
    <div>
      <BrowserRouter>
     <Switch>
     <Route exact path="/" component ={Login}/>
     <Route exact path="/login" component ={Login}/>
     <Route exact path="/register" component ={Register}/>
     </Switch>  
      <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}
export default App;


