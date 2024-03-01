import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
// import CheckoutSession from './pages/CheckoutSession';


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
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
