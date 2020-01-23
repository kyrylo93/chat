import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { UserFormProvider } from "./context/UserFormContext";
import { SitePageUserAccessProvider } from "./context/SitePageUserContext";

const FullApp = () => (
	<BrowserRouter>
		<SitePageUserAccessProvider>
			<UserFormProvider>
				<App />
			</UserFormProvider>
		</SitePageUserAccessProvider>
	</BrowserRouter>);

ReactDOM.render( <FullApp />, document.getElementById('root'));
serviceWorker.unregister();
