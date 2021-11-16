import React, { Component } from 'react'
import { BrowserRouter, Switch, Route,Link } from "react-router-dom"

import Movies from './components/Movies'
import Movie from './components/Movie'

export class App extends Component {

  notFound () {
    return <h1>Error 404 <br /> Page not Found <br/> <Link to='/'><button>Home page</button></Link> </h1>
  }

  render() {
    return (
      <BrowserRouter>

        <Switch>

          <Route exact path="/" component={Movies} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route path='*' component={this.notFound} />

        </Switch>
      </BrowserRouter>    )
  }
}

export default App
