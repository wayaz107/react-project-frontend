import React from 'react';
// import { connect } from 'react-redux';
// import { fetchProducts } from './actions/index'

class App extends React.Component {

componentDidMount() {
  fetch("http://localhost:3000/api/v1/products")
  .then(response => response.json())
  .then(data => console.log(data[0]))
  } 


  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}
 
export default App;
// export default connect(null, {fetchProducts})(App);