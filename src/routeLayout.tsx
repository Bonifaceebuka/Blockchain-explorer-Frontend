import React from 'react'
import Home from './pages/Home';

import { RouteObject } from "react-router-dom";
const routesLayout: RouteObject[] = [
  { path: "/", element: <Home/> },
]

export default routesLayout;