import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import store from './components/Redux/redux-store';
import { Provider } from 'react-redux';

ReactDOM.render(
        <HashRouter /* basename={process.env.PUBLIC_URL} */> {/* не работает  */}
                <Provider store={store}>
                        <App store={store} />
                </Provider>
        </HashRouter>, document.getElementById('root')
);


