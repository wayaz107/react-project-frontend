import React from 'react';
import { Route } from 'react-router-dom';
import Products from './containers/Products';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={ Home } />
        <Products />
      </div>
    );
  }
};

export default App;