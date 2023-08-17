import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <About />,
        index: true
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);