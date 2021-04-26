import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './containers/Products';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={ Home } />
        <Products />
      </div>
      </Router>
    );
  }
};

export default App;