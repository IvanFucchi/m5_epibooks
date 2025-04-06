import { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, onUpdateNeeded }) => {

const [editing, setEditing] = useState(false);

  // console.log("Rendering SingleComment editing:");

  const [newComment, setNewComment] = useState(comment.comment);
  const [newRate, setNewRate] = useState(comment.rate);

  const handleEdit = () => {
  
    setEditing(true);
    alert("editing!")
    
  };
  
  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDM5NzY2NDcsImV4cCI6MTc0NTE4NjI0N30.94bAa_zk_TJAxF4tFtCrGzJDaEXIoF1bdNCiyr28aO8",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: newComment,
            rate: newRate,
          }),
        }
      );

      if (response.ok) {
        alert("Modifica salvata!");
        setEditing(false);
        onUpdateNeeded();
      } else {
        alert("Errore nel salvataggio della modifica");
      }
    } catch (err) {
      console.error("Errore nella PUT:", err);
      alert("Errore di rete");
    }
  };

  const handleCancel = () => {
    setNewComment(comment.comment);
    setNewRate(comment.rate);
    setEditing(false);
  };

  const handleDelete = async () => {
    if (!window.confirm("Sei sicuro di voler eliminare questa recensione?")) return;

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDM5NzY2NDcsImV4cCI6MTc0NTE4NjI0N30.94bAa_zk_TJAxF4tFtCrGzJDaEXIoF1bdNCiyr28aO8",
          },
        }
      );

      if (response.ok) {
        alert("Recensione eliminata!");
        onUpdateNeeded();
      } else {
        alert("Errore nell'eliminazione.");
      }
    } catch (err) {
      console.error("Errore nella DELETE:", err);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {editing ? (
        <div>
          <Form.Control
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />

          <Form.Select
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value))}
            className="mb-2"
          >
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </Form.Select>

          <Button variant="success" size="sm" onClick={handleSave} className="me-2">
            Salva
          </Button>
          <Button variant="secondary" size="sm" onClick={handleCancel}>
            Annulla
          </Button>
        </div>
      ) : (
        <div>
          <strong>Voto:</strong> {comment.rate}
          <br />
          <em>{comment.comment}</em>
          <div className="mt-2">
            <Button variant="danger" size="sm" onClick={handleDelete} className="me-2">
              Elimina
            </Button>
            <Button variant="warning" size="sm" onClick={handleEdit}>
              Modifica
            </Button>
          </div>
        </div>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;