import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import View404Component from "./components/viewComponents/View404Component"
import ViewAboutComponent from "./components/viewComponents/ViewAboutComponent"
import ViewHomeComponent from "./components/viewComponents/ViewHomeComponent"
import ViewTaskDetailsComponent from "./components/viewComponents/ViewTaskDetailsComponent"
import ViewTasksComponent from "./components/viewComponents/ViewTasksComponent"

function App() {
  return (
      <Router>
        <div className="container">
          <Header />

          <Switch>
            <Route path="/" exact component={ViewHomeComponent}/>
            <Route path="/about" component={ViewAboutComponent}/>

            <Route path="/tasks" exact component={ViewTasksComponent}/>
            <Route path="/tasks/:id" component={ViewTaskDetailsComponent}/>
            
            <Route path='*' component={View404Component}/>
          </Switch>

          <Footer />
      </div>
      </Router>
      
  )
}

export default App;
