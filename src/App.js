import React from "react";
import About from "./Components/About";
import Location from "./Components/Location";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Topbar from "./Components/Topbar";



function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <About />
      <Location  />
      <Projects />
    </div>
  );
}

export default App;
