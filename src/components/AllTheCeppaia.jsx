import { Card, Container, Row, Col } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";
import romanceBooks from "../data/romance.json";

const AllTheCeppaia = () => {
    //unisce tutti i libri in un array
    const allBooks = [...fantasyBooks, ...horrorBooks, ...historyBooks, ...romanceBooks];
    
    return (
        <Container className="mt-4">
            <Row>
                {allBooks.map((book) => (
                    <Col key={book.asin} md={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AllTheCeppaia;