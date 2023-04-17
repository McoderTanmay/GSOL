import React, { useReducer,useState } from "react";
import "./Login.css";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "BLUR") {
    return { isValid: state.value.includes("@") };
  }
};

const passReducer = (state, action) => {
  if (action.type === "USER_PASS") {
    return { value: action.vel, isValid: action.vel.trim().length > 6 };
  }
  if (action.type === "PASS_BLUR") {
    return { isValid: state.value.trim().length > 6 };
  }
};

function Nav(props) {
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passState, dispatchpass] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });
 const [validateForm,setvalidateForm]=useState(false);
  const emailchangeHandeler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", val: event.target.value });
    setvalidateForm( emailState.isValid && passState.isValid)
  };
  const passChangeHandeler = (event) => {
    dispatchpass({ type: "USER_PASS", vel: event.target.value });
    setvalidateForm(passState.isValid && emailState.isValid)
  };
  const submitHandeler = (event) => {
    event.preventDefault();
    props.checkVal(emailState.value,passState.value)
  };
  const validateEmail = () => {
    dispatchEmailState({ type: "BLUR" });
  };
  const validatePass = () => {
    dispatchpass({ type: "PASS_BLUR" });
  };
  
  return (
    <div className="form01">
      <form action="" className="outerform01" onSubmit={submitHandeler}>
      <p className="login-text">Log  In </p>
        <div className="form02">
          <label htmlFor="" className="labelEmail">
            E-Mail
          </label>
          <input
            type="text"
            className={`inputEmail ${
              emailState.isValid === false ? " invalidEmail" : ""
            }`}
            onChange={emailchangeHandeler}
            value={emailState.value}
            onBlur={validateEmail}
          />
        </div>
        <div className="form02">
          <label htmlFor="" className="labelPass">
            Password
          </label>
          <input
            type="password"
            className={`inputPasswd ${
              passState.isValid === false ? " invalidpass" : ""
            }`}
            onChange={passChangeHandeler}
            value={passState.value}
            onBlur={validatePass}
          />
        </div>
        <div className="container forbtn"> <button className="login-btn" disabled={!validateForm}>Login</button></div>
      </form>
    </div>
  );
}

export default Nav;
