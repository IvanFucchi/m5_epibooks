import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Spinner, Alert } from "react-bootstrap";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log("asin ricevuto:", asin)

  const fetchComments = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      await new Promise((res) => setTimeout(res,600));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (asin) fetchComments();
  }, [asin]);

  return (
    <div className="mt-3">
      {loading && <Spinner animation="border" variant="info" />}
      {error && <Alert variant="danger">Errore nel caricamento commenti</Alert>}
      <AddComment asin={asin} onCommentAdded={fetchComments} />
      <CommentsList comments={comments} onUpdateNeeded={fetchComments} />
    </div>
  );
};

export default CommentArea;
