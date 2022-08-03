import React from "react";
import { useCreateAuthStateContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const SigninRoute = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SigninRoute;
