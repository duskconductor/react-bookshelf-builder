import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Bookshelf from "./containers/bookshelf";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";
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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/bookshelf" component={Bookshelf} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div>
            <p>Footer and etc</p>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
