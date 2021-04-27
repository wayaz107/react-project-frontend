import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {fetchProducts} from '../actions/productActions';
import ProductInput from '../components/ProductInput';
import ProductsList from '../components/ProductsList';
// import ProductShow from '../components/ProductShow';
import OwnedProducts from '../components/OwnedProducts';
import WishList from '../components/WishList';

class ProductsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <ProductInput/>
                <ProductsList products={this.props.products}/>
                <OwnedProducts products={this.props.products}/>
                <WishList products={this.props.products}/>
                {/* <ProductShow products={this.props.products}/> */}

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

