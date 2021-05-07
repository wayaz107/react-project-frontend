import React from 'react';
import {connect} from 'react-redux';
import { Col, Button, Form, FormGroup, Input ,Label} from 'reactstrap';
import { addProduct } from '../actions/productActions';

class ProductInput extends React.Component {

    state = {
        name:'',
        brand: '',
        image:''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
     e.preventDefault();
     this.props.addProduct(this.state);
     this.setState({
        name: '',
        brand: '',
        image: ''
        })
    }

    render(){
        return(
            <div className='ProductFormContainer'>
                <Form className='ProductForm' onSubmit={this.handleSubmit}>
                    
                    <h5>Add a new Skincare Product</h5>

                    <FormGroup row>
                    <Label for='name' sm={2}>Name</Label>
                    <Col md={10}>
                    <Input type='text' name='name' value={this.state.name} placeholder='Product Name' onChange={this.handleChange}/>
                    </Col>
                    </FormGroup>


                    <FormGroup row>
                    <Label for='brand' sm={2}>Brand</Label>
                    <Col md={10}>
                    <Input type='text' name='brand' value={this.state.brand} placeholder='Product Brand' onChange={this.handleChange}/>
                    </Col>
                    </FormGroup>


                    <FormGroup row>
                    <Label for='image' sm={2}>Image</Label>
                    <Col md={10}>
                    <Input type='text' name='image' value={this.state.image} placeholder='Product Image' onChange={this.handleChange}/>
                    </Col>
                    </FormGroup>

                  <Button>Add Product</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {addProduct})(ProductInput);