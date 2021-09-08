import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import 'react-app-polyfill/ie9';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "scss/style.scss"; 

ReactDOM.render(
	<HashRouter basename={process.env.PUBLIC_URL}> {/* github에서 BrowserRouter 지원안함 */}
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</HashRouter>,
	document.getElementById('root')
);

reportWebVitals();
