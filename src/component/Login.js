import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import img from './logo.png'

export default function Login() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((err) => console.log(err.message))
      .finally(() => navigate("/"));
  };

  return (
    <div className="login">
      <div className="login-container">
      <div className="login-cont">
        <img
          src={img}
          alt="whatsappBRO"
          className="image"
        />
      </div>
      <div className="login-text">
        <h1>Sign in to SpaceX</h1>
      </div>
      <button className="signin-btn" onClick={signIn} type="submit">
        Sign In With Google
      </button>
      </div>
    </div>
  );
}
