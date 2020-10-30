import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

const renderAll = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					store={store}
					state={state}
					dispatch={store.dispatch.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

renderAll(store.getState());

store.subscribe(() => {
	renderAll(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
