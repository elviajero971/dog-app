import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.scss";
import ImageDog from "./ImageDog";
const App = () => {
  const url = "https://dog.ceo/api/breeds/list/all";
  const [menuItem, setMenuItem] = useState();
  const linkArray = [];

  useEffect(() => {
    const asyncFunctionLinkBreed = async() => {
      try {
        const dataListItem = await fetch(url);
        const jsonDataListItem = await dataListItem.json();
        const jsonData = jsonDataListItem.message;
        for (const key in jsonData) {
          linkArray.push(
            <div className="menuItem">
              <Link to={`/${key}`}>
                {key}
              </Link>
            </div>
          );
        }
      } catch (exception) {
        linkArray.push("Error");
      }
      setMenuItem(linkArray);
    };
    asyncFunctionLinkBreed();
  }, []);
  return (
    <div className="app">
      <Router>
        <div className="menu">
          {menuItem}
        </div>
        <div className="content">
          <Switch>
            <Route path="/:breed">
              <ImageDog />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
