import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/redux-store';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
          <App 
           /*  state={store.getState()} 
            dispatch={store.dispatch.bind(store)} */
            store={store}
          />
        </Provider>
        
      </BrowserRouter>,document.getElementById('root')
  );

}

rerenderEntireTree(store.getState());

store.subscribe(()=> {
  let state = store.getState();
  rerenderEntireTree(state)
});
