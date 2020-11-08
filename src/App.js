import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import Contact from "./Contact";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Router>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Welcome
            </Typography>
            <Nav />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/posts" exact>
            <Post />
          </Route>
          <Route path="/contact-us" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
