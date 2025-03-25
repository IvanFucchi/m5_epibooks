import { Card } from "react-bootstrap";
import { useContext, useState } from "react";
import CommentArea from "../components/CommentArea";
import ThemeContext from "../ThemeContext";

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false)

    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <>
            <Card
                className={`mb-4 shadow-sm ${selected ? "border border-danger border-3" : ""} , ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"} `}
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