import { Card } from "react-bootstrap";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
    console.log("PROPS in SingleBook:", { selectedAsin, setSelectedAsin });
    const { theme } = useContext(ThemeContext);
    const isSelected = selectedAsin === book.asin;


    const handleClick = () => {
        console.log("Libro cliccato:", book.asin);
        setSelectedAsin(isSelected ? null : book.asin);
    };

    return (
        <>
            <Card
                className={`mb-4 shadow-sm ${isSelected ? "border border-danger border-3" : ""} , ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"} `}
                style={{ cursor: "pointer " }}
                onClick={handleClick}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>

            
            {/* {selected && <CommentArea asin={book.asin} />} */}
            
        </>
    );
};


export default SingleBook;