import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import StarshipDetail from './pages/StarshipDetail/StarshipDetail';
import StarshipList from './pages/StarshipList/StarshipList';

import { getStarships } from './services/sw-api';

export default class App extends Component {

  state = {
    starships: [],
    ship: {}
  }

  async componentDidMount() {
    const {results} = await getStarships();
    this.setState({starships: results})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          React Star Wars
        </header>
        <Switch>
            <Route exact path="/" render={ props =>
              <StarshipList {...props} starships={this.state.starships}/>
            } />
            <Route exact path="/:id" render={ props => 
              <StarshipDetail {...props} starships={this.state.starships} />
            } />
        </Switch>
      </div>
    );
  }
}