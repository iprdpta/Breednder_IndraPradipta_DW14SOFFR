import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./LandingPage/LandingPage.js";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import ProfileEdit from "./Profile/ProfileEdit/ProfileEdit.js";

function App() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Indie+Flower|Lacquer|Pacifico|Righteous|Titillium+Web:300,400,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Titillium+Web:300,400,700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Lobster|Pacifico|Righteous|Satisfy&display=swap" rel="stylesheet"></link>
      <Router>
        <Switch>
          <Route path="/profileedit">
            <ProfileEdit />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
