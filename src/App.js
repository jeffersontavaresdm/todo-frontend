import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import AppRoutes from "./components/AppRountes";

function App() {
  return (
    <Router>
      <React.Fragment>
        <AppRoutes/>
      </React.Fragment>
    </Router>
  );
}

export default App;