import { Card } from "react-bootstrap";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { Link } from "react-router-dom";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  // console.log("PROPS in SingleBook:", { selectedAsin, setSelectedAsin });
  const { theme } = useContext(ThemeContext);
  const isSelected = selectedAsin === book.asin;


  const handleClick = () => {
    // console.log("Libro cliccato:", book.asin);
    setSelectedAsin(isSelected ? null : book.asin);
  };

  return (
    <>
      <Card
        data-testid="book-card"
        onClick={handleClick}
        className={`h-100 mb-4 shadow-sm ${isSelected ? "border border-danger border-3" : ""} ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"} `}
      >
        <Card.Img
          data-testid="book-cover"
          variant="top"
          src={book.img}
          style={{ cursor: "pointer " }}

        />
        <Link to={`/books/${book.asin || ""}`}
          className="btn btn-secondary"
          onClick={(e) => e.stopPropagation()}
        > Book Details
        </Link>
        <Card.Body style={{ minHeight: "80px" }}>
          <Card.Title className="ellipsis-multiline">
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>


      {/* {selected && <CommentArea asin={book.asin} />} */}

    </>
  );
};


export default SingleBook;