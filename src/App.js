import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductsContainer from './containers/ProductsContainer';


class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/products" component={ProductsContainer}/>
      </div>
      </Router>
    );
  }
}
 
export default App;
