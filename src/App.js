import React from "react";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
};

export default App;
