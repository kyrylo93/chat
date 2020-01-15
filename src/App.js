import React from 'react';
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import {Switch, Route} from "react-router";
import MainPage from "./containers/MainPage/MainPage";

import './App.css';



const App = () => {
  return (
   <section>
       <Toolbar></Toolbar>
       <Switch>
           <Route path={'/'} exact component={MainPage} />
       </Switch>
   </section>
  )
};

export default App;
