import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Client from "./Components/client/Client.js";
import New from "./Components/client/New";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      {isLogin && <Navbar />}

      <Switch>
        <Route path="/" component={Client} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/all" component={AllUsers} exact />
        <Route path="/add" component={AddUser} exact />
        <Route path="/edit/:id" component={EditUser} exact />
        <Route path="/blog" component={New} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
