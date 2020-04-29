import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return <AuthContext.Provider value={isLoggedIn}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
