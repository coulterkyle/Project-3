import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
// import CheckoutSession from './pages/CheckoutSession';

import Issues from './pages/Issues'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/cancel',
        element: <Cancel />
      },
      // DO WE NEED A BOUNTY ROUTE?
      // {
      //   path: '/create-checkout-session',
      //   element: <CheckoutSession />
      // },
      { // There should be a page between this where you find the GH user & repo and then are directed to issues
        path: '/project/issues',
        element: <Issues />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
