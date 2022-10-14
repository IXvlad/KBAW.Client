import NavLink from "@components/controls/NavLink";
import { resources } from "@resources/resources";
import IRouteItem from "@routes/models";
import { routes } from "@routes/routes";
import { FC, ReactElement } from "react";
import { Container, Navbar as BNavbar, Offcanvas } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";

const Navbar: FC<{}> = (): ReactElement => {
    const expand = "false";
    const key = `navbar-expand-${expand}`;

    return (
        <header>
            <BNavbar key={expand} expand={expand} className="bg-primary">
                <Container fluid>
                    <BNavbar.Brand>
                        <img src="../assets/images/Logo.png" width="35" height="30" className="d-inline-block align-top" alt="KBAW logo" />
                        <strong className="text-white">{resources.Labels.main_lbl.toUpperCase()}</strong>
                    </BNavbar.Brand>
                    <BNavbar.Toggle aria-controls={key} className="text-white border-0">
                        <List className="fs-2" />
                    </BNavbar.Toggle>
                    <BNavbar.Offcanvas id={`${key}-canvas`} aria-labelledby={key} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={key}>NAVIGATE</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {routes.map((route: IRouteItem) => (
                                    <NavLink key={route.key} route={route} />
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </BNavbar.Offcanvas>
                </Container>
            </BNavbar>
        </header>
    );
};

export default Navbar;
