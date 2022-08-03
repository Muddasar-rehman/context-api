import React from "react";
import { UseCreateAuthDispatchContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Prepaid.css";

const Prepaid = (props) => {
  const { handleAuthChange } = UseCreateAuthDispatchContext();
  const navigate = useNavigate();

  const ClickToAddCard = () => {
    // handleAuthChange(true);
    console.log(handleAuthChange);
    navigate("/signin");
  };

  return (
    <div className="container">
      <div className="block-container">
        <p>
          <span className="data-props duration-color">
            {props.value.Duration}
          </span>
        </p>
        <p>
          <span className="data-props">{props.value.PkgName}</span>
        </p>
        <p>
          Data:
          <span className="data-props">{props.value.DataFor}</span>
        </p>
        <p>
          JazzMins:
          <span className="data-props">{props.value.JazzMins}</span>
        </p>
        <p>
          OtherNetworkMins:
          <span className="data-props">{props.value.OtherNetworkMins}</span>
        </p>
        <p>
          SMS:
          <span className="data-props">{props.value.SMS}</span>
        </p>
        <p>
          Charges:
          <span className="data-props">{props.value.Charges}</span>
        </p>
        <button className="button" onClick={ClickToAddCard}>
          Subscribe
        </button>
        <img src={props.value.img}></img>
      </div>
    </div>
  );
};

export default Prepaid;
