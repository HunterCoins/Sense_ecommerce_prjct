import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner/Spinner";

import "../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { state } = useLocation();

    const signIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            setLoading(false);
            toast.success("Successfully logged in");
            navigate(
                state?.prevPath && state.prevPath !== "/login"
                    ? state.prevPath
                    : "/home"
            );
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    };

    return (
        <Helmet title="Login">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="12" className="text-center">
                                <Spinner />
                            </Col>
                        ) : (
                            <Col lg="6" className="m-auto text-center">
                                <h3 className="fw-bold mb-4 login__title">
                                    Login
                                </h3>
                                <Form className="auth__form" onSubmit={signIn}>
                                    <FormGroup className="form__group">
                                        <input
                                            type="email"
                                            name="email"
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
                                            name="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            autoComplete="current-password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </FormGroup>

                                    <button
                                        type="submit"
                                        className="buy__btn auth__btn login__btn"
                                    >
                                        Login
                                    </button>
                                    <p className="login__bottom">
                                        Don't have and account?
                                        <Link to="/signup">
                                            Create an account
                                        </Link>
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

export default Login;
