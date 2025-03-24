import { useState } from "react";
import { Button, FormControl, ListGroup } from "react-bootstrap";



const SingleComment = ({ comment, onCommentDeleted }) => {

    const [editing, setEditing] = useState(false);
    const [newComment, setNewComment] = useState(comment.comment);
    const [newRate, setNewRate] = useState(comment.rate);

    const handleEdit = () => {
        setEditing(true);
    };
    const handleSave = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
                    },
                    body: JSON.stringify({
                        comment: newComment,
                        rate: newRate.toString(),
                    }),
                }
            );

            if (response.ok) {
                alert("Modifica salvata!");
                setEditing(false);
                onCommentDeleted();//oppure oncommentqualcosaltro ...
            } else {
                alert("Errore nel salvataggio della mdodifica");
            }
        } catch (err) {
            console.error("Errore nella PUT:", err);
            alert("errore di rete");
        }
        setEditing(false);
    };
    const handleCancell = () => {
        setEditing(false);
    };

    const handleDelete = async () => {
        const confirmed = window.confirm("Sei sicuro di voler eliminare questa recensione?");
        if (!confirmed) return;

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjZDk4NmU3MDMzNzAwMTUzMTZkZDQiLCJpYXQiOjE3NDI2NTk1NDUsImV4cCI6MTc0Mzg2OTE0NX0.P4cT4uLB46FY6HM94IdP_TZgMOdJGyT_Vwp0Nk-UT3U",
                    },
                }
            );


            if (response.ok) {
                alert("Recensione eliminata!");
                onCommentDeleted();//avvisa il componente genitore di aggioranre la lista
            } else {
                alert("Errore nell'eliminazione della recensione.");
            }
        } catch (error) {
            console.log("Errore:, error")
            alert("Errore di rete.");
        }

        
    };

    return (
        <ListGroup.Item className="d-flex justify-control-between align-item">
            {editing ? (
                <div>
                    <FormControl
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />

                    <FormControl
                        as="select"
                        value={newRate}
                        onChange={(e) => setNewRate(Number(e.target.value))}
                    >

                        {[1, 2, 3, 4, 5].map((val) => (
                            <option key={val} value={val}>{val}</option>
                        ))}
                    </FormControl>
                    <Button variant="success" size="sm" onClick={handleSave}>
                        Salva modifiche
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handleCancell}>
                        Anulla
                    </Button>


                </div>

            ) : (

                <div>   <strong>Voto:</strong> {comment.rate} <br />
                    <em>{comment.comment}</em>

                    <Button variant="danger" size="sm" onClick={handleDelete}>
                        Elimina
                    </Button>
                    <Button variant="warning" size="sm" onClick={handleEdit}>
                        Modifica
                    </Button>
                </div>
            )}
        </ListGroup.Item>
    );


};


export default SingleComment;