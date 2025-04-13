import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

// Create the authentication context
const AuthContext = createContext(null);

// Custom hook for using the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Auth provider component
export const AuthProvider = ({ children }) => {
    const role = useSelector((state) => state.role);

    const value = {
        role
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
