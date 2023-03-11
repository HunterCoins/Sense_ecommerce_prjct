import { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
    const [category, setCategory] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [search, setSearch] = useState("");

    const handleCategoryFilter = (products) => {
        let filteredProducts = [];
        switch (category) {
            case "shirt":
                filteredProducts = products.filter(
                    (item) => item.category === "shirt"
                );
                break;
            case "pants":
                filteredProducts = products.filter(
                    (item) => item.category === "pants"
                );
                break;
            case "blazer":
                filteredProducts = products.filter(
                    (item) => item.category === "blazer"
                );
                break;
            case "shoes":
                filteredProducts = products.filter(
                    (item) => item.category === "shoes"
                );
                break;
            default:
                filteredProducts = products;
        }
        return filteredProducts;
    };

    const handleSortBy = (products) => {
        let filteredProducts = [];

        switch (sortBy) {
            case "ascending":
                filteredProducts = products.sort((a, b) => a.price - b.price);
                break;
            case "descending":
                filteredProducts = products.sort((a, b) => b.price - a.price);
                break;
            case "popularity":
                filteredProducts = products.sort(
                    (a, b) => b.popularity - a.popularity
                );
                break;
            default:
                filteredProducts = products;
        }
        return filteredProducts;
    };

    const handeSearch = (products) => {
        const searchedProducts = products.filter((item) =>
            item.productName.toLowerCase().includes(search.toLowerCase())
        );
        return searchedProducts;
    };

    const productsToRender = handleCategoryFilter(
        handleSortBy(handeSearch(products))
    );

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />

            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="4" sm="5" xs="12">
                            <div className="filter__widget">
                                <select
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                >
                                    <option>Filter By Category</option>
                                    <option value="shirt">Shirts</option>
                                    <option value="pants">Pants</option>
                                    <option value="blazer">Blazers</option>
                                    <option value="shoes">Shoes</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="5" xs="12">
                            <div className="filter__widget">
                                <select
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">
                                        Descending
                                    </option>
                                    <option value="popularity">
                                        Popularity
                                    </option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="5" sm="9" xs="12">
                            <div className="search__box">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row className="product__card-wrapper">
                        {productsToRender.length === 0 ? (
                            <h1 className="text-center fs-4">
                                No products are found!
                            </h1>
                        ) : (
                            <ProductsList data={productsToRender} />
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
