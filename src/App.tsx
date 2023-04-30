import React from 'react';
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";

import routes from "./routeLayout";
import Header from "./components/header";
import Footer from './components/footer';
import CookieAlert from './components/cookieAlert';
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <CookieAlert />
      </>
  );
}

export default App;
