import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename='/' hashType='noslash'>
        <Switch>
          <App />
        </Switch>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
