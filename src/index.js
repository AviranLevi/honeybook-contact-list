import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './app.scss';
import App from './App';
import ContactStore from './store/reducers/contacts';
import FeaturesStore from './store/reducers/featuers';

const enhancer = applyMiddleware(thunk);

const reducers = combineReducers({
  contacts: ContactStore,
  features: FeaturesStore,
});
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
