import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      rate: rate.toString(),
      elementId: asin,
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        alert("Recensione aggiunta!");
        setComment("");
        setRate(1);
        onCommentAdded();
      } else {
        alert("Errore nell'invio della recensione");
      }
    } catch (err) {
      console.error("Errore nell'aggiunta commento:", err);
      alert("Errore di rete");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-2">
        <Form.Label>Scrivi una recensione</Form.Label>
        <Form.Control
          type="text"
          placeholder="La tua recensione..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Aggiungi Recensione
      </Button>
    </Form>
  );
};

export default AddComment;
