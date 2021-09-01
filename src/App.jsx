import React from "react";
import Home from "./components/Home";
import Logo from "./components/logo";
import Navbar from "./components/Navbar";
import Sobre from "./components/About";
import Tools from "./components/Tools";
import "./css/App.css";
const App = () => {
  return (
    <>
      <div className="App">
        <Logo />
        <Navbar />
        <Home />
        <Sobre />
        <Tools />
      </div>
    </>
  );
};

export default App;
