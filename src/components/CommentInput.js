import React from 'react';
import {connect} from 'react-redux';
import {Col, Button, Form, FormGroup,Label,Input} from 'reactstrap';
import { addComment} from '../actions/commentActions';


class CommentInput extends React.Component{
    
 state = {
     content: ''
 }

 handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state, this.props.product.id);
    this.setState({
      title: ''
    });
  };



 render() {
    return (
      <div className='CommentForm'>
        <Form onSubmit={this.handleSubmit}>
          
            <h5>Add a New Comment</h5>
          
          <FormGroup row>
            <Label for='content' sm={2}>Leave a Comment:</Label>
            <Col md={10}>
              <Input type='text' name='content' value={this.state.content} onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <Button>Add Comment</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addComment })(CommentInput);