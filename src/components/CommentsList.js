import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CommentsList = props => {
    return (
        <div className='CommentsList'>
          {props.comments && props.comments.length === 0 ? <h6>There aren't Any Comments yet for this Product</h6> : <h5>Below are some reviews for this product:</h5>}
          <ListGroup>
            {props.comments && props.comments.map(comment =>
              <ListGroupItem style={{fontSize: 'xx-large' }} key={comment.id}>{comment.content} </ListGroupItem>
            )}
          </ListGroup>
        </div>
      );
    };
    
export default CommentsList;