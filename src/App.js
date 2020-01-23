import React from 'react';
import {Switch, Route} from "react-router";

import Chat from "./containers/ChatPage/Chat";
import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPalsPage/PenPals";
import NavBar from "./components/Navigation/NavBar/NavBar";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

const App = () => {
  return (
       <section>
           <NavBar />
           <Switch>
               <Route path={'/pen-pals'} exact component={PenPals} />
               <Route path={'/error'} exact component={ErrorPage} />
               <Route path={'/chat'} exact component={Chat} />
               <Route path={'/'} exact component={MainPage} />
           </Switch>
       </section>
  )
};

export default App;
