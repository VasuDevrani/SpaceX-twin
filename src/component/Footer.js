import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">SPACEX © 2022</div>
      <ul className="footer-list">
        <li>
          <a href="/" className="footer-list-link">
            Twitter
          </a>
        </li>
        <li>
          <a href="/" className="footer-list-link">
            Youtube
          </a>
        </li>
        <li>
          <a href="/" className="footer-list-link">
            Instagram
          </a>
        </li>
        <li>
          <a href="/" className="footer-list-link">
            Flickr
          </a>
        </li>
        <li>
          <a href="/" className="footer-list-link">
            Linkedin
          </a>
        </li>
        <li>
          <a href="/" className="footer-list-link">
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
}
