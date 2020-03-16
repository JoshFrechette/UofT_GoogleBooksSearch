import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Header from "./components/header";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Header />
          <Switch>
            <Route path="/saved" component={Saved} />
            <Route path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
