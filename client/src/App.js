import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import Bookshelf from "./containers/bookshelf";
import NotFound from "./containers/NotFound";
import Search from "./containers/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/bookshelf" component={Bookshelf} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
