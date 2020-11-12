import React from "react";
// import { Container } from "react-bootstrap";
import AlertMsg from "components/AlertMsg";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import HomePage from "containers/HomePage";
import RegisterPage from "containers/RegisterPage";
import LoginPage from "containers/LoginPage";
import MenuPage from "containers/menuPage/MenuPage";
import PromotionPage from "containers/promotionPage/PromotionPage";
import WeeklyMenuPage from "containers/weeklyMenuPage/WeeklyMenuPage";

const PublicLayout = () => {
  return (
    <>
      <AlertMsg />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/promotion" component={PromotionPage} />
        <Route exact path="/weeklyMenu" component={WeeklyMenuPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default PublicLayout;
