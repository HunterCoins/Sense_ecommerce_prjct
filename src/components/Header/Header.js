import { useRef, useEffect } from "react";

import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/logo.svg";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../customHooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
    {
        path: "home",
        display: "Home",
    },
    {
        path: "shop",
        display: "Shop",
    },
    {
        path: "cart",
        display: "Cart",
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const navigate = useNavigate();
    const currentUser = useAuth();

    const location = useLocation();

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 70 ||
                document.documentElement.scrollTop > 70
            ) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged Out");
                navigate("/home");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return () => {
            window.removeEventListener("scroll", stickyHeaderFunc);
        };
    }, []);

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    const navigateToCart = () => {
        navigate("/cart");
    };

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Sense</h1>
                            </div>
                        </div>

                        <div
                            className="navigation"
                            ref={menuRef}
                            onClick={menuToggle}
                        >
                            <ul className="menu">
                                {nav__links.map((obj, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={obj.path}
                                            className={(navClass) =>
                                                navClass.isActive
                                                    ? "nav__active"
                                                    : null
                                            }
                                        >
                                            {obj.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span
                                className="cart__icon"
                                onClick={navigateToCart}
                            >
                                <i className="ri-shopping-cart-2-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <div className="profile">
                                <img
                                    className="user__icon"
                                    src={userIcon}
                                    alt="userIcon"
                                />

                                <div className="profile__actions">
                                    {currentUser ? (
                                        <div
                                            onClick={logout}
                                            className="profile__logout"
                                        >
                                            Logout
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to="/signup">SignUp</Link>
                                            <Link
                                                to="/login"
                                                state={{
                                                    prevPath: location.pathname,
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mobile__menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
