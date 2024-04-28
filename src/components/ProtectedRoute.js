import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        // Redirect to the sign-in page if there is no user
        return <Navigate to="/signin" replace />;
    }

    // If user exists, render the child components (protected content)
    return children;
};

export default ProtectedRoute;
