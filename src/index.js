import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'react-app-polyfill/ie9';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "scss/style.scss"; 

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

reportWebVitals();
