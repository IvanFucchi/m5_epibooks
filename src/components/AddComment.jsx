import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, onCommentAdded }) => {
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState(1);

    const sendComment = async () => {
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
                    body: JSON.stringify(newComment),
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
                        "Content-Type": "application/json",
                    },
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
        } catch (error) {
            console.error("Errore:", error);
        }
    };

    return (
        <Form className="mt-3">
            <Form.Group>
                <Form.Label>Recensione</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Scrivi una recensione..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label>Voto (da 1 a 5)</Form.Label>
                <Form.Control
                    as="select"  // ✅ CORREZIONE QUI
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))} // ✅ E qui
                >
                    {[1, 2, 3, 4, 5].map((val) => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Button variant="success" className="mt-3" onClick={sendComment}>
                Invia recensione
            </Button>
        </Form>
    );
};

export default AddComment;
