import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Routes/Home';
import EdInfantil from './Routes/EdInfantil';
import FazendasUrbanas from './Routes/FazendasUrbanas';
import Login from './Routes/Login';
import Empreendedores from './Routes/Empreendedores';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/educacaoinfantil",
    element: <EdInfantil />
  },
  {
    path: "/fazendasurbanas",
    element: <FazendasUrbanas />
  },
  {
    path: "/empreendedores",
    element: <Empreendedores />
  },
  {
    path: "/login",
    element: <Login />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
