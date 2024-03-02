import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './routes/routes.js';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// import { CleanBag } from './components/bag/BagFunctions.js';
// StartBag()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);