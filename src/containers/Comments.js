import React from 'react';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList'

class Comments extends React.Component {

    render() {
      return (
        <div>
        <CommentInput product={this.props.product}/>
        <CommentsList comments={this.props.product && this.props.product.comments}/>
        </div>
      );
    }
  };

export default Comments;