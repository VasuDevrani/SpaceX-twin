import React, { useState } from "react";
import "./Header.css";
import logoImg from "./logo.png";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Header() {

  const [{user}, dispatch] = useStateValue();
  console.log(user);

  // let prevScroll = window.screenY;
  const [prevScroll, setScroll] = useState(window.screenY);

  window.onscroll = () =>{
    const currentScroll = window.scrollY;
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");
    const IS_ACTIVE = "is-active";

    if(currentScroll > prevScroll){
      console.log("scroll down");
      // prevScroll = currentScroll;
      setScroll(currentScroll)
      if(currentScroll > 300)
      header.classList.remove('show')
      menu.classList.remove('open')
      hamburger.classList.remove(IS_ACTIVE);
    }
    else{
      console.log("scroll up");
      // prevScroll = currentScroll;
      setScroll(currentScroll)
      header.classList.add('show')
      menu.classList.remove('open')
      hamburger.classList.remove(IS_ACTIVE);
    }
  }

  // function for menu symbol change to cross
  const toggleMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");
    const IS_ACTIVE = "is-active";
    hamburger.classList.toggle(IS_ACTIVE);
    menu.classList.toggle("open");
  };

  // to address window scroll and navbar changes
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");

      if (window.scrollY > 300) {
        header.classList.add("backgroundColor");
      } else {
        header.classList.remove("backgroundColor");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  function LogOut(){
      auth.signOut();
      window.location.reload();
  }

  return (
    <div className="header show">
      <div className="back-header"></div>
      <div className="header-inner">
        <div className="head-logo">
          <a href="/">
            <img src={logoImg} alt="spacex" className="logo-img" />
          </a>
        </div>
        <div className="header-links">
          <ul>
            <li><a href="" className="nav-link-main">Falcon 9</a></li>
            <li><a href="" className="nav-link-main">falcon heavy</a></li>
            <li><a href="" className="nav-link-main">dragon</a></li>
            <li><a href="" className="nav-link-main">starship</a></li>
            <li><a href="" className="nav-link-main">spaceflight</a></li>
            <li><a href="" className="nav-link-main">starlink</a></li>
          </ul>
        </div>
        <div className="empty"></div>
        <div className="userItem">
        <ion-icon name="person-outline"></ion-icon>{!user ? <Link to='/login'>Login</Link> : user.displayName}
        <br />
        </div>
        <button onClick={LogOut} style={{marginLeft: '5px',marginTop: '5px', background: 'transparent', border: 'none', color: 'white'}}>{!user? "" : <ion-icon name="log-out-outline"></ion-icon>}</button>
        <button
          className="hamburger hamburger--spin"
          onClick={toggleMenu}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <div className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// <button style={{background: 'transparent', border: 'none', color: 'white'}}>Login</button>:user.displayName}
//         <button style={{marginTop: '5px', background: 'transparent', border: 'none', color: 'white'}}>{!user? "" : "Logout"}</button>
//         </div>