import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';


const OwnedProducts = props => {
    
    return (
    <div className='ProductContainer'>
       <h3 style={{color: 'white', fontWeight: '700', borderStyle: 'dotted' }}>Products You Already Have</h3>
      {props.products.map(product => {
      if(product.owned ===true){
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className = 'ProductCard'>
                <CardBody>
                   <CardTitle>{product.name} - {product.brand}</CardTitle>
                   <CardImg className='ProductImage' src={product.image} alt={product.name} />
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

export default OwnedProducts;

