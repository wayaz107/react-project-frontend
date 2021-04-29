import React from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Comments from '../containers/Comments';

const ProductShow = props => {

    let product = props.products.filter(product => product.id == props.match.params.id)[0];

    return(
    <div>
         <Card className = 'ProductShow'>
         <CardBody>
           <CardTitle style={{border: 'dotted' }}>{product && product.name} - {product && product.brand}</CardTitle>
           <CardImg className='ProductImage' src={product && product.image} alt={product && product.name} /><br></br><br></br>
        </CardBody>
        </Card>

        <Comments product={product} />
    </div>
    )
}

export default ProductShow;