import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductsList from "../components/UI/ProductsList";

const ProductInfo = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === id);

    const dispatch = useDispatch();

    const { imgUrl, productName, price, description, shortDesc, category } = product;
    const relatedProducts = products.filter(
        (item) => item.category === category && item.productName !== productName
    );

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price,
            })
        );

        toast.success("Product added successfully");
    };

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="product__image">
                                <img src={imgUrl} alt="product" />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="product__price">${price}</span>
                                    <span>Category: {category.toUpperCase()}</span>
                                </div>
                                <p className="mt-3">{shortDesc}</p>

                                <button className="buy__btn" onClick={addToCart}>
                                    Add to cart
                                </button>
                            </div>
                        </Col>
                        <Col lg="12">
                            <h6 className="product__descr mt-5">Description</h6>
                            <p className="mt-4">{description}</p>
                        </Col>
                        <Col lg="12" className="mt-5">
                            <h2 className="related__title mb-5">You might also like</h2>
                        </Col>
                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductInfo;
