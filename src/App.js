import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer  from "./components/Footer";
import Destination from "./components/Destination";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Destination />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
