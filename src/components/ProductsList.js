import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const ProductsList = props => {
    return(
        <div className='ProductsContainer'>
        <Link to='/products/new' className='NewProductButton' role='button'>Add A New Product</Link>

            <h3>Products</h3>
            {props.products && props.products.map(product => 
           <Link key={product.id} to={`/products/${product.id}`}>
               <Card className = 'ProductCard'>
                   <CardBody>
                       <CardTitle>{product.name} - {product.brand}</CardTitle>
                       <CardImg className='ProductImage' src={product.image} alt={product.name} />
                   </CardBody>
               </Card>
           </Link>
            )}
        </div>
    )
}

export default ProductsList;

