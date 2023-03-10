import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToInfo = () => {
        navigate(`/shop/${item.id}`);
    };

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                image: item.imgUrl,
                price: item.price,
            })
        );

        toast.success("Product added successfully");
    };

    return (
        <Col lg="3" md="4" sm="6" xs="6" className="product__card">
            <div className="product__item">
                <div className="product__img" onClick={navigateToInfo}>
                    <img src={item.imgUrl} alt={item.productName} />
                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name">
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <span className="product__add" onClick={addToCart}>
                        <i className="ri-add-line"></i>
                    </span>
                </div>
            </div>
        </Col>
    );
};

export default ProductsCard;
