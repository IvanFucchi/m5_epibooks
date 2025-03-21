import { Alert } from "react-bootstrap";

const Welcome = () => {
    return (
        <Alert variant="primary" className="text-center">
            <h1>Benvenuto alla Ceppaia</h1>
            <p>Esplora la nostra galassia di ceppi .</p>
        </Alert>
    );
};

export default Welcome;