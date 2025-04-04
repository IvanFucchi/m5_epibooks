import React, { useState } from 'react';
import { Container, Col, Row, Image } from "react-bootstrap";
import { motion } from 'framer-motion';


const BookDetails = ({ book }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Container className="my-4">
        <Row className="align-items-start d-flex">
          <Col xs={12} md={8} lg={9} className="h-90" >
          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            initial={{opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1}}
            whileHover={{ scale: 1.05}}
            transition={{ duration: 1 }}
            style={{
              display: 'inline-block',
              borderRadius: '12px',
              boxShadow: hovered
                ? '0 12px 24px rgba(1, 1, 1, 1)'
                : '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Image 
            src={book.img} 
            alt={book.title} 
            fluid
            rounded
            className="shadow "
            style={{ maxHeight: '700px', objectFit: 'cover', borderRadius: '12px' }} 
            />
            </motion.div>
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