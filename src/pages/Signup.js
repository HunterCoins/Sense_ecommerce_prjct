import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";

import "../styles/login.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            console.log(user);
            setLoading(false);
            toast.success("Account created");
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            setLoading(false);
        }
    };

    return (
        <Helmet title="Login">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="12" className="text-center">
                                <Spinner />{" "}
                            </Col>
                        ) : (
                            <Col lg="6" className="m-auto text-center">
                                <h3 className="fw-bold mb-4 login__title">
                                    Signup
                                </h3>

                                <Form className="auth__form" onSubmit={signup}>
                                    <FormGroup className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </FormGroup>

                                    <FormGroup className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </FormGroup>

                                    <button
                                        type="submit"
                                        className="buy__btn auth__btn signup__btn"
                                    >
                                        Create an Account
                                    </button>
                                    <p className="signup__bottom">
                                        Already have and account?
                                        <Link to="/login">Login</Link>
                                    </p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;
