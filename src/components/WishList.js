import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';


const WishList = props => {

    return (
        <div>
            {props.products.map(product => {
                if(product.wish_list === true) {
                    return (
                   <Link key={product.id} to={`/products/${product.id}`}>
                      <Card key={product.id} className='ProductCard'>
                       <CardBody>
                           <CardTitle>{product.name} - {product.brand}</CardTitle>
                       <CardImg className='ProductImage' src= {product.image} alt= {product.name}/>
                       </CardBody>
                   </Card>
                   </Link>
                    )
                } else {
                    return (
                        null
                    )
                }
            })}
        </div>
    )
}



export default WishList;
