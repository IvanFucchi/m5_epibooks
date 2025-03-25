import SingleComment from "./SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = ({ comments, onUpdateNeeded }) => (
  <ListGroup className="mt-3">
    {comments.map((comment) => (
      <SingleComment
        key={comment._id}
        comment={comment}
        onUpdateNeeded={onUpdateNeeded}
      />
    ))}
  </ListGroup>
);

export default CommentsList;