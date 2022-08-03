import React from "react";
import { UseCreateAuthDispatchContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const SignOutRoute = () => {
  const { handleAuthChange } = UseCreateAuthDispatchContext();

  handleAuthChange(false);

  return <Navigate to="/" />;
};

export default SignOutRoute;
