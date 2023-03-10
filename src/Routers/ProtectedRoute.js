import React from "react";
import useAuth from "../customHooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const currentUser = useAuth();

    return currentUser ? (
        children
    ) : (
        <Navigate to="/login" state={{ prevPath: "/checkout" }} />
    );
};

export default ProtectedRoute;
