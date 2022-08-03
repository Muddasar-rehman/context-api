import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import ProtectedRoutes from "./context/ProtectedRoute/ProtectedRoute";
import Header from "./Header";
import Home from "./Home";
import SigninRoute from "./routes/SigninRoute";
import SignOutRoute from "./routes/SignOutRoute";
import Signin from "./Signin";
// import SignOut from "./Signout";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <SigninRoute>
              <Signin />
            </SigninRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route path="/signout" element={<SignOutRoute />} />
      </Routes>
    </div>
  );
}

export default App;
