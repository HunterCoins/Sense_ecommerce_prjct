import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9" md="12" sm="12" xs="12">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center noitemsadded">
                                    No items added to the cart
                                </h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <Tr item={item} key={index} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3" md="12" sm="12" xs="12">
                            <div className="cart__subtotal d-flex align-items-center justify-content-between">
                                <h6>Subtotal</h6>
                                <span className="fs-4 fw-bold">
                                    ${totalAmount}
                                </span>
                            </div>
                            {cartItems.length === 0 ? null : (
                                <p className="cart__shipping fs-6 mt-2">
                                    taxes and shipping will calculate in
                                    checkout
                                </p>
                            )}

                            <div>
                                {cartItems.length === 0 ? null : (
                                    <button className="buy__btn w-100">
                                        <Link to="/checkout">Checkout</Link>
                                    </button>
                                )}

                                <button className="buy__btn w-100 mt-3">
                                    <Link to="/shop">Continue Shopping</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item }) => {
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
    };

    return (
        <tr>
            <td>
                <img src={item.image} alt="product" />
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}x</td>
            <td>
                <span>
                    <i
                        className="ri-delete-bin-line"
                        onClick={deleteProduct}
                    ></i>
                </span>
            </td>
        </tr>
    );
};

export default Cart;
