import React from 'react';
import {connect} from 'react-redux';
import { Button, Form, Input } from 'reactstrap';

class ProductInput extends React.Component {

    state = {
        name:'',
        brand: '',
        image:''
    };

    render(){
        console.log(this.props)
        return(
            <div className='ProductFormContainer'>
                <Form className='ProductForm'>
                    <h5>Add a new Skincare Product</h5>
                    <input type='text' name='name' value={this.state.name} />
                </Form>

            </div>
        )
    }
}

export default ProductInput;