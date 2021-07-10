import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import SearchPage from "./components/SearchPage/SearchPage";
import ShowDetailPage from "./components/ShowDetailPage/ShowDetailPage";

const App: React.FC<{}> = () => {
  return (
    <div className="container my-4">
      <Router>
        <Switch>
          <Route path="/shows/:showId">
            <ShowDetailPage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
