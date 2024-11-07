import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const isGithubPages = import.meta.env.VITE_APP_ENV === 'github';
const Router = isGithubPages ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
