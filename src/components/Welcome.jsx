import { Alert } from "react-bootstrap";

const Welcome = () => {
    return (
        <Alert variant="primary" className="text-center">
            <h1>Welcome to our incredible selection of books</h1>
            <p>Explore our book selection</p>
        </Alert>
    );
};

export default Welcome;