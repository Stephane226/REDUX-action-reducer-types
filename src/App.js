// IMPORT DEPENDENCIES
import React from "react"
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// IMPORT PAGES
import Todolist from "./pages/todolist/todolist";
import CreerList from "./pages/creerlist/creerlist";


const App = () => {

  let route = (
  <Switch>
    <Route path="/creer-list" component={CreerList} />
    <Route path="/" exact component={Todolist} />
    <Redirect to='/' />
  </Switch>
  )

  return (
    <>
     {route}
    </>
  )
}

export default  withRouter(App);
