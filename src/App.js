import React, {Component} from 'react';
import Header from './Components/Header'
import Form from './Components/Form.js'
import NamesContainer from './Containers/NamesContainer'
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <div className="App">
        <h1>Third Project</h1>
        <Header />
          <Switch>
            <Route path='/Names' component={NamesContainer} />
            <Route path='/Form' component={Form} />
          </Switch>
      </div>
    )
  }
}

export default App;
