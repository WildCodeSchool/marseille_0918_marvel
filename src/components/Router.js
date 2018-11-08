import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Hero from "./Hero_Page/Hero";
import Home from "./Home";
import Page404 from "./Page404/page404";
import Tops from './Top/TopSuper/Top';
import TopBad from './Top/TopBad/TopBad';
import TopBiggest from './Top/TopBiggest/TopBiggest';
import TopWomen from './Top/TopWomen/TopWomen';
import Indexx from "./Indexx/Indexx";
import DCvsMarvel from "./Versus/DCvsMarvel/DCvsMarvel";
import XmenvsAvengers from "./Versus/XmenvsAvengers/XmenvsAvengers"

const RouterApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/character/:id" component={Hero} />
      <Route path="/tops" component={Tops} />
      <Route path="/topvilains" component={TopBad} />
      <Route path="/topbiggest" component={TopBiggest} />
      <Route path="/topwomen" component={TopWomen} />
      <Route path="/XmenvsAvengers" component={XmenvsAvengers} />
      <Route path="/DCvsMarvel" component={DCvsMarvel}/>
      <Route path="/index" component={Indexx} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
)

export default RouterApp;
