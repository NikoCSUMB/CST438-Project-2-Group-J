
import Navbar from "../components/Navbar";
import Items from "./Items";
import About from "./About";
import Contact from "./Contact";
import EditItem from "./UpdateItem";
import EditProfile from "./EditProfile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {} from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Items" exact component={Items} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/UpdateItem" exact component={EditItem} />
          <Route path="/EditProfile" exact component={EditProfile} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default Homepage;