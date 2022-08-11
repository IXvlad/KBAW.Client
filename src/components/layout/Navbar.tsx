import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as BNavbar } from "react-bootstrap";
import { FC, ReactElement } from "react";

const Navbar: FC<{}> = (): ReactElement => {
    return (
        <BNavbar bg="light" expand="lg">
            <Container>
                <BNavbar.Brand href="#home">React-Bootstrap</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse role="navigation" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
};

export default Navbar;
