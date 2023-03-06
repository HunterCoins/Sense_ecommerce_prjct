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
            case "longsleeve":
                filteredProducts = products.filter((item) => item.category === "longsleeve");
                break;
            case "hoodie":
                filteredProducts = products.filter((item) => item.category === "hoodie");
                break;
            case "shoes":
                filteredProducts = products.filter((item) => item.category === "shoes");
                break;
            case "jeans":
                filteredProducts = products.filter((item) => item.category === "jeans");
                break;
            default:
                filteredProducts = products;
        }
        // setProductsData(filteredProducts);
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
                filteredProducts = products.sort((a, b) => b.popularity - a.popularity);
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

    const productsToRender = handleCategoryFilter(handleSortBy(handeSearch(products)));

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" />

            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select onChange={(e) => setCategory(e.target.value)}>
                                    <option>Filter By Category</option>
                                    <option value="longsleeve">Longsleeve</option>
                                    <option value="jeans">Jeans</option>
                                    <option value="hoodie">Hoodie</option>
                                    <option value="shoes">Shoes</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select onChange={(e) => setSortBy(e.target.value)}>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                    <option value="popularity">Popularity</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
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

            <section className="pt-o">
                <Container>
                    <Row>
                        {productsToRender.length === 0 ? (
                            <h1 className="text-center fs-4">No products are found!</h1>
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
