import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './assets/scss/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/AppRoot';
import Recognizer from './routes/Recognizer';
import FAQ from './routes/FAQ';
import APIPage from './routes/API';
import { route } from './misc/constants';
import Home from './routes/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: route.ROOT,
        element: <Home />,
      },
      {
        path: route.RECOGNIZER,
        element: <Recognizer />,
      },
      {
        path: route.API,
        element: <APIPage />,
      },
      {
        path: route.FAQ,
        element: <FAQ />,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
