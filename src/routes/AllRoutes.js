import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Hobbies from "../components/pages/Hobbies";
import Contact from "../components/pages/Contact";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
