import "./App.scss";
import React from "react";
import Content from "./components/content/Content";
import Menu from "./components/menu/Menu";

const App = () => {

  
  return (
    <div className="app">
      <Menu />
      <Content />
    </div>
  );
};

export default App;
