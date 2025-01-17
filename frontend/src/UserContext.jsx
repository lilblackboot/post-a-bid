import React, { createContext, useContext, useState } from 'react';

// Create a Context for User Data
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};
