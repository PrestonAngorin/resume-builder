import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import type { ReactNode } from "react";


interface ProtectedRouteProps {
    children: ReactNode;
}


function ProtectedRoute({
    children,
}: ProtectedRouteProps) {

    const {
        currentUser,
        loading,
    } = useAuth();


    if (loading) {
        return <p>Loading...</p>;
    }


    if (!currentUser) {
        return <Navigate to="/login" />;
    }


    return children;
}


export default ProtectedRoute;