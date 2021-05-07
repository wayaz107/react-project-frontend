export const addComment = (comment, productId) => {
    return(dispatch) => {
       fetch(`http://localhost:3000/products/${productId}/comments`, {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(comment)
       })
       .then(res => res.json())
       .then(product => {
           dispatch({type: 'ADD_COMMENT', payload: product})
       })
    };
};

export const deleteComment = (commentId, productId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/products/${productId}/comments/${commentId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(comment =>
            dispatch({type: 'DELETE_COMMENT', payload: comment})
            )
    }
}