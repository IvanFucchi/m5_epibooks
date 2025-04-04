
const BookDetails = ({book}) => {

    return (
        <>
        <h2>Libro con id : {book.asin}</h2>
        <h2>titolo : {book.title}</h2>
        </>
    )

};

export default BookDetails;