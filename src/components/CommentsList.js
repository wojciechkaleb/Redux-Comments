import React from 'react';
import Comment from './containers/CommentContainer';
import '../styles/CommentsList.css';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
export default CommentsList;