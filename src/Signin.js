import React from "react";
import { useNavigate } from "react-router-dom";
import { UseCreateAuthDispatchContext } from "./context/AuthContext";

function Signin() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const { handleAuthChange } = UseCreateAuthDispatchContext();

  const handleClick = () => {
    if (userName !== "admin" || password !== "123") {
      return;
    }

    handleAuthChange(true);
    console.log(handleAuthChange);
    navigate("/");
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <label>Enter userName </label> <br />
      <input
        placeholder="Enter your name"
        name="username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <label>Enter password</label>
      <br />
      <input
        placeholder="Enter password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}

export default Signin;
