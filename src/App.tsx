import React from 'react';
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";

import routes from "./routeLayout";
import HeroSection from "./components/heroSection";
import Header from "./components/header";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <HeroSection />
      </>
  );
}

export default App;
