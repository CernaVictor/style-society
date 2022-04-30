import HomePage from "./pages/HomePage";
import Bracelets from "./pages/Bracelets";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Watches from "./pages/Watches";
import Perfume from "./pages/Perfume";
import Sunglasses from "./pages/Sunglasses";
import ProductPage from "./pages/ProductPage";

const Routes = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/bracelets" component={Bracelets} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/watches" component={Watches} />
        <Route exact path="/perfume" component={Perfume} />
        <Route exact path="/sunglasses" component={Sunglasses} />
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
