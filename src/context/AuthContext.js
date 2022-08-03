import React, { createContext, useContext, useState } from "react";

const CreateAuthStateContext = createContext(undefined);
const CreateAuthDispatchContext = createContext(undefined);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <CreateAuthStateContext.Provider value={isAuthenticated}>
      <CreateAuthDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
}
const useCreateAuthStateContext = () => {
  const context = useContext(CreateAuthStateContext);

  if (context === undefined) {
    throw Error(" useCreateAuthStateContext must be inside AuthProvider");
  }
  return context;
};

const UseCreateAuthDispatchContext = () => {
  const context = useContext(CreateAuthDispatchContext);

  if (context === undefined) {
    throw Error("UseCreateAuthDispatchContext must be inside AuthProvider");
  }
  return context;
};

const useAuthContext = () => {
  return [useCreateAuthStateContext, UseCreateAuthDispatchContext];
};

export {
  AuthProvider,
  useCreateAuthStateContext,
  UseCreateAuthDispatchContext,
  useAuthContext,
};
