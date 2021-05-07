import React from 'react';
import {connect} from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Comments from '../containers/Comments';
import {deleteProduct,toggleOwned, toggleWishList} from '../actions/productActions';
// import Button from './Button';

const ProductShow = props => {

    let product = props.products.filter(product => product.id == props.match.params.id)[0];

    const handleDelete = () => {
        props.deleteProduct(product.id);
        const path = '/products'
        props.history.push(path);
    }


    const handleOwned = () => {
        props.toggleOwned(product, product.id)
    }

    const handleWishList = () => {
        props.toggleWishList(product, product.id)
    }

    return (
    <div>
         <Card className = 'ProductShow'>
         <CardBody>
           <CardTitle style={{border: 'dotted' }}>{product && product.name} - {product && product.brand}</CardTitle>
           <CardImg className='ProductImage' src={product && product.image} alt={product && product.name} /><br></br><br></br>
        </CardBody>
        <Button onClick={handleOwned} className='OwnedButton' style={{alignItems: 'center'}}>
            {product && product.owned === false? 'Add to Personal Collection': 'Already Own It '}
        </Button>

        <Button onClick={handleWishList} className='WishListButton'>
            {product && product.wish_list === false? 'Add to Wish List' : 'This Is In your Wish List'}
        </Button>
        <Button onClick={handleDelete} className='DeleteButton'>Delete This Product</Button>
        </Card>
        
        <Comments product={product} />
    </div>
    )
}

export default connect(null, {deleteProduct,toggleOwned,toggleWishList})(ProductShow);