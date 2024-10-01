import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: (
          <AuthProvider>
            <Login />
          </AuthProvider>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <AuthProvider>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </AuthProvider>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App>
      <AuthProvider />
    </App>
  </RouterProvider>
);
