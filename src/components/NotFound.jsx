import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



const NotFound = ({ pageNotFound, notFoundMessage }) => {
    return (
        <Container className="my-5">
            <div className="mb-4">
            <h1>404 Rap Rumeno Page not found.. </h1>
            <Link className="btn btn-primary" to="/">torna alla Home</Link>
            </div>
            <img src="/Govani.jpg" className="img-fluid my-4"/>
        </Container>         
    );
};

export default NotFound;