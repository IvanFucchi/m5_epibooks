import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import booksData from "../data/books.json";

const Book = () => {
    const {id} = useParams ()
    const bookDetail = booksData.fantasy.find(book => book.asin === id )
    console.log(bookDetail)

    return (
        <BookDetails book={bookDetail}/>
    )
};

export default Book;