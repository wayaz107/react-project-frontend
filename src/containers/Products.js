import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {fetchProducts} from '../actions/productActions';
import ProductInput from '../components/ProductInput';
import ProductsList from '../components/ProductsList';
import ProductShow from '../components/ProductShow';
import OwnedProducts from '../components/OwnedProducts';
import WishList from '../components/WishList';

class ProductsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <Switch>
                <Route path='/products/new' component={ProductInput} />
                <Route path='/products/owned' render={(routerProps) => <OwnedProducts {...routerProps} products={this.props.products}/>}/>
                <Route path='/products/wish-list' render={(routerProps) => <WishList {...routerProps} products={this.props.products}/>}/>
                <Route path='/products/:id' render={(routerProps) => <ProductShow {...routerProps} products={this.props.products}/>} />
                <Route path='/products' render={(routerProps) => < ProductsList {...routerProps} products={this.props.products}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect (mapStateToProps,{fetchProducts})(ProductsContainer);

