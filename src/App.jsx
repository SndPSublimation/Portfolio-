import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css';
import { Home, About,PageNotFound, Achievements, Contact,Products } from './Components';
import Layout from './Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route 
          path="*"
          element={<PageNotFound/>} 
        />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
