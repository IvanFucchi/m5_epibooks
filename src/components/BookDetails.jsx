import { Container, Col, Row, Image } from "react-bootstrap";

const BookDetails = ({ book }) => {

  return (
    <>
      <Container className="my-4">
        <Row className="align-items-start d-flex">
          <Col xs={12} md={8} lg={9} className="h-90" >
            <Image 
            src={book.img} 
            alt={book.title} 
            fluid
            rounded
            thumbnail
            className="shadow mb-5"
            style={{ maxHeight: '700px', objectFit: 'contain' }} 
            />
          </Col>
          <Col xs={12} md={4} lg={3}>
          <h2>{book.title}</h2>
          <h4 className="text-muted">{book.author}</h4>
          <p className="mt-3">{book.description}</p>
          <p><strong>Genre:</strong> {book.category}</p>
          <p><strong>Price: $</strong> {book.price}</p>
          <p>Book id : {book.asin}</p>
          </Col>
        </Row>
      </Container>
    </>
  )

};

export default BookDetails;