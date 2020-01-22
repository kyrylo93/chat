import React from 'react';
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import {Switch, Route} from "react-router";

import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPalsPage/PenPals";
import Chat from "./containers/ChatPage/Chat";

import './App.css';

import { UserFormProvider } from './context/UserFormContext';
import { SitePageUserAccess } from "./context/SitePageUserContext";



const App = () => {
  return (
      <SitePageUserAccess>
          <UserFormProvider>
               <section>
                   <Toolbar />
                   <Switch>
                       <Route path={'/chat'} exact component={Chat} />
                       <Route path={'/pen-pals'} exact component={PenPals} />
                       <Route path={'/'} exact component={MainPage} />
                   </Switch>
               </section>
          </UserFormProvider>
      </SitePageUserAccess>
  )
};

export default App;
