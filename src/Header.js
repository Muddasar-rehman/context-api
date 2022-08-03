import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ flexDirection: "column" }}>
      <Link
        style={{
          margin: "10px",
          textDecoration: "none",
          color: "black",

          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          margin: "10px",
          textDecoration: "none",
          color: "black",

          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
        to="cart"
      >
        Cart
      </Link>
      <Link
        style={{
          margin: "10px",
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
        to="signin"
      >
        Signin
      </Link>
      <Link
        style={{
          margin: "10px",
          textDecoration: "none",
          color: "black",

          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
        to="signout"
      >
        SignOut
      </Link>
    </nav>
  );
}
export default Header;
