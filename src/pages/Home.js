import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import products from "../assets/data/products";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [bestSales, setBestSales] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        const filteredTrending = products.filter(
            (item) => item.category === "shirt"
        );
        const filteredBest = products.filter(
            (item) => item.category === "pants"
        );
        const filteredNewArrivals = products.filter(
            (item) => item.category === "blazer"
        );
        const filteredPopular = products.filter(
            (item) => item.category === "shoes"
        );

        setTrending(filteredTrending);
        setBestSales(filteredBest);
        setNewArrivals(filteredNewArrivals);
        setPopular(filteredPopular);
    }, []);

    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="7" xs="12">
                            <div className="hero__content">
                                <p className="hero__subtitle">
                                    SENSE ECOMMERCE SHOP
                                </p>
                                <h2>
                                    Catch Your Own <br /> Stylish & Look
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quos blanditiis assumenda
                                    ducimus iure saepe mollitia vitae!
                                </p>

                                <button className="buy__btn">
                                    <Link to="/shop">SHOP NOW</Link>
                                </button>
                            </div>
                        </Col>

                        <Col lg="6" md="6" className="hero__bg"></Col>
                    </Row>
                </Container>
            </section>

            <Services />
            <section className="trending__products">
                <Container>
                    <h2 className="section__title mb-5 text-center">
                        Trending Products
                    </h2>
                    <Row className="product__card-wrapper">
                        <ProductsList data={trending} />
                    </Row>
                </Container>
            </section>
            <section className="best__sales">
                <Container>
                    <h2 className="section__title mb-5 text-center">
                        Best Sales
                    </h2>
                    <Row className="product__card-wrapper">
                        <ProductsList data={bestSales} />
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <h2 className="section__title mb-5 text-center">
                        New Arrivals
                    </h2>
                    <Row className="product__card-wrapper">
                        <ProductsList data={newArrivals} />
                    </Row>
                </Container>
            </section>
            <section className="popular__category">
                <Container>
                    <h2 className="section__title mb-5 text-center">
                        Popular in Category
                    </h2>
                    <Row className="product__card-wrapper">
                        <ProductsList data={popular} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
