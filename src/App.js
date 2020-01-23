import React, {useContext} from 'react';
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import {Switch, Route} from "react-router";

import MainPage from "./containers/MainPage/MainPage";
import PenPals from "./containers/PenPalsPage/PenPals";
import Chat from "./containers/ChatPage/Chat";
import {SitePageUserContext} from "./context/SitePageUserContext";


const App = () => {
    const { isUserRegistered, isUserPickedUser } = useContext( SitePageUserContext );
    
    console.log(isUserRegistered);
    console.log(isUserPickedUser);
    
  return (
       <section>
           <Toolbar />
           <Switch>
               {/*{ TODO:change null to Error component }*/}
               { (isUserRegistered && isUserPickedUser) ? <Route path={'/chat'} exact component={Chat} /> : null }
               { isUserRegistered ?  <Route path={'/pen-pals'} exact component={PenPals} /> : null }
               <Route path={'/'} exact component={MainPage} />
           </Switch>
       </section>
  )
};

export default App;
