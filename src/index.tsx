import React from 'react';
import ReactDOM from 'react-dom/client';import reportWebVitals from './reportWebVitals';
import './assets/scss/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Recognizer from './routes/Recognizer';
import FAQ from './routes/FAQ';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/recognizer',
        element: <Recognizer />,
      },
      {
        path: '/faq',
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
