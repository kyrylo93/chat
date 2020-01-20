import React from 'react';
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import {Switch, Route} from "react-router";

import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPals/PenPals";

import './App.css';



const App = () => {
  return (
   <section>
       <Toolbar></Toolbar>
       <Switch>
           <Route path={'/pen-pals'} exact component={PenPals} />
           <Route path={'/'} exact component={MainPage} />
       </Switch>
   </section>
  )
};

export default App;
