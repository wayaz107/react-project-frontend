import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import Button from './Button';


const ProductsList = props => {
    return(
        <div className='ProductsContainer'>
        <Link to='/products/new' className='NewProductButton' role='button'>Add A New Product</Link>

            <h3>Products</h3>
            {props.products && props.products.map(product => 
               <Card className = 'ProductCard'>
                <Link key={product.id} to={`/products/${product.id}`}>

                   <CardBody>
                       <CardTitle>{product.name} - {product.brand}</CardTitle>
                       <CardImg className='ProductImage' src={product.image} alt={product.name} />
                   </CardBody>
                   </Link>
                   <Button/>
               </Card>
            )}
        </div>

    )
}

export default ProductsList;

