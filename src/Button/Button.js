import React from "react";
import "./Button.scss";

const Button = ({ message = "Hello world" }) => {
  return (
    <>
      <input type="button" value={message} className="button"></input>
    </>
  );
};
export default Button;
