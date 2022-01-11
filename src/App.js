import logo from "./logo.svg";
import "./App.css";
import DisplayList from "./components/views/DisplayList";
import Detail from "./components/views/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DisplayList />
          </Route>
          <Route exact path="/character/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
