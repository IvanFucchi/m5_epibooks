import SingleComment from "../components/SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = ({ comments, onCommentDeleted }) => (
    <ListGroup className="mt-3">
        {comments.map((comment) => (
            <SingleComment 
            key={comment._id} 
            comment={comment}
            onCommentDeleted={onCommentDeleted}
             />
        ))}    
    </ListGroup>
);

export default CommentsList;