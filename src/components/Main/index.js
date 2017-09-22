import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Roster from "./Roster"
import Schedule from "./Schedule"

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </main>
    )
  }
}

export default Main
