import React from "react";
import "./BottomCont.css";
import './Content.css'

export default function BottomCont({ title, Mainline, btnText }) {
  return (
    <div className="bottom-content">
      <div className="bottom-head">{title}</div>
      <div className="bottom-mainline">{Mainline}</div>
      <a href="/" className="btn-area">
        <button className="bottom-btn">{btnText}</button>
      </a>
    </div>
  );
}
