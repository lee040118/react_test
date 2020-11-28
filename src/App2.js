import React, {useState, useEffect} from "react";
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';
function App2(){
    
    return(
       <HashRouter>
           <Navigation /> 
           <Route path="/" exact={true} component={Home} />
           <Route path='/about' component={About} />
       </HashRouter>
      
    );
}
export default App2