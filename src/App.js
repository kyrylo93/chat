import React from 'react';
import {Switch, Route} from "react-router";

import Chat from "./containers/ChatPage/Chat";
import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPalsPage/PenPals";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

const App = () => {
  return (
       <section>
           <Toolbar />
           <Switch>
               <Route path={'/chat'} exact component={Chat} />
               <Route path={'/pen-pals'} exact component={PenPals} />
               <Route path={'/'} exact component={MainPage} />
           </Switch>
       </section>
  )
};

export default App;
