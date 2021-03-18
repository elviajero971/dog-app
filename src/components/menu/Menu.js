import "./Menu.scss";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
const Menu = () => {

    const url = "https://dog.ceo/api/breeds/list/all";

    const [menuItem, setMenuItem] = useState();
    const tempArrayList= [];
  
    useEffect(() => {
        const asyncFunction = async() => {
            try {
                const dataListItem = await fetch(url);
                const jsonDataListItem = await dataListItem.json();
                const jsonData = jsonDataListItem.message;
                for (const key in jsonData) {
                    tempArrayList.push(
                        <div className="menuItem">
                            <Link to={`/${key}`}>{key}</Link>
                        </div>
                        );
                }
            } catch (e) {
              tempArrayList.push("Error");
            }
            setMenuItem(tempArrayList);
        }
        console.log(tempArrayList);
        asyncFunction();
    }, [])
  return (
    <div className="menu">
        <Router>
            <div className="menuItem">
                <Link to={"All"}>{"All"}</Link>
            </div>
            {menuItem}
        </Router>
        
    </div>
  );
};

export default Menu;