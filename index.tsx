// The library based stuff are imported here.
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// The user-defined components used are imported here.
import Header from "./components/common/Header";

// The pages used are imported here.
import HomePage from "./components/home/homepage";
import AboutPage from "./components/about/aboutpage";
import BlogsPage from "./components/blogs/blogspage";
import ContactPage from "./components/contact/contactpage";

import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/blogs">
              <BlogsPage />
            </Route>
            <Route>
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
