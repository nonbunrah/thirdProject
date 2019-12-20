import React, {Component} from 'react';
import Header from './Components/Header'
import Form from './Components/Form.js'
import NamesContainer from './Containers/NamesContainer'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import EditForm from './Components/EditForm.js'
import Info from './Components/Info.js'
import Home from './Components/Home.js'

class App extends Component {

  render () {
    return (
      <div className="App">
        <h1>Third Project</h1>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Names' component={NamesContainer} />
            <Route path='/Form' component={Form} />
            <Route path='/EditForm' component={EditForm} />
            <Route path='/:id' component={Info} />
          </Switch>
          <footer> &copy; RJ Bamrah</footer>
      </div>
    )
  }
}

export default App;
