import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import Home from './Components/Home/Home';
import AllCards from './Components/AllCards/AllCards';
import AllSets from './Components/AllSets/AllSets';
import AllSeries from './Components/AllSeries/AllSeries';
import SingleCard from './Components/SingleCard/SingleCard';
import SingleSeries from './Components/SingleCard/SingleSeries';
import SingleSet from './Components/SingleCard/SingleSet';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "AllCards",
    element: <AllCards />,
  },
  {
    path: "AllSets",
    element: <AllSets />
  },
  {
    path:"AllSeries",
    element:<AllSeries />
  },
  {
    path:"SingleCard/:localId",
    element:<SingleCard />
  },
  {
    path:"SingleSeries/:id",
    element:<SingleSeries />
  },
  {
    path:"SingleSet/:id",
    element:<SingleSet />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
  
);
