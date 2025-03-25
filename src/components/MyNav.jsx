import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useContext } from "react";
import ThemeContext from "../ThemeContext";



const MyNav = ({ searchQuery, setSearchQuery}) => {

    const { theme, setTheme } = useContext(ThemeContext);
    console.log("Tema attivo nella navbar:", theme);

    return (
        <Navbar bg={theme === "light" ? "light" : "dark"} variant={theme === "light" ? "light" : "dark"} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Browse our books.."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Form>
                    <Button 
                    variant="outline-light"
                    className="ms-auto rounded-pill "
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                      Change Theme    
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

MyNav.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};

export default MyNav;