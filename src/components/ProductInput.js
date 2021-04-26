import React from 'react';
import {connect} from 'react-redux';
import { Button, Form, Input,Label} from 'reactstrap';

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
    

  
}



    render(){
        return(
            <div className='ProductFormContainer'>
                <Form className='ProductForm' onSubmit={this.handleSubmit}>
                    <h5>Add a new Skincare Product</h5>
                    <Label>Name</Label>
                    <input type='text' name='name' value={this.state.name} placeholder='Product Name' onChange={this.handleChange}/>
                     <br></br>
                    <Label>Brand</Label>
                    <input type='text' name='brand' value={this.state.brand} placeholder='Product Brand' onChange={this.handleChange}/>
                    <br></br>
                    <Label>Image</Label>
                    <input type='text' name='image' value={this.state.image} placeholder='Product Image' onChange={this.handleChange}/>
                <Button>Add Product</Button>
                </Form>
            </div>
        )
    }
}

export default ProductInput;