import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import BountyBoard from './pages/BountyBoard';
import Issues from './pages/Issues';
import Repos from './pages/Repos';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Profile from './pages/Profile';

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
      }, {
        path: '/about',
        element: <About /> //Change later...
      }, {
        path: '/bountyboard',
        element: <BountyBoard />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/success/*',
        element: <Success />
      }, {
        path: '/cancel/*',
        element: <Cancel />
      }, {
        path: '/profile',
        element: <Profile />
      }, {
        path: '/project',
        element: <Users />
      }, {
        path: '/project/:userId',
        element: <Repos /> //Change later...
      }, { // There should be a page between this where you find the GH user & repo and then are directed to issues
        path: '/project/:userId/:repoId',
        element: <Issues />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
