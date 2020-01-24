import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router";

import Chat from "./containers/ChatPage/Chat";
import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPalsPage/PenPals";
import NavBar from "./components/Navigation/NavBar/NavBar";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

import { SitePageUserContext } from "./context/SitePageUserContext";

const App = () => {
    const { isUserRegistered, isPenPalPicked } = useContext(SitePageUserContext);
    
  return (
       <section>
           <NavBar />
           <Switch>
               <Route path={'/'} exact>
                   <MainPage />
               </Route>
               
               <Route path={'/pen-pals'} exact>
                  {isUserRegistered ? <PenPals /> : <Redirect to={'/'} />}
               </Route>
               
               <Route path={'/chat'} exact>
                   {(isUserRegistered && isPenPalPicked) ? <Chat /> : <Redirect to={'/'} />}
               </Route>
    
               <Route path={'/error'} exact >
                   <ErrorPage />
               </Route>
               
           </Switch>
       </section>
  )
};

export default App;
