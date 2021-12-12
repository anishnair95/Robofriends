import React, { Component } from 'react'
import CardList from '../Components/CardList';
// import {robots} from './robots'
import SearchBox from '../Components/SearchBox'
import './App.css'
import logo from './logo.svg'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundary';

class App extends Component {
  //state - it belongs to react state component
  //1.
  
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      exist: false
    }

    console.log('constructor')
  }

  //2.  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setTimeout(() => {
          this.setState({ robots: users })
          this.setState({ exist: true })
        }, 5000);

      })

    console.log('componentDidMount');
  }
  //3.
  onSearchChange = (event) => {
    console.log(event.target.value);
    //here we are setting the state variable
    this.setState({ searchfield: event.target.value })
  }

  //4.
  render() {
    //everytime this filters the robots variable of state component
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log('render');
    //if length of data =0 and exist - checks whether it is loaded for first time?
    if (filteredRobots.length === 0 && !this.state.exist) {
      return (
        <div className='App'>
          <img src={logo} alt="logo" className='App-logo mt7-ns' />
          <h1 className='tc'>Loading</h1>
        </div>
      )
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }

  }


}

export default App;
