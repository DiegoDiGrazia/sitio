import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HelmetProvider } from 'react-helmet-async';
import DynamicHeaders from './components/header/DynamicHeaders';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
      <DynamicHeaders/>
      <App />
      </Provider>
    </HelmetProvider>
  // </React.StrictMode>
);