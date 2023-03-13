import { useEffect, useState, useRef } from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date().getFullYear();
    const accordionRef1 = useRef(null);
    const accordionRef2 = useRef(null);
    const accordionRef3 = useRef(null);

    useEffect(() => {
        return () => {
            // accordionRef.current.classList.remove("show");
        };
    }, []);

    const openAccordion = (e) => {
        e.target.classList.toggle("showed");
        // accordionRef.current.classList.toggle("show");
    };
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="6" sm="12" className="mb-4 footer__wrapper">
                        <div className="logo">
                            <div>
                                <h1 className="text-white">Sense</h1>
                            </div>
                        </div>

                        <p className="footer__text mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Saepe quibusdam repellendus sunt dolore
                            repellat iusto architecto sint quasi exercitationem
                            ducimus!
                        </p>
                    </Col>
                    <Col lg="3" md="3" sm="12" className="mb-4 footer__wrapper">
                        <div className="footer__quick-links ">
                            <h4
                                className="quick__links-title"
                                onClick={openAccordion}
                            >
                                Top Categories
                            </h4>
                            <div className="links__wrapper" ref={accordionRef1}>
                                <ListGroup className=" sm-horizontal">
                                    <ListGroupItem className="ps-0 border-0 ">
                                        <Link to="#">Shirts</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Pants</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Blazers</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Shoes</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" md="3" sm="12" className="mb-4 footer__wrapper">
                        <div className="footer__quick-links">
                            <h4
                                className="quick__links-title"
                                onClick={openAccordion}
                            >
                                Useful Links
                            </h4>
                            <div className="links__wrapper" ref={accordionRef2}>
                                <ListGroup className="sm-horizontal">
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/shop">Shop</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/cart">Cart</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/login">Login</Link>
                                    </ListGroupItem>
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#">Privacy Policy</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="12" sm="12">
                        <div className="footer__quick-links">
                            <h4
                                className="quick__links-title"
                                onClick={openAccordion}
                            >
                                Contact
                            </h4>
                            <div className="links__wrapper" ref={accordionRef3}>
                                <ListGroup className="footer__contact horizontal">
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i className="ri-map-pin-line"></i>
                                        </span>
                                        <p>
                                            96 Guildford Rd, East Dean, United
                                            Kingdom
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i className="ri-phone-line"></i>
                                        </span>
                                        <p>+079 1771 9756</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span>
                                            <i className="ri-mail-line"></i>
                                        </span>
                                        <p>some-email@gmail.com</p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>

                    <Col lg="12">
                        <p className="footer__copyright ">
                            <i className="ri-copyright-line"></i>
                            Copyright {year} developed by Someone. All rights
                            reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
