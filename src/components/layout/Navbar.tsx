import { FC, ReactElement } from "react";
import { Navbar as BNavbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import IRouteItem from "../../routes/models";
import { routes } from "../../routes/routes";
import NavLink from "./NavLink";

const Navbar: FC<{}> = (): ReactElement => {
    return (
        <BNavbar bg="light" expand="lg">
            <Container>
                <BNavbar.Brand>React-Bootstrap</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse role="navigation" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {routes.map((route: IRouteItem) => (
                            <NavLink key={route.key} route={route} />
                        ))}
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
};

export default Navbar;