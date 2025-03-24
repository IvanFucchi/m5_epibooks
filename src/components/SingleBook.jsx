import { Card } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "../components/CommentArea";

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <>
            <Card
                className={`mb-4 shadow-sm ${selected ? "border border-danger border-3" : ""}`}
                style={{ cursor: "pointer " }}
                onClick={handleClick}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>

            {selected && <CommentArea asin={book.asin} />}
        </>
    );
};


export default SingleBook;