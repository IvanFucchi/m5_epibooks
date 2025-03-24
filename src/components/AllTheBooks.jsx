import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import booksData from "../data/books.json";
import SingleBook from "../components/SingleBook";
import { v4 as uuidv4 } from "uuid";

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Uniamo tutti i libri in un array, aggiungendo category e un id univoco
  const allBooks = [
    ...booksData.fantasy.map((book) => ({
      ...book,
      category: "fantasy",
      id: uuidv4(),
    })),
    ...booksData.horror.map((book) => ({
      ...book,
      category: "horror",
      id: uuidv4(),
    })),
    ...booksData.history.map((book) => ({
      ...book,
      category: "history",
      id: uuidv4(),
    })),
    ...booksData.romance.map((book) => ({
      ...book,
      category: "romance",
      id: uuidv4(),
    })),
  ];

  // Controllo duplicati per sicurezza
  useEffect(() => {
    const duplicates = allBooks.filter(
      (book, index, self) =>
        index !== self.findIndex((b) => b.id === book.id)
    );
    if (duplicates.length > 0) {
      console.warn("Attenzione: duplicati trovati!", duplicates);
    } else {
      console.log("Nessun duplicato trovato! ✅");
    }
  }, [allBooks]);

  // Filtro i libri in base alla search query
  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Form.Control
        type="text"
        placeholder="Browse all of our books ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.id} md={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
