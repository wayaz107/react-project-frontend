import React from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {deleteComment} from '../actions/commentActions';

const CommentsList = props => {

  const handleDelete = (comment) => {
    props.deleteComment(comment.id, comment.product_id)
  }

  return (
        <div className='CommentsList'>
          {props.comments && props.comments.length === 0 ? <h6>There aren't Any Comments yet for this Product</h6> : <h5>Below are some reviews for this product:</h5>}
          <ListGroup>
            {props.comments && props.comments.map(comment =>
              <ListGroupItem style={{fontSize: 'xx-large' }} key={comment.id}>{comment.content} <Button onClick={() => handleDelete(comment)} className='DeleteButton'> Delete This Comment</Button></ListGroupItem>
            )}
          </ListGroup>
        </div>
      );
    };
    
export default connect(null, {deleteComment})(CommentsList);