import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Package";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
